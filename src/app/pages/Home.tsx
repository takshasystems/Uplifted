import { Link } from "react-router";
import { MessageCircle, Activity, BookOpen, Lightbulb, Users, Brain, Heart, Instagram, Play, School, Building2, HandHeart, GraduationCap, MapPin, Settings } from "lucide-react";
import heroPhoto from "@/imports/Uplifted/4e6a3ade12c7d5383d0c4f37d1c51f724cf35711.png";


export function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden min-h-[520px] flex items-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(159deg, rgb(192,20,60) 0%, rgb(249,249,249) 50%, rgb(17,17,17) 100%)" }} />
          <img alt="" className="absolute inset-0 w-full h-full object-cover opacity-60" src={heroPhoto} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#111111] mb-6 leading-tight">
            Building skills that last a lifetime.
          </h1>
          <p className="text-lg md:text-xl font-bold text-[#0a0a0a] mb-10 max-w-2xl mx-auto">
            UpliftEd teaches life skills, communication, critical thinking, and character to children in government schools — through stories, activities, and real-world learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/curriculum"
              className="bg-[#C0143C] text-white px-8 py-4 rounded-full font-semibold text-center hover:bg-[#A01030] transition-colors"
            >
              See Our Curriculum
            </Link>
            <Link
              to="/get-involved"
              className="border-2 border-[#C0143C] text-[#C0143C] px-8 py-4 rounded-full font-semibold text-center hover:bg-[#C0143C] hover:text-white transition-colors"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>

      {/* 3-Column Value Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-block bg-[#C0143C]/10 p-4 rounded-full mb-4">
                <Heart className="text-[#C0143C]" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Not academic tuition — life skills first</h3>
              <p className="text-gray-600">We don't reteach what schools already teach. We fill the gap between knowledge and real-world skills.</p>
            </div>
            <div className="text-center p-6">
              <div className="inline-block bg-[#C0143C]/10 p-4 rounded-full mb-4">
                <Activity className="text-[#C0143C]" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Activity-based, never lecture-based</h3>
              <p className="text-gray-600">Children learn by doing, reflecting, and practicing — not by sitting and listening.</p>
            </div>
            <div className="text-center p-6">
              <div className="inline-block bg-[#C0143C]/10 p-4 rounded-full mb-4">
                <BookOpen className="text-[#C0143C]" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Rooted in Indian stories and culture</h3>
              <p className="text-gray-600">We use Panchatantra tales and folk stories that children connect with and remember.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The 4Cs Section */}
      <section className="py-20 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-[#111111] mb-4">The 4Cs Framework</h2>
            <p className="text-xl text-gray-600">The essential skills every child needs to thrive</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-[#C0143C]/20 to-[#C0143C]/5 p-8 rounded-2xl">
              <div className="bg-[#C0143C] text-white p-3 rounded-full inline-block mb-4">
                <MessageCircle size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Communication</h3>
              <p className="text-gray-700">Express, listen, connect</p>
            </div>
            <div className="bg-gradient-to-br from-[#C0143C]/20 to-[#C0143C]/5 p-8 rounded-2xl">
              <div className="bg-[#C0143C] text-white p-3 rounded-full inline-block mb-4">
                <Brain size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Critical Thinking</h3>
              <p className="text-gray-700">Observe, question, decide</p>
            </div>
            <div className="bg-gradient-to-br from-[#C0143C]/20 to-[#C0143C]/5 p-8 rounded-2xl">
              <div className="bg-[#C0143C] text-white p-3 rounded-full inline-block mb-4">
                <Users size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Collaboration</h3>
              <p className="text-gray-700">Work together, grow together</p>
            </div>
            <div className="bg-gradient-to-br from-[#C0143C]/20 to-[#C0143C]/5 p-8 rounded-2xl">
              <div className="bg-[#C0143C] text-white p-3 rounded-full inline-block mb-4">
                <Lightbulb size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Creativity</h3>
              <p className="text-gray-700">Imagine, build, innovate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers Strip */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#C0143C] mb-2">75+</div>
              <div className="text-gray-600">Volunteers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#C0143C] mb-2">80+</div>
              <div className="text-gray-600">Children Mentored</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#C0143C] mb-2">210+</div>
              <div className="text-gray-600">Teaching Hours</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#C0143C] mb-2">3</div>
              <div className="text-gray-600">Years & Growing</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#C0143C] mb-2">2</div>
              <div className="text-gray-600">Active Schools</div>
            </div>
          </div>
        </div>
      </section>

      {/* Story-Based Learning Section */}
      <section className="py-20 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-[#111111]/5 border-l-4 border-[#111111] p-8 rounded-lg">
              <p className="text-2xl md:text-3xl font-serif italic text-gray-800 mb-4">
                "Children don't learn values from lectures. They discover them through stories."
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Learning Through Stories</h3>
              <p className="text-gray-700 mb-6">
                We use the timeless wisdom of Panchatantra tales and Indian folk stories to teach values that stick. Every session follows a simple, powerful flow:
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#C0143C] text-white flex items-center justify-center font-bold text-sm">1</div>
                  <p className="font-medium">Story — Engage their imagination</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#C0143C] text-white flex items-center justify-center font-bold text-sm">2</div>
                  <p className="font-medium">Reflection — Ask meaningful questions</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#C0143C] text-white flex items-center justify-center font-bold text-sm">3</div>
                  <p className="font-medium">Habit — Connect to daily life</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#C0143C] text-white flex items-center justify-center font-bold text-sm">4</div>
                  <p className="font-medium">Activity — Practice the skill</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#C0143C] text-white flex items-center justify-center font-bold text-sm">5</div>
                  <p className="font-medium">Real Life — Take it home</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With + Instagram */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Who We Work With */}
            <div>
              <p className="text-[#C0143C] font-semibold text-sm uppercase tracking-[1.4px] mb-3">Our Partners</p>
              <h3 className="text-4xl font-bold text-[#111111] mb-4 leading-tight">Who We Work With</h3>
              <p className="text-[#6a7282] text-base mb-10">UpliftEd partners with organisations that believe every child deserves a complete education.</p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Government Schools", Icon: School, desc: "We work with government schools to bring life skills and character development into children's learning journey." },
                  { label: "NGOs", Icon: HandHeart, desc: "We collaborate with NGOs working towards education and child development to reach more children." },
                  { label: "CSR Programs", Icon: Building2, desc: "We work with CSR initiatives that want to create measurable impact in education and expand our reach." },
                  { label: "Volunteer Educators", Icon: GraduationCap, desc: "Our volunteers bring the curriculum to life through engaging activities and conversations children connect with." },
                  { label: "Community Centers", Icon: MapPin, desc: "Community spaces become important places for children to learn life skills beyond the classroom." },
                  { label: "Greater Rotary", Icon: Settings, desc: "UpliftEd has joined hands with the Rotary Club of Rajkot Greater to strengthen and guide the initiative." },
                ].map(({ label, Icon, desc }) => (
                  <div key={label} className="flex flex-col items-center gap-2 p-4 rounded-[14px] border border-[rgba(192,20,60,0.15)] bg-white text-center h-[200px] justify-center">
                    <Icon size={22} className="text-[#C0143C] shrink-0" />
                    <p className="text-[12px] font-semibold text-[#111111] leading-tight">{label}</p>
                    <p className="text-[10px] text-[#111111] leading-[15px]">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Instagram */}
            <div>
              <p className="text-[#C0143C] font-semibold text-sm uppercase tracking-[1.4px] mb-3">Social</p>
              <h3 className="text-4xl font-bold text-[#111111] mb-3 leading-tight">Follow Our Journey</h3>
              <p className="text-[#6a7282] text-base mb-8">Real sessions. Real children. Real impact — every week.</p>

              {/* Instagram card */}
              <div className="rounded-2xl overflow-hidden border border-[#e5e7eb] bg-white shadow-lg max-w-sm">
                {/* Card header */}
                <div className="flex items-center gap-3 px-4 py-3 border-b border-[#f3f4f6]">
                  <div className="w-9 h-9 rounded-full shrink-0 flex items-center justify-center" style={{ background: "linear-gradient(135deg, #C0143C 0%, #7B0020 100%)" }}>
                    <Instagram className="text-white" size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[#111111] text-sm font-semibold leading-tight">uplifted_initiative</p>
                    <p className="text-[#99a1af] text-xs">Rajkot, Gujarat</p>
                  </div>
                  <a
                    href="https://www.instagram.com/uplifted_initiative/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C0143C] text-xs font-bold border border-[rgba(192,20,60,0.4)] px-3 py-1 rounded-full hover:bg-[#C0143C] hover:text-white transition-colors shrink-0"
                  >
                    Follow
                  </a>
                </div>

                {/* Reel preview */}
                <a
                  href="https://www.instagram.com/reel/DZwzp0wO5YE/?stkn=MWM5Y3kwN294anBpYw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block relative aspect-square overflow-hidden bg-[#111111]"
                >
                  <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(192,20,60,0.5) 0%, rgba(166,13,50,0.4) 25%, rgba(123,0,32,0.3) 50%, rgba(41,13,20,0.65) 75%, rgb(17,17,17) 100%)" }} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <div className="relative">
                      <div className="absolute inset-0 -m-5 rounded-full bg-white/10" />
                      <div className="relative bg-white/20 backdrop-blur-sm rounded-full p-5 group-hover:bg-white/30 group-hover:scale-105 transition-all duration-300">
                        <Play className="text-white fill-white" size={32} />
                      </div>
                    </div>
                    <span className="text-white/70 text-xs font-medium">Watch our latest reel</span>
                  </div>
                  <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm rounded-full px-2.5 py-1 flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C0143C] opacity-75" />
                    <span className="text-white text-[10px] font-semibold uppercase tracking-[0.5px]">Reel</span>
                  </div>
                </a>

                {/* Card footer */}
                <div className="px-4 py-3">
                  <p className="text-[#111111] text-sm font-medium mb-0.5">uplifted_initiative</p>
                  <p className="text-[#6a7282] text-xs leading-relaxed">Life skills for every child — every Saturday 🔴</p>
                  <a
                    href="https://www.instagram.com/uplifted_initiative/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 w-full flex items-center justify-center gap-2 bg-[#C0143C] text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-[#A01030] transition-colors"
                  >
                    <Instagram size={15} />
                    Open on Instagram
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-gradient-to-r from-[#C0143C] to-[#7B0020]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to bring life skills to a school near you?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/get-involved"
              className="inline-block bg-white text-[#C0143C] px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Partner With Us
            </Link>
            <Link
              to="/donate"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#C0143C] transition-colors"
            >
              <Heart size={20} className="fill-current" />
              Donate Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
