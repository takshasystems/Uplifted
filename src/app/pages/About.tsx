import { BookOpen, Share2, Users, Rocket } from "lucide-react";
import heroPhoto from "@/imports/Uplifted-6/e066bc69fb710b883528facabc9efe477914b54d.png";
import archiePhoto from "@/imports/Uplifted-6/f0eaa0ec47b5310d4137093945f35d79ca712134.png";
import khushiPhoto from "@/imports/Uplifted-6/e358401d647553eaf2e80ae8bffa9dcd739f653d.png";
import purniPhoto from "@/imports/Uplifted-6/355f5cfdaedb237431fb0f366f29d0a2bb70262e.png";

export function About() {
  const values = [
    "Honesty", "Kindness", "Respect", "Responsibility", "Empathy",
    "Courage", "Curiosity", "Confidence", "Perseverance", "Teamwork"
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden min-h-[313px] flex items-center justify-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(168deg, rgba(192,20,60,0.1) 0%, rgba(17,17,17,0.1) 100%)" }} />
          <div className="absolute inset-0 opacity-40 overflow-hidden">
            <img alt="" className="absolute w-full h-full object-cover" src={heroPhoto} />
          </div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <h1 className="text-4xl md:text-6xl font-bold text-[#C0143C] mb-6">About UpliftEd</h1>
          <p className="text-xl font-bold text-[#0a0a0a]">The story behind the initiative</p>
        </div>
      </section>

      {/* The Initiative */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">The Initiative</h2>
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              UpliftEd is a life skills and character development initiative based in India that teaches children in Grades 3–5 (ages 8–11) at RMC Government Schools in Rajkot, Gujarat.
            </p>
            <p>
              {`We don't reteach what schools already teach. We fill the gap — the one between academic knowledge and the skills children actually need to navigate life. Communication. Critical thinking. Collaboration. Creativity. Character values that become habits.`}
            </p>
            <p>
              {`UpliftEd isn't a tutoring program. It's a structured, volunteer-led curriculum designed to help children grow beyond the classroom.`}
            </p>
            <div className="bg-[#111111]/5 border-l-4 border-[#111111] p-6 rounded-lg my-8">
              <h3 className="font-bold text-xl mb-2">Our Vision</h3>
              <p className="italic">
                To empower every child with the skills, mindset, and character needed to thrive in school, relationships, and life.
              </p>
            </div>
            <p>
              Our educational philosophy is simple: the whole child matters. Academic grades are important, but they're not everything. A child who can think critically, communicate clearly, work with others, and approach problems creatively has the foundation to succeed anywhere.
            </p>
            <div className="bg-[#C0143C]/5 border-l-4 border-[#C0143C] p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2 text-[#C0143C]">Growing Through Partnership</h3>
              <p className="italic text-gray-700">
                UpliftEd has now joined hands with the Rotary Club of Rajkot Greater, which is helping us guide, support, and manage the initiative as it grows.
              </p>
              <p className="italic text-gray-700 mt-3">
                {`This partnership brings together UpliftEd's curriculum and volunteer-driven approach with Rotary's experience, guidance, and community support — helping us create a more structured and sustainable learning experience for the children we serve.`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Story */}
      <section className="py-20 bg-[#F9F9F9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">The Founder's Story</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="md:col-span-1">
              <div className="rounded-2xl overflow-hidden aspect-square">
                <img src={archiePhoto} alt="Archie Somaiya" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold mt-4">Archie Somaiya</h3>
              <p className="text-gray-600">Founder</p>
            </div>
            <div className="md:col-span-2 space-y-6 text-gray-700">
              <p>
                UpliftEd did not begin as an organisation. It began in April 2023 as solo teaching sessions at SRT and RMC School No. 92 in Rajkot, when Archie noticed that children were academically capable but lacked everyday life skills.
              </p>
              <p>
                Over two years of solo teaching — 210+ hours, 80+ children, every Saturday — the initiative evolved from individual worksheets and activities into a structured, team-led curriculum now called UpliftEd.
              </p>
              <p>
                What started as <strong>ArchieUplifts</strong> became <strong>UpliftEd</strong> in February 2026, reflecting the growth from one person teaching to a full team of volunteers, a Planning Committee of 8 IB students, 25 IB volunteers, and 50 Green School volunteers working together to reach more children.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">The Core Team</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Kunal Mehta - Rotary Member placeholder */}
            <div className="text-center">
              <div className="rounded-2xl overflow-hidden aspect-square mb-4" style={{ background: "linear-gradient(135deg, rgba(192,20,60,0.2) 0%, rgba(17,17,17,0.2) 100%)" }}>
              </div>
              <h3 className="text-xl font-bold">Kunal Mehta</h3>
              <p className="text-gray-600">Executive Head ; Rotary Member</p>
            </div>
            {/* Khushi Joshi */}
            <div className="text-center">
              <div className="rounded-2xl overflow-hidden aspect-square mb-4">
                <img src={khushiPhoto} alt="Khushi Joshi" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold">Khushi Joshi</h3>
              <p className="text-gray-600">Finance Manager ; TGES alumna</p>
            </div>
            {/* Purni Mukherjee */}
            <div className="text-center">
              <div className="rounded-2xl overflow-hidden aspect-square mb-4">
                <img src={purniPhoto} alt="Purni Mukherjee" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold">Purni Mukherjee</h3>
              <p className="text-gray-600">People Operations Manager ; TGES alumna</p>
            </div>
          </div>

          {/* The Committee */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">The Committee</h3>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { role: "Curriculum Head", names: ["Bharvi Parsaniya ; TGES alumna", "Dhruva Chug ; Rotary Member"], Icon: BookOpen },
                { role: "Social Media Head", names: ["Sheekha Mehta ; TGES alumna", "Misri Nathwani ; Rotary Member"], Icon: Share2 },
                { role: "Sessions Head", names: ["Nilesh Bhijani ; Rotary Member", "Sheetal Patel ; Rotary Member"], Icon: Users },
                { role: "Events & Expansion Head", names: ["Nivetha Amlani ; Rotary Member", "Meera Kotecha ; Rotary Member"], Icon: Rocket },
              ].map((item, index) => (
                <div key={index} className="bg-[#C0143C]/5 border-2 border-[#C0143C]/20 rounded-xl p-6 text-center hover:border-[#C0143C] hover:bg-[#C0143C]/10 transition-colors">
                  <div className="bg-[#C0143C] text-white p-3 rounded-full inline-block mb-4">
                    <item.Icon size={22} />
                  </div>
                  <div className="font-bold text-[#111111] text-sm leading-tight mb-2">{item.role}</div>
                  {item.names.map((name, ni) => (
                    <div key={ni} className="text-gray-500 text-xs font-bold">{name}</div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-[#F9F9F9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white border-2 border-[#C0143C] text-[#111111] px-6 py-3 rounded-full font-semibold hover:bg-[#C0143C] hover:text-white transition-colors"
              >
                {value}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
