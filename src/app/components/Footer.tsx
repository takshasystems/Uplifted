import { Link } from "react-router";
import { Instagram, Youtube, Mail, MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logoImage from "../../imports/WhatsApp_Image_2026-06-03_at_12.40.00_PM.jpeg";

export function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Tagline */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <ImageWithFallback
                src={logoImage}
                alt="UpliftEd Logo"
                className="h-12 w-12 object-contain bg-white rounded-lg p-1"
              />
              <div className="font-bold text-xl">UpliftEd</div>
            </div>
            <p className="text-sm text-gray-300 italic">Skills for life. Character for always.</p>
            <div className="flex items-center gap-2 mt-4 text-sm text-gray-300">
              <MapPin size={16} />
              <span>Rajkot, Gujarat, India</span>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h3 className="font-semibold mb-4">Pages</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-300 hover:text-[#C0143C] transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-[#C0143C] transition-colors">About</Link></li>
              <li><Link to="/curriculum" className="text-gray-300 hover:text-[#C0143C] transition-colors">Our Curriculum</Link></li>
              <li><Link to="/how-it-works" className="text-gray-300 hover:text-[#C0143C] transition-colors">How It Works</Link></li>
              <li><Link to="/journey" className="text-gray-300 hover:text-[#C0143C] transition-colors">Our Journey</Link></li>
              <li><Link to="/get-involved" className="text-gray-300 hover:text-[#C0143C] transition-colors">Get Involved</Link></li>
              <li><Link to="/impact" className="text-gray-300 hover:text-[#C0143C] transition-colors">Impact</Link></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/contact?role=school" className="hover:text-[#C0143C] transition-colors">For Schools</Link></li>
              <li><Link to="/contact?role=ngo" className="hover:text-[#C0143C] transition-colors">For NGOs & CSR</Link></li>
              <li><Link to="/impact#volunteer" className="hover:text-[#C0143C] transition-colors">For Volunteers</Link></li>
              <li><Link to="/donate" className="hover:text-[#C0143C] transition-colors">For Donors</Link></li>
            </ul>
            <Link
              to="/donate"
              className="inline-block mt-4 bg-[#C0143C] text-white px-5 py-2 rounded-full font-medium text-sm hover:bg-[#A01030] transition-colors shadow-sm"
            >
              Donate Now
            </Link>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex gap-4 mb-4">
              <a href="https://www.instagram.com/uplifted.rajkot/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#C0143C] transition-colors" title="Instagram">
                <Instagram size={24} />
              </a>
              <a href="mailto:contact@uplifted.org" className="text-gray-300 hover:text-[#C0143C] transition-colors" title="Email Us">
                <Mail size={24} />
              </a>
            </div>
            <div className="space-y-2 text-sm">
              <div>
                <Link to="/contact" className="text-gray-300 hover:text-[#C0143C] transition-colors">
                  Contact Us
                </Link>
              </div>
              <div>
                <Link to="/donate" className="text-[#FF6B8B] font-medium hover:underline">
                  Support / Donate
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} UpliftEd. Building skills that last a lifetime.</p>
        </div>
      </div>
    </footer>
  );
}
