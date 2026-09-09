import heroPhoto from "@/imports/Uplifted-3/2e9226e2e1ce5e985a4db3551944b7213271701d.png";
import { Calendar } from "lucide-react";

export function Journey() {
  const milestones = [
    {
      date: "April 2023",
      title: "ArchieUplifts Begins",
      description: "First solo sessions at SRT/RMC. Teaching grades 3–6 every Saturday."
    },
    {
      date: "Sep – Dec 2023",
      title: "Communication Skills Module",
      description: "Chinese Whisper, Show and Tell, Picture Composition activities launched."
    },
    {
      date: "Jan – Feb 2024",
      title: "Teamwork Module",
      description: "Birthday Lineup, Collective Storytelling, and Debate activities introduced."
    },
    {
      date: "Mar – Sep 2024",
      title: "Public Speaking Module",
      description: "Poetry recitation, drama, storytelling. Courtyard Recitations begin."
    },
    {
      date: "Nov 2024 – Jan 2025",
      title: "Creativity Module",
      description: "Handprint Art, Time Travel Adventure, and imagination activities."
    },
    {
      date: "Feb – Apr 2025",
      title: "Entrepreneurship Module",
      description: "Trash to Treasure and Startup Stars activities launched."
    },
    {
      date: "January 2026",
      title: "The Turning Point",
      description: "Realization that English-medium delivery doesn't work for Gujarati-medium RMC students. Decision to redesign everything in Gujarati."
    },
    {
      date: "Jan – Feb 2026",
      title: "Gujarati Modules Created",
      description: "Complete curriculum redesigned in Gujarati. 7 Habits framework integrated. Collaboration with Khushi and Purni begins."
    },
    {
      date: "February 2026",
      title: "UpliftEd is Born",
      description: "Initiative renamed from ArchieUplifts to UpliftEd. Planning Committee of 8 IB students formed. IB Orientation pitch delivered."
    },
    {
      date: "March 2026",
      title: "First Large-Scale Rollout",
      description: "25 IB volunteers + 50 Green School volunteers teaching at RMC 92."
    },
    {
      date: "April 2026",
      title: "Infrastructure & Growth",
      description: "Donation Drive launched. Session tracking systems implemented. Alumni integration begins."
    },
    {
      date: "May 2026",
      title: "Formal Structure",
      description: "Formal roles, responsibilities, and task sheets established. Fundraiser planning. Website launch."
    },
  ];

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
          <h1 className="text-4xl md:text-6xl font-bold text-[#C0143C] mb-6">Our Journey</h1>
          <p className="text-xl text-gray-700">From solo sessions to a full-fledged initiative — three years of growth</p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative pl-12 pb-12 border-l-4 border-[#C0143C] last:border-l-0 last:pb-0">
                <div className="absolute left-0 top-0 -translate-x-1/2 bg-[#C0143C] rounded-full p-3">
                  <Calendar className="text-white" size={20} />
                </div>
                <div className="bg-[#F9F9F9] p-6 rounded-xl">
                  <div className="text-[#C0143C] font-bold text-sm mb-1">{milestone.date}</div>
                  <h3 className="text-2xl font-bold mb-3">{milestone.title}</h3>
                  <p className="text-gray-700">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Stats */}
      <section className="py-20 bg-gradient-to-r from-[#C0143C] to-[#7B0020]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">The Growth Story</h2>
          <p className="text-xl mb-12 opacity-90">From one person to a movement</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-5xl font-bold mb-2">1 → 75+</div>
              <div className="text-lg opacity-90">Solo teacher to 75+ volunteers</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">2 → 8</div>
              <div className="text-lg opacity-90">Schools reached (2 active, expanding)</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">210+ hours</div>
              <div className="text-lg opacity-90">Of direct teaching by the founder</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
