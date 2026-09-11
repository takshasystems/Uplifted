import heroPhoto from "@/imports/Uplifted-5/1edaa0ada8ff41fab743b6aa98ef1024a24d5b8c.png";
import { Mail, MapPin, Instagram, CheckCircle2, ArrowRight, Heart, Send } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router";
import { toast } from "sonner";
import { fireConfetti } from "../utils/razorpay";

export function Contact() {
  const [searchParams] = useSearchParams();
  const initialRole = searchParams.get("role") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    role: initialRole,
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const roleParam = searchParams.get("role");
    if (roleParam) {
      setFormData((prev) => ({ ...prev, role: roleParam }));
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      toast.error("Please enter your full name.");
      return;
    }

    if (!formData.email.trim() || !formData.email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (!formData.role) {
      toast.error("Please select what describes you best.");
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      fireConfetti();
      toast.success("Thank you for reaching out! We will get back to you shortly.");
    }, 700);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      organization: "",
      role: "",
      message: ""
    });
    setIsSubmitted(false);
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden min-h-[300px] flex items-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(168deg, rgba(192,20,60,0.1) 0%, rgba(17,17,17,0.1) 100%)" }} />
          <div className="absolute inset-0 opacity-40 overflow-hidden">
            <img alt="" className="absolute w-full h-full object-cover" src={heroPhoto} />
          </div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <h1 className="text-4xl md:text-6xl font-bold text-[#C0143C] mb-6">Let's build something together.</h1>
          <p className="text-xl text-gray-700">Whether you're a school, NGO, volunteer, or supporter — we'd love to hear from you.</p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-[#FAFAF7] p-8 sm:p-10 rounded-3xl border border-gray-200/80 shadow-sm">
              <h2 className="text-3xl font-bold mb-2 text-gray-900">Send Us a Message</h2>
              <p className="text-sm text-gray-600 mb-8">
                Fill in the details below and a member of our team will respond within 24–48 hours.
              </p>

              {isSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Message Received!</h3>
                  <p className="text-gray-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. We have received your message and will reach out to you at <span className="text-[#C0143C] font-semibold">{formData.email}</span>.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="bg-[#C0143C] hover:bg-[#A01030] text-white px-8 py-3 rounded-full text-sm font-semibold transition-colors shadow-sm"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl text-sm focus:border-[#C0143C] focus:outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl text-sm focus:border-[#C0143C] focus:outline-none transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
                        Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl text-sm focus:border-[#C0143C] focus:outline-none transition-colors"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
                      Organization (Optional)
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl text-sm focus:border-[#C0143C] focus:outline-none transition-colors"
                      placeholder="Your school, NGO, or company"
                    />
                  </div>

                  <div>
                    <label htmlFor="role" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
                      I am a... *
                    </label>
                    <select
                      id="role"
                      name="role"
                      required
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl text-sm focus:border-[#C0143C] focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="">Select your role</option>
                      <option value="school">School Representative</option>
                      <option value="ngo">NGO / CSR Team</option>
                      <option value="volunteer">Potential Volunteer</option>
                      <option value="donor">Donor / Supporter</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl text-sm focus:border-[#C0143C] focus:outline-none transition-colors resize-none"
                      placeholder="Tell us how you'd like to get involved or what you'd like to know..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#C0143C] text-white px-8 py-4 rounded-full font-bold text-base hover:bg-[#A01030] disabled:bg-gray-300 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Get in Touch</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We are always eager to connect with like-minded individuals, educators, and organizations. Reach out directly or connect with us online.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#C0143C]/10 p-3 rounded-2xl shrink-0">
                    <MapPin className="text-[#C0143C]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600 text-sm">Rajkot, Gujarat, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#C0143C]/10 p-3 rounded-2xl shrink-0">
                    <Mail className="text-[#C0143C]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:contact@uplifted.org" className="text-gray-600 hover:text-[#C0143C] text-sm transition-colors">
                      contact@uplifted.org
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-3">Connect With Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/uplifted_initiative/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#C0143C]/10 p-3.5 rounded-full hover:bg-[#C0143C] hover:text-white transition-colors group"
                    title="Instagram"
                  >
                    <Instagram className="text-[#C0143C] group-hover:text-white" size={24} />
                  </a>
                  <a
                    href="mailto:contact@uplifted.org"
                    className="bg-[#C0143C]/10 p-3.5 rounded-full hover:bg-[#C0143C] hover:text-white transition-colors group"
                    title="Email Us"
                  >
                    <Mail className="text-[#C0143C] group-hover:text-white" size={24} />
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#C0143C]/5 to-[#111111]/5 p-6 rounded-2xl border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">Office & Session Hours</h3>
                <p className="text-gray-600 text-sm mb-3">
                  UpliftEd operates weekly sessions every Saturday morning across RMC government schools in Rajkot.
                </p>
                <p className="text-xs text-gray-500">
                  Online inquiries are typically answered within 24–48 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support / Donate Banner */}
      <section className="py-16 bg-gradient-to-r from-[#C0143C] to-[#7B0020] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white mb-6">
            <Heart size={14} className="fill-white" /> Online Donations Open
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Looking to Support Our Initiative Financially?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Support children with printed modules, activity materials, and volunteer mentorship. We accept secure donations via Razorpay (UPI, Cards, NetBanking).
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donate"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#C0143C] px-8 py-3.5 rounded-full font-bold text-base hover:bg-gray-100 transition-colors shadow-lg"
            >
              Donate Online via Razorpay
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
