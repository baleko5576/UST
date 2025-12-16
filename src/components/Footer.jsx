import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
  Briefcase,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUpRight,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    AOS.refresh();
  }, []);

  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Our Services", path: "/services" },
    { label: "Find Jobs", path: "/jobs" },
  ];

  const services = [
    "Job Matching",
    "Skill Development",
    "Resume Building",
    "Career Counseling",
    "Interview Preparation",
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />

      <div className="container-narrow section-padding !pb-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div
            className="lg:col-span-1"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-heading text-xl font-semibold text-white">
                  UST
                </span>
                <span className="block text-xs text-slate-400 -mt-0.5">
                  Unemployment Solution Trust
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Empowering job seekers with skills-based employment matching,
              career development programs, and professional guidance.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-gradient-to-br hover:from-teal-500 hover:to-teal-600 transition-all duration-300 hover:scale-110 hover:-rotate-3 group"
                >
                  <social.icon className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
          >
            <h4 className="font-heading text-lg font-semibold mb-6 text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-400 hover:text-teal-400 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-teal-500 transition-colors" />
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
          >
            <h4 className="font-heading text-lg font-semibold mb-6 text-white">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-slate-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="800"
          >
            <h4 className="font-heading text-lg font-semibold mb-6 text-white">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 group-hover:bg-teal-500/20 transition-colors">
                  <MapPin className="w-4 h-4 text-teal-500" />
                </div>
                <span className="text-sm text-slate-400 leading-relaxed">
                  Barabati Fort, Qtr No. 12, Barabati, Cuttack, Odisha 753001,
                  India
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 group-hover:bg-teal-500/20 transition-colors">
                  <Phone className="w-4 h-4 text-teal-500" />
                </div>
                <a
                  className="text-sm text-slate-400 hover:text-teal-400 transition-colors"
                  href="tel:+919999999999"
                >
                  +91 9999999999
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 group-hover:bg-teal-500/20 transition-colors">
                  <Mail className="w-4 h-4 text-teal-500" />
                </div>
                <a
                  className="text-sm text-slate-400 hover:text-teal-400 transition-colors"
                  href="mailto:info@ust.in"
                >
                  info@ust.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 border-t border-slate-800"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              © {currentYear} Unemployment Solution Trust. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-sm text-slate-500 hover:text-teal-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-slate-500 hover:text-teal-400 transition-colors"
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