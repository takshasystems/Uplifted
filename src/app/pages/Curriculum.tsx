import { MessageCircle, Brain, Users, Lightbulb } from "lucide-react";
import heroPhoto from "@/imports/Uplifted-1/80ccefc521154b2e0e7dcba4c629ea6bb1fb7b00.png";

export function Curriculum() {
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
          <h1 className="text-4xl md:text-6xl font-bold text-[#C0143C] mb-6">A curriculum built for real life</h1>
          <p className="text-xl text-gray-700">Not textbooks. Not lectures. Activities, stories, reflection, and conversation.</p>
        </div>
      </section>

      {/* Communication */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="bg-[#C0143C] text-white p-4 rounded-full inline-block mb-4">
                <MessageCircle size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-4">Communication</h2>
              <p className="text-lg text-gray-600">Express, listen, connect</p>
            </div>
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="font-bold mb-2">Skills Taught</h3>
                <p className="text-gray-700">Verbal communication, listening, public speaking, storytelling, presentation, non-verbal communication, emotional expression</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Character Developed</h3>
                <p className="text-gray-700">Empathy, confidence, self-awareness, respect, honesty, emotional intelligence</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Sample Activities</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#C0143C]/10 text-[#C0143C] px-3 py-1 rounded-full text-sm">Chinese Whisper</span>
                  <span className="bg-[#C0143C]/10 text-[#C0143C] px-3 py-1 rounded-full text-sm">Show and Tell</span>
                  <span className="bg-[#C0143C]/10 text-[#C0143C] px-3 py-1 rounded-full text-sm">Picture Composition</span>
                  <span className="bg-[#C0143C]/10 text-[#C0143C] px-3 py-1 rounded-full text-sm">Daily Communication Scenarios</span>
                  <span className="bg-[#C0143C]/10 text-[#C0143C] px-3 py-1 rounded-full text-sm">Emotional Charades</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Critical Thinking */}
      <section className="py-20 bg-[#F9F9F9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="bg-[#C0143C] text-white p-4 rounded-full inline-block mb-4">
                <Brain size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-4">Critical Thinking</h2>
              <p className="text-lg text-gray-600">Observe, question, decide</p>
            </div>
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="font-bold mb-2">Skills Taught</h3>
                <p className="text-gray-700">Observation, pattern recognition, problem solving, decision making, reasoning, perspective taking</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Character Developed</h3>
                <p className="text-gray-700">Curiosity, responsibility, growth mindset, perseverance</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Sample Activities</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#C0143C]/10 text-[#C0143C] px-3 py-1 rounded-full text-sm">Story Analysis (Bloom's Taxonomy)</span>
                  <span className="bg-[#C0143C]/10 text-[#C0143C] px-3 py-1 rounded-full text-sm">Moral Dilemma Discussions</span>
                  <span className="bg-[#C0143C]/10 text-[#C0143C] px-3 py-1 rounded-full text-sm">Panchatantra Reflection</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="bg-[#C0143C] text-white p-4 rounded-full inline-block mb-4">
                <Users size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-4">Collaboration</h2>
              <p className="text-lg text-gray-600">Work together, grow together</p>
            </div>
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="font-bold mb-2">Skills Taught</h3>
                <p className="text-gray-700">Teamwork, friendship skills, conflict resolution, group problem solving</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Character Developed</h3>
                <p className="text-gray-700">Kindness, respect, inclusion, trust, community mindset</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Sample Activities</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#C0143C]/10 text-[#C0143C] px-3 py-1 rounded-full text-sm">Debate</span>
                  <span className="bg-[#C0143C]/10 text-[#C0143C] px-3 py-1 rounded-full text-sm">Birthday Lineup</span>
                  <span className="bg-[#C0143C]/10 text-[#C0143C] px-3 py-1 rounded-full text-sm">Common Thread</span>
                  <span className="bg-[#C0143C]/10 text-[#C0143C] px-3 py-1 rounded-full text-sm">Trust Walk</span>
                  <span className="bg-[#C0143C]/10 text-[#C0143C] px-3 py-1 rounded-full text-sm">Collective Storytelling</span>
                  <span className="bg-[#C0143C]/10 text-[#C0143C] px-3 py-1 rounded-full text-sm">Scavenger Hunt</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creativity */}
      <section className="py-20 bg-[#F9F9F9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="bg-[#C0143C] text-white p-4 rounded-full inline-block mb-4">
                <Lightbulb size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-4">Creativity</h2>
              <p className="text-lg text-gray-600">Imagine, build, innovate</p>
            </div>
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="font-bold mb-2">Skills Taught</h3>
                <p className="text-gray-700">Storytelling, creative writing, drawing, imagination, innovation, idea generation</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Character Developed</h3>
                <p className="text-gray-700">Courage, adaptability, creative confidence, open-mindedness</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Sample Activities</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#C0143C]/10 text-[#C0143C] px-3 py-1 rounded-full text-sm">Handprint Art</span>
                  <span className="bg-[#C0143C]/10 text-[#C0143C] px-3 py-1 rounded-full text-sm">Journey into Imagination</span>
                  <span className="bg-[#C0143C]/10 text-[#C0143C] px-3 py-1 rounded-full text-sm">Time Travel Adventure</span>
                  <span className="bg-[#C0143C]/10 text-[#C0143C] px-3 py-1 rounded-full text-sm">Creating My Own Country</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Character Development */}
      <section className="py-20 bg-gradient-to-r from-[#C0143C] to-[#7B0020]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-8">10 Core Character Values</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {["Honesty", "Kindness", "Respect", "Responsibility", "Empathy", "Courage", "Curiosity", "Confidence", "Perseverance", "Teamwork"].map((value) => (
              <div key={value} className="bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg font-semibold">
                {value}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
