import { Link } from "react-router-dom";
import { Briefcase, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container-narrow section-padding !pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1" data-aos="fade-up">
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg">
                <Briefcase className="w-5 h-5 text-accent-foreground group-hover:text-accent-foreground/80 transition-colors" />
              </div>
              <div>
                <span className="font-heading text-lg font-semibold transition-colors duration-300 group-hover:text-accent">
                  UST
                </span>
                <span className="block text-xs opacity-70 -mt-1 transition-colors duration-300 group-hover:text-accent/80">
                  Unemployment Solution Trust
                </span>
              </div>
            </Link>
            <p className="text-sm opacity-80 leading-relaxed">
              Empowering job seekers with skills-based employment matching,
              career development programs, and professional guidance.
            </p>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Our Services", path: "/services" },
                { label: "Find Jobs", path: "/jobs" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all duration-300 transform hover:scale-105"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div data-aos="fade-up" data-aos-delay="400">
            <h4 className="font-heading text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {[
                "Job Matching",
                "Skill Development",
                "Resume Building",
                "Career Counseling",
                "Interview Preparation",
              ].map((service) => (
                <li key={service}>
                  <span className="text-sm opacity-80">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div data-aos="fade-up" data-aos-delay="600">
            <h4 className="font-heading text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 opacity-80 shrink-0" />
                <span className="text-sm opacity-80">
                  Barabati Fort, Qtr No. 12, Barabati, Cuttack, Odisha 753001, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 opacity-80 shrink-0" />
                <a className="text-sm opacity-80 hover:underline hover:text-yellow-500 transition-colors duration-300" href="tel:+919999999999">
                  +91 9999999999
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 opacity-80 shrink-0" />
                <a className="text-sm opacity-80 hover:underline hover:text-yellow-500 transition-colors duration-300" href="mailto: info@ust.in">info@ust.in</a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300 transform hover:scale-110"
                >
                  <Icon className="w-4 h-4 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-70">
              © {currentYear} Unemployment Solution Trust. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-sm opacity-70 hover:opacity-100 hover:text-accent transition-opacity duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm opacity-70 hover:opacity-100 hover:text-accent transition-opacity duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
