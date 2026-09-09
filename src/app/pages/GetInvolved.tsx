import { School, Building2, Heart, DollarSign } from "lucide-react";
import { Link } from "react-router";

export function GetInvolved() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#C0143C]/10 to-[#111111]/10 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#111111] mb-6">Get Involved</h1>
          <p className="text-xl text-gray-700">Join us in empowering children with skills that last a lifetime</p>
        </div>
      </section>

      {/* Four Pathways */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* For Schools */}
            <div className="bg-gradient-to-br from-[#C0143C]/5 to-white border-2 border-[#C0143C]/20 rounded-2xl p-8 hover:border-[#C0143C] transition-colors">
              <div className="bg-[#C0143C] text-white p-4 rounded-full inline-block mb-6">
                <School size={32} />
              </div>
              <h2 className="text-2xl font-bold mb-4">For Schools</h2>
              <p className="text-gray-700 mb-6">
                Integrate UpliftEd as an extracurricular or partner program at your school. We provide structured curriculum, trained volunteers, and printed modules.
              </p>
              <h3 className="font-bold mb-3">What Schools Receive:</h3>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Complete 4Cs curriculum in Gujarati</li>
                <li>• Trained volunteer educators</li>
                <li>• Printed student modules and activity sheets</li>
                <li>• Regular session reports and progress tracking</li>
                <li>• Support from the UpliftEd Planning Committee</li>
              </ul>
              <Link
                to="/contact"
                className="block text-center bg-[#C0143C] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#A01030] transition-colors"
              >
                Partner With Our School
              </Link>
            </div>

            {/* For NGOs and CSR */}
            <div className="bg-gradient-to-br from-[#C0143C]/5 to-white border-2 border-[#C0143C]/20 rounded-2xl p-8 hover:border-[#C0143C] transition-colors">
              <div className="bg-[#C0143C] text-white p-4 rounded-full inline-block mb-6">
                <Building2 size={32} />
              </div>
              <h2 className="text-2xl font-bold mb-4">For NGOs & CSR Teams</h2>
              <p className="text-gray-700 mb-6">
                UpliftEd aligns with education-focused CSR mandates and creates measurable social impact. Partner with us to scale life skills education across communities.
              </p>
              <h3 className="font-bold mb-3">Partnership Benefits:</h3>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Proven, structured curriculum with 3 years of track record</li>
                <li>• Volunteer-led model that scales efficiently</li>
                <li>• Impact reports and success metrics</li>
                <li>• Alignment with UN SDG 4 (Quality Education)</li>
                <li>• Co-branded program opportunities</li>
              </ul>
              <Link
                to="/contact"
                className="block text-center bg-[#C0143C] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#A01030] transition-colors"
              >
                Explore a Partnership
              </Link>
            </div>

            {/* For Volunteers */}
            <div className="bg-gradient-to-br from-[#C0143C]/5 to-white border-2 border-[#C0143C]/20 rounded-2xl p-8 hover:border-[#C0143C] transition-colors">
              <div className="bg-[#C0143C] text-white p-4 rounded-full inline-block mb-6">
                <Heart size={32} />
              </div>
              <h2 className="text-2xl font-bold mb-4">For Volunteers</h2>
              <p className="text-gray-700 mb-6">
                Teach life skills sessions using our structured guides. No prior teaching experience needed — just a heart for helping children grow.
              </p>
              <h3 className="font-bold mb-3">Who Can Join:</h3>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>• IB students looking for CAS/service hours</li>
                <li>• College students passionate about education</li>
                <li>• Educators and retired teachers</li>
                <li>• UpliftEd alumni (former students, now volunteers!)</li>
              </ul>
              <h3 className="font-bold mb-3">What You'll Do:</h3>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Teach 1-hour sessions using Volunteer Guides</li>
                <li>• Lead activities, discussions, and reflection</li>
                <li>• Attend orientation and training sessions</li>
                <li>• Commit to at least one session per month</li>
              </ul>
              <Link
                to="/contact"
                className="block text-center bg-[#C0143C] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#A01030] transition-colors"
              >
                Join as a Volunteer
              </Link>
            </div>

            {/* For Donors */}
            <div className="bg-gradient-to-br from-[#C0143C]/5 to-white border-2 border-[#C0143C]/20 rounded-2xl p-8 hover:border-[#C0143C] transition-colors">
              <div className="bg-[#C0143C] text-white p-4 rounded-full inline-block mb-6">
                <DollarSign size={32} />
              </div>
              <h2 className="text-2xl font-bold mb-4">For Donors</h2>
              <p className="text-gray-700 mb-6">
                Your support helps us print modules, expand to new schools, train volunteers, and reach more children. Every contribution makes a direct impact.
              </p>
              <h3 className="font-bold mb-3">What Donations Support:</h3>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>• Printing student modules and activity sheets</li>
                <li>• Materials and supplies for hands-on activities</li>
                <li>• Training sessions for volunteers</li>
                <li>• Expansion to new schools and communities</li>
                <li>• Program evaluation and impact tracking</li>
              </ul>
              <h3 className="font-bold mb-3">Current Needs:</h3>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• June 2026 Fundraiser in planning</li>
                <li>• Sponsorship for 500 printed module sets</li>
                <li>• Activity kits for new volunteer batches</li>
              </ul>
              <Link
                to="/contact"
                className="block text-center bg-[#C0143C] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#A01030] transition-colors"
              >
                Support the Initiative
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-to-r from-[#C0143C] to-[#7B0020]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to make a difference?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Whether you're a school, an organization, a volunteer, or a donor — there's a place for you in the UpliftEd community.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-[#C0143C] px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
