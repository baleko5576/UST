import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Briefcase, Sun, Moon } from "lucide-react"; 
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false); 
  const location = useLocation();

  const navLinks = [
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
  ];

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border transition-all duration-500">
      <div className="container-narrow section-padding !py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" data-aos="fade-right">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
              <Briefcase className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <span className="font-heading text-lg font-semibold text-foreground">
                UST
              </span>
              <span className="block text-xs text-muted-foreground -mt-1">
                Unemployment Solution Trust
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                data-aos="fade-down"
                data-aos-delay={index * 100}
                className={`link-underline text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105 ${
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
              className="btn-accent text-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              data-aos="fade-down"
              data-aos-delay={200}
            >
              Find Jobs
            </Link>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded hover:bg-muted-foreground/10 transition-colors duration-300"
              aria-label="Toggle Dark Mode"
              data-aos="fade-down"
              data-aos-delay={300}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground transition-transform duration-300 hover:scale-110"
            aria-label="Toggle menu"
            data-aos="fade-left"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className={`text-sm font-medium py-2 transition-all duration-300 hover:text-primary hover:scale-105 ${
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
                onClick={() => setIsMenuOpen(false)}
                data-aos="fade-up"
                data-aos-delay={200}
                className="btn-accent text-sm text-center mt-2 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                Find Jobs
              </Link>

              {/* Dark Mode Toggle for mobile */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 mt-2 rounded hover:bg-muted-foreground/10 transition-colors duration-300 text-center"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
