import heroPhoto from "@/imports/Uplifted-5/1edaa0ada8ff41fab743b6aa98ef1024a24d5b8c.png";
import { Mail, MapPin, Instagram, Youtube } from "lucide-react";
import React, { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    role: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    alert("Thank you for reaching out! We'll get back to you soon.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#C0143C] focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#C0143C] focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-semibold mb-2">
                    Organization (Optional)
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#C0143C] focus:outline-none transition-colors"
                    placeholder="Your school, NGO, or company"
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-semibold mb-2">
                    I am a... *
                  </label>
                  <select
                    id="role"
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#C0143C] focus:outline-none transition-colors"
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
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#C0143C] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us how you'd like to get involved or what you'd like to know..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#C0143C] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#A01030] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="bg-[#C0143C]/10 p-3 rounded-full">
                    <MapPin className="text-[#C0143C]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Location</h3>
                    <p className="text-gray-700">Rajkot, Gujarat, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#C0143C]/10 p-3 rounded-full">
                    <Mail className="text-[#C0143C]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-gray-700">contact@uplifted.org</p>
                  </div>
                </div>
              </div>

              <h3 className="font-bold text-xl mb-4">Connect With Us</h3>
              <div className="flex gap-4 mb-12">
                <a
                  href="https://www.instagram.com/uplifted.rajkot/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#C0143C]/10 p-4 rounded-full hover:bg-[#C0143C] hover:text-white transition-colors group"
                  title="Instagram"
                >
                  <Instagram className="text-[#C0143C] group-hover:text-white" size={28} />
                </a>
                <a
                  href="mailto:contact@uplifted.org"
                  className="bg-[#C0143C]/10 p-4 rounded-full hover:bg-[#C0143C] hover:text-white transition-colors group"
                  title="Email Us"
                >
                  <Mail className="text-[#C0143C] group-hover:text-white" size={28} />
                </a>
              </div>

              <div className="bg-gradient-to-br from-[#C0143C]/10 to-[#111111]/10 p-8 rounded-2xl">
                <h3 className="font-bold text-xl mb-4">Office Hours</h3>
                <p className="text-gray-700 mb-4">
                  UpliftEd is a student-led initiative. We typically respond to inquiries within 2-3 business days.
                </p>
                <p className="text-gray-700">
                  <strong>Sessions:</strong> Saturday mornings at RMC schools
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section className="py-20 bg-[#F9F9F9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#C0143C] to-[#7B0020] rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Support Our Mission</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Your donation helps us print modules, train volunteers, and reach more children with life skills education.
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-8 max-w-2xl mx-auto">
              <h3 className="font-bold text-lg mb-4">What Your Donation Supports:</h3>
              <ul className="text-left space-y-2">
                <li>• Printing student modules and activity sheets</li>
                <li>• Materials and supplies for hands-on activities</li>
                <li>• Training sessions for new volunteers</li>
                <li>• Expansion to new schools and communities</li>
                <li>• Program evaluation and impact tracking</li>
              </ul>
            </div>
            <div className="space-y-4">
              <p className="text-lg font-semibold">Bank Transfer Details:</p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 max-w-md mx-auto text-left">
                <p><strong>Account Name:</strong> UpliftEd Initiative</p>
                <p><strong>Bank:</strong> [Bank Name]</p>
                <p><strong>Account Number:</strong> [Account Number]</p>
                <p><strong>IFSC Code:</strong> [IFSC Code]</p>
              </div>
              <p className="text-sm opacity-75 mt-4">
                For donation inquiries or to discuss partnership opportunities, please contact us at contact@uplifted.org
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
