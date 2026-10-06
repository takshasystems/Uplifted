import { useState } from "react";
import { Link } from "react-router";
import { 
  Heart, 
  ShieldCheck, 
  CheckCircle2, 
  Download, 
  ArrowRight, 
  Sparkles, 
  HelpCircle, 
  Building, 
  CreditCard,
  QrCode,
  Copy,
  Check
} from "lucide-react";
import { toast } from "sonner";
import upiQrCode from "@/assets/upi_qr_code.jpg";
import { 
  initiateRazorpayPayment, 
  PaymentSuccessResponse, 
  fireConfetti 
} from "../utils/razorpay";

const PRESET_TIERS = [
  {
    amount: 500,
    title: "1 Student Module",
    description: "Covers printed Gujarati worksheets and activity materials for 1 child.",
    badge: "Popular",
  },
  {
    amount: 1500,
    title: "Class Activity Kit",
    description: "Provides stationery, games, and tactile learning kits for 15 children.",
    badge: "Most Impactful",
  },
  {
    amount: 5000,
    title: "Classroom Sponsor",
    description: "Funds an entire classroom's curriculum and mentorship for a full term.",
    badge: "Community Hero",
  },
  {
    amount: 10000,
    title: "School Champion",
    description: "Enables expansion to a new school cohort with volunteer training & modules.",
    badge: "Patron",
  },
];

