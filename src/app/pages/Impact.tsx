import { Link } from "react-router";
import React, { useState } from "react";
import { toast } from "sonner";
import { CheckCircle2, Heart } from "lucide-react";
import { fireConfetti } from "../utils/razorpay";
import heroPhoto from "@/imports/Uplifted-4/bd1001397395c23659c95463de50a2cd3827340e.png";
import galleryPhoto1 from "@/imports/Uplifted-4/e52644c7560f782fc82fede227bb72f1dcc460be.png";
import galleryPhoto2 from "@/imports/Uplifted-4/266ff0dbee4503ef76b9299768f449cafa54576e.png";
import galleryPhoto3 from "@/imports/Uplifted-4/2b41c94a9ad5473c8eaef3e1c6dfedf34be80d8c.png";
import galleryPhoto4 from "@/imports/Uplifted-4/d092f8f81eb15a00d7d78786194300419a55592c.png";
import galleryPhoto5 from "@/imports/Uplifted-4/7e5ab10b98d60223efceb832a4a73ad6538ae4c6.png";
import galleryPhoto6 from "@/imports/Uplifted-4/11a26b402ffc423028362fd2b69b6f04daa165c5.png";

export function Impact() {
  const [volunteerForm, setVolunteerForm] = useState({
    name: "",
    email: "",
    phone: "",
    availability: "",
    experience: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!volunteerForm.name.trim()) {
      toast.error("Please enter your name");
      return;
    }

    if (!volunteerForm.email.trim() || !volunteerForm.email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (!volunteerForm.phone.trim() || volunteerForm.phone.length < 10) {
      toast.error("Please enter a valid phone number");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      fireConfetti();
      toast.success("Thank you for your application! We will contact you soon.");
    }, 600);
  };

  const handleVolunteerChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setVolunteerForm({
      ...volunteerForm,
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
          <h1 className="text-4xl md:text-6xl font-bold text-[#C0143C] mb-6">Our Impact</h1>
          <p className="text-xl text-gray-700">Real results from three years of dedicated work</p>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-[#C0143C]/10 to-[#C0143C]/5 p-8 rounded-2xl text-center">
              <div className="text-5xl font-bold text-[#C0143C] mb-3">75+</div>
              <div className="text-xl font-semibold mb-2">Active Volunteers</div>
              <p className="text-gray-600">IB students, college volunteers, and educators teaching every week</p>
            </div>
            <div className="bg-gradient-to-br from-[#C0143C]/10 to-[#C0143C]/5 p-8 rounded-2xl text-center">
              <div className="text-5xl font-bold text-[#C0143C] mb-3">80+</div>
              <div className="text-xl font-semibold mb-2">Children Mentored</div>
              <p className="text-gray-600">Directly taught by the founder over 210+ hours</p>
            </div>
            <div className="bg-gradient-to-br from-[#C0143C]/10 to-[#C0143C]/5 p-8 rounded-2xl text-center">
              <div className="text-5xl font-bold text-[#C0143C] mb-3">3</div>
              <div className="text-xl font-semibold mb-2">Years & Growing</div>
              <p className="text-gray-600">Continuous operation since April 2023</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#C0143C]/10 to-[#C0143C]/5 p-8 rounded-2xl text-center">
              <div className="text-5xl font-bold text-[#C0143C] mb-3">5</div>
              <div className="text-xl font-semibold mb-2">Life Skills Modules</div>
              <p className="text-gray-600">Complete curriculum covering the 4Cs framework</p>
            </div>
            <div className="bg-gradient-to-br from-[#C0143C]/10 to-[#C0143C]/5 p-8 rounded-2xl text-center">
              <div className="text-5xl font-bold text-[#C0143C] mb-3">210+</div>
              <div className="text-xl font-semibold mb-2">Teaching Hours</div>
              <p className="text-gray-600">Direct instruction and mentoring by Archie</p>
            </div>
            <div className="bg-gradient-to-br from-[#C0143C]/10 to-[#C0143C]/5 p-8 rounded-2xl text-center">
              <div className="text-5xl font-bold text-[#C0143C] mb-3">2</div>
              <div className="text-xl font-semibold mb-2">Schools Currently Active</div>
              <p className="text-gray-600">SRT and RMC School No. 92 in Rajkot</p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 bg-[#F9F9F9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Sessions in Action</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[galleryPhoto1, galleryPhoto2, galleryPhoto3, galleryPhoto4, galleryPhoto5, galleryPhoto6].map((photo, i) => (
              <div key={i} className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img src={photo} alt={`UpliftEd session ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Your Time */}
      <section className="py-20 bg-white" id="volunteer">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4 text-center">Volunteer Your Time</h2>
          <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
            Join our team of dedicated volunteers and help empower children with life skills. Fill out the form below and we'll get in touch with you.
          </p>
          <div className="bg-[#F9F9F9] p-8 rounded-2xl border border-gray-200">
            {isSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Application Submitted!</h3>
                <p className="text-gray-600 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you for stepping up to make a difference! Our volunteer coordinator will review your application and reach out to you at <span className="text-[#C0143C] font-semibold">{volunteerForm.email}</span> with orientation details.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setVolunteerForm({ name: "", email: "", phone: "", availability: "", experience: "" });
                      setIsSubmitted(false);
                    }}
                    className="bg-[#C0143C] hover:bg-[#A01030] text-white px-8 py-3 rounded-full text-sm font-semibold transition-colors shadow-sm"
                  >
                    Submit Another Application
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleVolunteerSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="v-name" className="block text-sm font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="v-name"
                      name="name"
                      required
                      value={volunteerForm.name}
                      onChange={handleVolunteerChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#C0143C] focus:outline-none transition-colors bg-white"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="v-email" className="block text-sm font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="v-email"
                      name="email"
                      required
                      value={volunteerForm.email}
                      onChange={handleVolunteerChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#C0143C] focus:outline-none transition-colors bg-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="v-phone" className="block text-sm font-semibold mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="v-phone"
                      name="phone"
                      required
                      value={volunteerForm.phone}
                      onChange={handleVolunteerChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#C0143C] focus:outline-none transition-colors bg-white"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="v-availability" className="block text-sm font-semibold mb-2">
                      Availability *
                    </label>
                    <select
                      id="v-availability"
                      name="availability"
                      required
                      value={volunteerForm.availability}
                      onChange={handleVolunteerChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#C0143C] focus:outline-none transition-colors bg-white"
                    >
                      <option value="">Select your availability</option>
                      <option value="weekends">Weekends Only</option>
                      <option value="weekdays">Weekdays</option>
                      <option value="flexible">Flexible Schedule</option>
                      <option value="once-a-month">Once a Month</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="v-experience" className="block text-sm font-semibold mb-2">
                    Tell us about yourself and why you want to volunteer *
                  </label>
                  <textarea
                    id="v-experience"
                    name="experience"
                    required
                    value={volunteerForm.experience}
                    onChange={handleVolunteerChange}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#C0143C] focus:outline-none transition-colors resize-none bg-white"
                    placeholder="Share your background, teaching experience (if any), and what motivates you to volunteer with UpliftEd..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#C0143C] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#A01030] disabled:bg-gray-300 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Submitting Application...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#F9F9F9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">What Volunteers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <p className="text-gray-700 italic mb-4">
                "Seeing the children's eyes light up when they connect a story to their own life — that's the moment you know UpliftEd works."
              </p>
              <div className="font-semibold">— IB Volunteer</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <p className="text-gray-700 italic mb-4">
                "I joined for CAS hours. I stayed because these sessions genuinely change how children think and communicate."
              </p>
              <div className="font-semibold">— Green School Volunteer</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <p className="text-gray-700 italic mb-4">
                "The Volunteer Guides make it so easy. You don't need to be an expert teacher — you just need to care."
              </p>
              <div className="font-semibold">— College Student Volunteer</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-to-r from-[#C0143C] to-[#7B0020]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to be part of this impact?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join us as a volunteer, partner with your school, or support our work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/get-involved"
              className="inline-block bg-white text-[#C0143C] px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Involved
            </Link>
            <Link
              to="/donate"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#C0143C] transition-colors"
            >
              <Heart size={20} className="fill-current" />
              Donate to the Cause
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
