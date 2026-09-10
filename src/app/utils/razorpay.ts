import confetti from "canvas-confetti";

export interface DonationDetails {
  amount: number; // in INR
  donorName: string;
  donorEmail: string;
  donorPhone: string;
  panNumber?: string;
  isAnonymous?: boolean;
}

export interface PaymentSuccessResponse {
  paymentId: string;
  orderId?: string;
  amount: number;
  donorName: string;
  donorEmail: string;
  donorPhone: string;
  date: string;
}

export function fireConfetti() {
  try {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#C0143C", "#E0325A", "#FF6B8B", "#FFD700", "#111111"],
    });
  } catch (err) {
    console.warn("Confetti error:", err);
  }
}

/**
 * Loads the Razorpay checkout.js script dynamically if not present
 */
export function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof window !== "undefined" && (window as any).Razorpay) {
      resolve(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

/**
 * Initializes Razorpay checkout
 */
export async function initiateRazorpayPayment({
  details,
  onSuccess,
  onDismiss,
  onError,
}: {
  details: DonationDetails;
  onSuccess: (res: PaymentSuccessResponse) => void;
  onDismiss?: () => void;
  onError?: (error: any) => void;
}) {
  const isScriptLoaded = await loadRazorpayScript();
  if (!isScriptLoaded) {
    onError?.("Failed to load Razorpay SDK. Please check your internet connection.");
    return;
  }

  // Get Key ID from environment or fallback test placeholder
  const razorpayKey =
    import.meta.env.VITE_RAZORPAY_KEY_ID || "rzp_test_placeholder";

  // If running with dummy placeholder key, support simulated test mode with prompt
  const isDemoKey =
    !razorpayKey ||
    razorpayKey === "rzp_test_placeholder" ||
    razorpayKey.includes("placeholder");

  if (isDemoKey) {
    // Offer simulated payment for development/demo testing if no actual key is configured yet
    const proceedWithSimulation = window.confirm(
      `Razorpay Key ID is not configured yet.\n\nWould you like to complete a Test Donation of ₹${details.amount} to test the receipt and celebration flow?\n\n(To accept real payments, add VITE_RAZORPAY_KEY_ID to your Vercel Environment Variables).`
    );

    if (proceedWithSimulation) {
      setTimeout(() => {
        fireConfetti();
        onSuccess({
          paymentId: "pay_test_" + Math.random().toString(36).substring(2, 10).toUpperCase(),
          amount: details.amount,
          donorName: details.donorName,
          donorEmail: details.donorEmail,
          donorPhone: details.donorPhone,
          date: new Date().toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          }),
        });
      }, 700);
      return;
    } else {
      onDismiss?.();
      return;
    }
  }

  const options = {
    key: razorpayKey,
    amount: details.amount * 100, // Razorpay takes amount in paise
    currency: "INR",
    name: "UpliftEd Initiative",
    description: `Donation of ₹${details.amount} for Children's Life Skills`,
    image: "/favicon.ico",
    prefill: {
      name: details.isAnonymous ? "Anonymous Supporter" : details.donorName,
      email: details.donorEmail,
      contact: details.donorPhone,
    },
    notes: {
      cause: "Life skills & character education for government schools",
      pan: details.panNumber || "N/A",
      isAnonymous: details.isAnonymous ? "Yes" : "No",
    },
    theme: {
      color: "#C0143C",
    },
    modal: {
      ondismiss: () => {
        onDismiss?.();
      },
    },
    handler: (response: any) => {
      fireConfetti();
      onSuccess({
        paymentId: response.razorpay_payment_id || "pay_" + Math.random().toString(36).substring(2, 10),
        orderId: response.razorpay_order_id,
        amount: details.amount,
        donorName: details.donorName,
        donorEmail: details.donorEmail,
        donorPhone: details.donorPhone,
        date: new Date().toLocaleDateString("en-IN", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      });
    },
  };

  try {
    const rzp = new (window as any).Razorpay(options);
    rzp.on("payment.failed", function (res: any) {
      onError?.(res.error?.description || "Payment failed. Please try again.");
    });
    rzp.open();
  } catch (err) {
    onError?.(err);
  }
}