export function Donate() {
  const [selectedAmount, setSelectedAmount] = useState<number>(1500);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [isCustom, setIsCustom] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [successData, setSuccessData] = useState<PaymentSuccessResponse | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    toast.success(`${label} copied to clipboard!`);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const [donorForm, setDonorForm] = useState({
    name: "",
    email: "",
    phone: "",
    pan: "",
    isAnonymous: false,
  });

  const finalAmount = isCustom ? Number(customAmount) || 0 : selectedAmount;

  const handleTierSelect = (amount: number) => {
    setSelectedAmount(amount);
    setIsCustom(false);
    setCustomAmount("");
  };

  const handleCustomFocus = () => {
    setIsCustom(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setDonorForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (finalAmount < 50) {
      toast.error("Please select or enter an amount of at least ₹50");
      return;
    }

    if (!donorForm.name.trim()) {
      toast.error("Please enter your name");
      return;
    }

    if (!donorForm.email.trim() || !donorForm.email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (!donorForm.phone.trim() || donorForm.phone.length < 10) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }

    setIsProcessing(true);

    try {
      await initiateRazorpayPayment({
        details: {
          amount: finalAmount,
          donorName: donorForm.name,
          donorEmail: donorForm.email,
          donorPhone: donorForm.phone,
          panNumber: donorForm.pan,
          isAnonymous: donorForm.isAnonymous,
        },
        onSuccess: (response) => {
          setIsProcessing(false);
          setSuccessData(response);
          toast.success("Thank you! Your donation was successful.");
        },
        onDismiss: () => {
          setIsProcessing(false);
          toast.info("Payment window was closed.");
        },
        onError: (err) => {
          setIsProcessing(false);
          toast.error(typeof err === "string" ? err : "Payment failed. Please try again.");
        },
      });
    } catch (error) {
      setIsProcessing(false);
      toast.error("Something went wrong initializing payment.");
    }
  };

  const handlePrintReceipt = () => {
    window.print();
  };

  return (
    <div className="w-full min-h-screen bg-[#FAFAF7]">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#111111] to-[#1a1a1a] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#C0143C] blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#C0143C] blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#C0143C]/20 border border-[#C0143C]/40 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#FF6B8B] mb-6">
            <Heart size={14} className="fill-[#C0143C]" /> Every Rupee Transforms a Classroom
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Invest in a Child's Future
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Your generous contribution funds student modules, activity kits, and volunteer mentorship for government school children in Rajkot.
          </p>
        </div>
      </section>

      {/* Main Donation Container */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 pb-24 relative z-20">
        {successData ? (
          /* Payment Success State */
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 text-center max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={44} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Thank You, {successData.donorName}!
            </h2>
            <p className="text-gray-600 mb-8">
              Your contribution of <strong className="text-gray-900 font-bold text-lg">₹{successData.amount.toLocaleString("en-IN")}</strong> has been successfully received. A confirmation has been sent to <span className="text-[#C0143C] font-medium">{successData.donorEmail}</span>.
            </p>

            {/* Receipt Summary Card */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-left mb-8 space-y-3 print:border-none">
              <div className="flex justify-between items-center text-sm border-b border-gray-200 pb-3">
                <span className="text-gray-500 font-medium">Payment ID</span>
                <span className="font-mono font-semibold text-gray-800">{successData.paymentId}</span>
              </div>
              <div className="flex justify-between items-center text-sm border-b border-gray-200 pb-3">
                <span className="text-gray-500 font-medium">Date & Time</span>
                <span className="text-gray-800 font-medium">{successData.date}</span>
              </div>
              <div className="flex justify-between items-center text-sm border-b border-gray-200 pb-3">
                <span className="text-gray-500 font-medium">Beneficiary</span>
                <span className="text-gray-800 font-semibold">UpliftEd Initiative</span>
              </div>
              <div className="flex justify-between items-center text-base pt-1">
                <span className="font-bold text-gray-900">Total Donated</span>
                <span className="font-bold text-2xl text-[#C0143C]">₹{successData.amount.toLocaleString("en-IN")}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center print:hidden">
              <button
                type="button"
                onClick={handlePrintReceipt}
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 hover:border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold transition-colors"
              >
                <Download size={18} /> Print Receipt
              </button>
              <button
                type="button"
                onClick={() => {
                  setSuccessData(null);
                  setSelectedAmount(1500);
                  setIsCustom(false);
                }}
                className="bg-[#C0143C] hover:bg-[#A01030] text-white px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Make Another Donation
              </button>
            </div>
          </div>
        ) : (
          /* Donation Form */
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left: Donation Tiers & Form */}
            <div className="lg:col-span-8 bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-10">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Step 1: Choose Amount */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <label className="text-lg font-bold text-gray-900 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#C0143C] text-white text-xs flex items-center justify-center">1</span>
                      Select Donation Amount (INR)
                    </label>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-4">
                    {PRESET_TIERS.map((tier) => {
                      const isSelected = !isCustom && selectedAmount === tier.amount;
                      return (
                        <button
                          key={tier.amount}
                          type="button"
                          onClick={() => handleTierSelect(tier.amount)}
                          className={`p-4 rounded-2xl border-2 text-left transition-all relative ${
                            isSelected
                              ? "border-[#C0143C] bg-[#C0143C]/5 shadow-sm ring-1 ring-[#C0143C]"
                              : "border-gray-200 hover:border-gray-300 bg-white"
                          }`}
                        >
                          {tier.badge && (
                            <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider bg-[#C0143C]/10 text-[#C0143C] px-2 py-0.5 rounded-full">
                              {tier.badge}
                            </span>
                          )}
                          <div className="text-2xl font-bold text-gray-900 mb-1">
                            ₹{tier.amount.toLocaleString("en-IN")}
                          </div>
                          <div className="text-xs font-semibold text-gray-800 mb-1">
                            {tier.title}
                          </div>
                          <div className="text-xs text-gray-500 leading-relaxed">
                            {tier.description}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Custom Amount */}
                  <div className="relative">
                    <label className="text-xs font-semibold text-gray-500 block mb-1.5">Or enter custom amount:</label>
                    <div className="relative rounded-xl shadow-sm">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                        <span className="text-gray-400 font-bold text-lg">₹</span>
                      </div>
                      <input
                        type="number"
                        min="50"
                        step="50"
                        placeholder="Other amount (min ₹50)"
                        value={customAmount}
                        onFocus={handleCustomFocus}
                        onChange={(e) => {
                          setIsCustom(true);
                          setCustomAmount(e.target.value);
                        }}
                        className={`w-full pl-9 pr-4 py-3 border-2 rounded-xl text-base font-semibold focus:outline-none transition-colors ${
                          isCustom
                            ? "border-[#C0143C] ring-1 ring-[#C0143C]"
                            : "border-gray-200 focus:border-[#C0143C]"
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Step 2: Donor Details */}
                <div>
                  <label className="text-lg font-bold text-gray-900 flex items-center gap-2 mb-4">
                    <span className="w-6 h-6 rounded-full bg-[#C0143C] text-white text-xs flex items-center justify-center">2</span>
                    Your Information
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={donorForm.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:border-[#C0143C] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={donorForm.email}
                        onChange={handleInputChange}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:border-[#C0143C] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number (10 digits) *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={donorForm.phone}
                        onChange={handleInputChange}
                        placeholder="9876543210"
                        maxLength={10}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:border-[#C0143C] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">PAN Number (Optional, for 80G)</label>
                      <input
                        type="text"
                        name="pan"
                        value={donorForm.pan}
                        onChange={handleInputChange}
                        placeholder="ABCDE1234F"
                        maxLength={10}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm uppercase focus:border-[#C0143C] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="isAnonymous"
                      name="isAnonymous"
                      checked={donorForm.isAnonymous}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-[#C0143C] border-gray-300 rounded focus:ring-[#C0143C]"
                    />
                    <label htmlFor="isAnonymous" className="text-xs text-gray-600 select-none">
                      Make my donation anonymous on public recognition lists
                    </label>
                  </div>
                </div>

                {/* Step 3: Checkout Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isProcessing || finalAmount < 50}
                    className="w-full bg-[#C0143C] hover:bg-[#A01030] disabled:bg-gray-300 text-white py-4 px-8 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 cursor-pointer disabled:cursor-not-allowed"
                  >
                    {isProcessing ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Opening Razorpay...
                      </>
                    ) : (
                      <>
                        Donate ₹{finalAmount > 0 ? finalAmount.toLocaleString("en-IN") : "0"} Securely
                        <ArrowRight size={20} />
                      </>
                    )}
                  </button>

                  <div className="mt-4 flex items-center justify-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck size={16} className="text-emerald-600" />
                      128-bit SSL Encrypted
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <CreditCard size={15} />
                      UPI, Cards, NetBanking
                    </span>
                    <span>•</span>
                    <span>Powered by Razorpay</span>
                  </div>
                </div>
              </form>
            </div>

            {/* Right: Impact Card & Alternative Bank Transfer */}
            <div className="lg:col-span-4 space-y-6">
              {/* Impact Card */}
              <div className="bg-gradient-to-br from-[#C0143C] to-[#800b27] text-white rounded-3xl p-6 sm:p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-full bg-white/20">
                    <Sparkles size={20} className="text-white" />
                  </div>
                  <h3 className="font-bold text-lg">Where Your Money Goes</h3>
                </div>
                <ul className="space-y-3.5 text-sm text-white/90">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-white shrink-0 mt-0.5" />
                    <span><strong>100%</strong> goes straight into child curriculum & session supplies.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-white shrink-0 mt-0.5" />
                    <span>Printed student workbooks in Gujarati for every enrolled child.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-white shrink-0 mt-0.5" />
                    <span>Volunteer training & orientation toolkits for weekly sessions.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-white shrink-0 mt-0.5" />
                    <span>Expansion to more government schools across Rajkot.</span>
                  </li>
                </ul>
              </div>

              {/* Scan & Pay via UPI QR Code */}
              <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm text-center">
                <div className="flex items-center justify-center gap-2 font-bold text-gray-900 mb-2">
                  <QrCode size={20} className="text-[#C0143C]" />
                  <h4 className="text-base">Scan & Pay via UPI QR</h4>
                </div>
                <p className="text-xs text-gray-600 mb-4">
                  Scan using GPay, PhonePe, Paytm, BHIM, or any UPI app
                </p>
                <div className="inline-block p-3 bg-gray-50 rounded-2xl border border-gray-100 shadow-inner">
                  <img
                    src={upiQrCode}
                    alt="UpliftEd UPI QR Code"
                    className="w-52 h-52 mx-auto object-contain rounded-xl"
                  />
                </div>
                <div className="mt-3 text-xs text-gray-600 font-medium">
                  <span className="text-gray-400">Account Name: </span>
                  <span className="font-semibold text-gray-900 block mt-0.5">ROTARY CLUB OF RAJKOT GREATER CHARITABLE TRUST</span>
                </div>
              </div>

              {/* Direct Bank Transfer / NEFT / RTGS / IMPS */}
              <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-2 font-bold text-gray-900 mb-3">
                  <Building size={18} className="text-[#C0143C]" />
                  <h4 className="text-base">Direct Bank Transfer (NEFT/RTGS)</h4>
                </div>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  Prefer direct transfer or institutional donation? Use these verified account details:
                </p>

                <div className="space-y-3 bg-gray-50 p-4 rounded-2xl text-xs text-gray-700">
                  <div className="flex flex-col pb-2.5 border-b border-gray-200/60 gap-1">
                    <span className="text-gray-500 font-sans">Account Name:</span>
                    <span className="font-bold text-gray-900 leading-snug">
                      ROTARY CLUB OF RAJKOT GREATER CHARITABLE TRUST
                    </span>
                  </div>

                  <div className="flex justify-between items-center pb-2.5 border-b border-gray-200/60">
                    <span className="text-gray-500 font-sans">Bank:</span>
                    <span className="font-semibold text-gray-900">Bank of Baroda</span>
                  </div>

                  <div className="flex justify-between items-center pb-2.5 border-b border-gray-200/60">
                    <span className="text-gray-500 font-sans">Branch Name:</span>
                    <span className="font-medium text-gray-800">TAGORE MARG RAJKOT</span>
                  </div>

                  <div className="flex justify-between items-center pb-2.5 border-b border-gray-200/60">
                    <span className="text-gray-500 font-sans">Account No:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-bold font-mono text-gray-900 text-sm">03610100004236</span>
                      <button
                        type="button"
                        onClick={() => handleCopy("03610100004236", "Account Number")}
                        className="p-1 text-gray-500 hover:text-[#C0143C] transition-colors rounded"
                        title="Copy Account Number"
                      >
                        {copiedField === "Account Number" ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pb-2.5 border-b border-gray-200/60">
                    <span className="text-gray-500 font-sans">IFSC Code:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-bold font-mono text-gray-900 text-sm">BARB0TAGORE</span>
                      <button
                        type="button"
                        onClick={() => handleCopy("BARB0TAGORE", "IFSC Code")}
                        className="p-1 text-gray-500 hover:text-[#C0143C] transition-colors rounded"
                        title="Copy IFSC Code (5th char is zero)"
                      >
                        {copiedField === "IFSC Code" ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pb-2.5 border-b border-gray-200/60">
                    <span className="text-gray-500 font-sans">MICR Code:</span>
                    <span className="font-mono text-gray-800">360012013</span>
                  </div>

                  <div className="flex flex-col gap-1 pt-0.5">
                    <span className="text-gray-500 font-sans">Branch Address:</span>
                    <span className="text-gray-700 text-[11px] leading-relaxed">
                      TAGORE MARG RUXMANI BUILDING NEAR ASTRON CINEMA RAJKOT, RAJKOT, GUJARAT, INDIA
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <span>Questions?</span>
                  <a href="mailto:upliftedinitiative@gmail.com" className="text-[#C0143C] font-semibold hover:underline">
                    upliftedinitiative@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-10">
            Frequently Asked Questions
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <h3 className="font-bold text-gray-900 text-base">Is my donation secure?</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Yes. All online payments are handled directly through Razorpay's RBI-compliant, 128-bit SSL encrypted payment gateway. We never store your card or banking credentials.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-gray-900 text-base">Can I donate in kind or sponsor supplies?</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Absolutely! We welcome donations of stationery, printing sponsorships, and activity materials. Reach out to us via our{" "}
                <Link to="/contact" className="text-[#C0143C] font-semibold hover:underline">Contact page</Link>.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-gray-900 text-base">Will I receive a receipt?</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Yes, immediately after your payment completes, you will see a downloadable/printable receipt on screen and receive a confirmation email.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-gray-900 text-base">Can corporate teams or CSR programs partner?</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Yes, UpliftEd actively collaborates with CSR initiatives and organizations. Visit our{" "}
                <Link to="/get-involved" className="text-[#C0143C] font-semibold hover:underline">Get Involved</Link> page to learn more.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
