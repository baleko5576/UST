import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Briefcase } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
  ];

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
    });
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container-narrow py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            data-aos="fade-right"
            data-aos-duration="600"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-teal group-hover:rotate-3">
              <Briefcase className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <span className="font-heading text-xl font-semibold text-foreground tracking-tight">
                UST
              </span>
              <span className="block text-xs text-muted-foreground -mt-0.5 font-medium">
                Unemployment Solution Trust
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                data-aos="fade-down"
                data-aos-delay={index * 100}
                data-aos-duration="600"
                className={`link-underline text-sm font-medium transition-all duration-300 hover:text-primary ${
                  isActive(link.path)
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/jobs"
              className="btn-accent text-sm px-5 py-2.5"
              data-aos="fade-down"
              data-aos-delay={200}
              data-aos-duration="600"
            >
              Find Jobs
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground rounded-lg hover:bg-muted transition-all duration-300 hover:scale-110"
            aria-label="Toggle menu"
            data-aos="fade-left"
            data-aos-duration="600"
          >
            <div className="relative w-6 h-6">
              <Menu
                className={`w-6 h-6 absolute transition-all duration-300 ${
                  isMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                }`}
              />
              <X
                className={`w-6 h-6 absolute transition-all duration-300 ${
                  isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                }`}
              />
            </div>
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
            isMenuOpen ? "max-h-80 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-card rounded-2xl shadow-xl border border-border/50 p-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium py-3 px-4 rounded-xl transition-all duration-300 hover:bg-muted hover:text-primary ${
                    isActive(link.path)
                      ? "text-primary bg-primary/5"
                      : "text-muted-foreground"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/jobs"
                onClick={() => setIsMenuOpen(false)}
                className="btn-accent text-sm text-center mt-2"
              >
                Find Jobs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;