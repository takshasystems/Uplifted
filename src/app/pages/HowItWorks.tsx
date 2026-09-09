import { BookOpen, Users, FileText, Sparkles } from "lucide-react";
import heroPhoto from "@/imports/Uplifted-2/c372098368b246e55b90b46c12ec09c256df4d4c.png";
import volunteerPhoto from "@/imports/Uplifted-2/4d81529b8154e205fbc34741df23250bc6980aa1.png";

export function HowItWorks() {
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
          <h1 className="text-4xl md:text-6xl font-bold text-[#C0143C] mb-6">How It Works</h1>
          <p className="text-xl text-gray-700">Our experiential learning model and volunteer-led delivery system</p>
        </div>
      </section>

      {/* Learning Methodology */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Learning Methodology</h2>
            <p className="text-xl text-gray-600">Children learn by doing, not by listening.</p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="bg-[#C0143C] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold mb-2">Story or Activity</h3>
              <p className="text-gray-600 text-sm">Engage their imagination with a relatable story or hands-on activity</p>
            </div>
            <div className="text-center">
              <div className="bg-[#C0143C] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold mb-2">Participate & Discuss</h3>
              <p className="text-gray-600 text-sm">Children actively participate and share their thoughts</p>
            </div>
            <div className="text-center">
              <div className="bg-[#C0143C] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold mb-2">Reflection</h3>
              <p className="text-gray-600 text-sm">Meaningful questions help them think deeply about what they learned</p>
            </div>
            <div className="text-center">
              <div className="bg-[#C0143C] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-bold mb-2">Connect to Life</h3>
              <p className="text-gray-600 text-sm">Link the skill or value to their daily experiences</p>
            </div>
            <div className="text-center">
              <div className="bg-[#C0143C] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                5
              </div>
              <h3 className="font-bold mb-2">Take It Home</h3>
              <p className="text-gray-600 text-sm">Students practice the skill at home and in real life</p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer-Led Model */}
      <section className="py-20 bg-[#F9F9F9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-[#C0143C] text-white p-4 rounded-full inline-block mb-6">
                <Users size={32} />
              </div>
              <h2 className="text-3xl font-bold text-[#C0143C] mb-6">Volunteer-Led Model</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  UpliftEd sessions are conducted by trained volunteers using structured, easy-to-follow modules. This model allows us to scale across schools and communities without losing quality.
                </p>
                <p>
                  Each volunteer receives a comprehensive <strong>Volunteer Guide</strong> that includes:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Step-by-step activity instructions</li>
                  <li>Discussion prompts and reflection questions</li>
                  <li>Sample responses to guide conversations</li>
                  <li>Time management tips for each session</li>
                </ul>
                <p>
                  This structured approach means that any trained volunteer can deliver a high-quality, impactful session — making UpliftEd sustainable and scalable.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden min-h-96">
              <img src={volunteerPhoto} alt="Volunteers teaching a session" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Session Structure */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">A Typical Session</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-[#C0143C]/5 p-6 rounded-xl border-t-4 border-[#C0143C]">
              <div className="text-[#C0143C] mb-3">
                <Sparkles size={28} />
              </div>
              <h3 className="font-bold mb-2">Introduction Activity</h3>
              <p className="text-gray-600 text-sm">A warm-up game or icebreaker to get children engaged and energized</p>
            </div>
            <div className="bg-[#C0143C]/5 p-6 rounded-xl border-t-4 border-[#C0143C]">
              <div className="text-[#C0143C] mb-3">
                <BookOpen size={28} />
              </div>
              <h3 className="font-bold mb-2">Main Session Activity</h3>
              <p className="text-gray-600 text-sm">The core activity or story that teaches the day's skill or value</p>
            </div>
            <div className="bg-[#C0143C]/5 p-6 rounded-xl border-t-4 border-[#C0143C]">
              <div className="text-[#C0143C] mb-3">
                <Users size={28} />
              </div>
              <h3 className="font-bold mb-2">Reflection & Discussion</h3>
              <p className="text-gray-600 text-sm">Guided questions help children connect the activity to their own lives</p>
            </div>
            <div className="bg-[#C0143C]/5 p-6 rounded-xl border-t-4 border-[#C0143C]">
              <div className="text-[#C0143C] mb-3">
                <FileText size={28} />
              </div>
              <h3 className="font-bold mb-2">Concluding Task</h3>
              <p className="text-gray-600 text-sm">A simple homework or practice activity to reinforce the learning</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Modules */}
      <section className="py-20 bg-[#F9F9F9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">The Modules</h2>
          <div className="space-y-6 text-gray-700">
            <p className="text-lg">
              Each UpliftEd session is built on two core documents:
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl border-2 border-[#C0143C]">
                <h3 className="font-bold text-xl mb-3">Student Module</h3>
                <p className="text-gray-600">
                  Contains the activities, worksheets, and visual guides for children to follow along during the session.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border-2 border-[#C0143C]">
                <h3 className="font-bold text-xl mb-3">Volunteer Guide</h3>
                <p className="text-gray-600">
                  Provides detailed instructions, discussion prompts, and facilitation tips for volunteers leading the session.
                </p>
              </div>
            </div>
            <div className="bg-[#C0143C]/5 border-l-4 border-[#C0143C] p-6 rounded-lg">
              <h3 className="font-bold mb-2">Designed for Accessibility</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Created in <strong>Gujarati</strong> for RMC school students</li>
                <li>• Built using Canva with structured, reusable templates</li>
                <li>• Printable and cost-optimized for large-scale distribution</li>
                <li>• Tested and refined through real classroom sessions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
