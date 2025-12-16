import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {
  Users,
  Target,
  ArrowRight,
  Briefcase,
  GraduationCap,
  FileText,
  Handshake,
  Star,
  Building2,
  ChevronRight,
  CheckCircle,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AnimatedCounter = ({ value, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const numericValue = parseInt(value.replace(/,/g, ""));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const increment = numericValue / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setCount(numericValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible, numericValue]);

  return (
    <div
      ref={ref}
      className={`font-heading text-4xl md:text-5xl font-bold text-white transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {count.toLocaleString()}
      {suffix}
    </div>
  );
};

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
    });
  }, []);

  const stats = [
    { value: "50,000", suffix: "+", label: "Jobs Posted", icon: Briefcase },
    { value: "35,000", suffix: "+", label: "Successful Placements", icon: Users },
    { value: "500", suffix: "+", label: "Partner Companies", icon: Building2 },
    { value: "95", suffix: "%", label: "Satisfaction Rate", icon: Star },
  ];

  const features = [
    {
      icon: Target,
      title: "Skill-Based Matching",
      description:
        "Our intelligent system matches your unique skills and experience with the perfect job opportunities tailored just for you.",
    },
    {
      icon: GraduationCap,
      title: "Free Training Programs",
      description:
        "Access comprehensive skill development courses and certifications to enhance your employability at no cost.",
    },
    {
      icon: FileText,
      title: "Resume Building",
      description:
        "Get professional assistance in crafting a compelling resume that highlights your strengths and catches employers' attention.",
    },
    {
      icon: Handshake,
      title: "Career Counseling",
      description:
        "Receive personalized guidance from experienced career counselors who understand the job market inside out.",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Register",
      description:
        "Create your free account and complete your professional profile with skills and experience.",
    },
    {
      step: "02",
      title: "Get Matched",
      description:
        "Our AI-powered system analyzes your profile and matches you with suitable job openings.",
    },
    {
      step: "03",
      title: "Apply",
      description:
        "Apply to matched positions with one click. Track all your applications in one dashboard.",
    },
    {
      step: "04",
      title: "Get Hired",
      description:
        "Prepare for interviews with our resources and land your dream job.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Developer",
      company: "Tech Solutions Inc.",
      quote:
        "After months of searching, UST matched me with a perfect role. Their skill-based approach made all the difference!",
      avatar: "S",
    },
    {
      name: "Michael Chen",
      role: "Marketing Manager",
      company: "Global Brands Co.",
      quote:
        "The career counseling was invaluable. They helped me identify my strengths and find a career path I truly love.",
      avatar: "M",
    },
    {
      name: "Emily Rodriguez",
      role: "Registered Nurse",
      company: "City Medical Center",
      quote:
        "The training programs helped me get certified, and within weeks I found a fulfilling position. Highly recommend!",
      avatar: "E",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-background to-slate-100" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-200/40 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-slate-200/60 rounded-full blur-3xl animate-pulse-soft animation-delay-200" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-teal-100/30 to-cyan-100/30 rounded-full blur-3xl" />

        <div className="container-narrow relative">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div
              data-aos="fade-down"
              data-aos-duration="600"
              className="mb-8"
            >
              <span className="badge">
                ✨ Empowering Careers, Transforming Lives
              </span>
            </div>

            {/* Main Heading */}
            <h1
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Find Your Perfect Job
              <br />
              Based on
              <span className="text-gradient"> Your Skills</span>
            </h1>

            {/* Description */}
            <p
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto"
            >
              Unemployment Solution Trust connects talented job seekers with
              employers through intelligent skill-based matching. Your next
              opportunity awaits.
            </p>

            {/* CTA Buttons */}
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/jobs" className="btn-accent w-full sm:w-auto group">
                Find Jobs Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/about" className="btn-outline w-full sm:w-auto">
                Learn More
              </Link>
            </div>

            {/* Trust Badges */}
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
              className="flex flex-wrap items-center justify-center gap-6 mt-12"
            >
              {["Free to use", "No hidden fees", "24/7 Support"].map(
                (badge, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>{badge}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="container-narrow relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-duration="600"
                data-aos-delay={index * 100}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-5 transition-all duration-500 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-teal-500 group-hover:to-teal-600 group-hover:shadow-teal">
                  <stat.icon className="w-7 h-7 text-teal-400 group-hover:text-white transition-colors" />
                </div>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <div className="text-sm text-slate-400 mt-2 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100/50 rounded-full blur-3xl" />
        <div className="container-narrow relative">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span
              data-aos="fade-down"
              data-aos-duration="600"
              className="section-badge"
            >
              What We Offer
            </span>
            <h2
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            >
              Comprehensive Employment Solutions
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              className="text-muted-foreground text-lg leading-relaxed"
            >
              We provide end-to-end support for your career journey, from skill
              assessment to job placement and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={index * 100}
                className="group bg-card rounded-3xl p-8 lg:p-10 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden"
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div className="icon-box mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-teal">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-heading text-xl lg:text-2xl font-bold mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-primary font-semibold mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                  >
                    Learn more <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-background relative">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span
              data-aos="fade-down"
              data-aos-duration="600"
              className="section-badge"
            >
              Simple Process
            </span>
            <h2
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            >
              How It Works
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              className="text-muted-foreground text-lg leading-relaxed"
            >
              Get started on your career journey in four simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                data-aos="flip-left"
                data-aos-duration="800"
                data-aos-delay={index * 150}
                className="relative group"
              >
                <div className="text-center">
                  {/* Step Number */}
                  <div className="relative inline-block mb-8">
                    <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-2xl">
                      <span className="font-heading text-3xl font-bold text-white">
                        {step.step}
                      </span>
                    </div>
                    {/* Connector Line */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 left-full w-full -translate-y-1/2">
                        <div className="w-full border-t-2 border-dashed border-slate-300 ml-4" />
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary" />
                      </div>
                    )}
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl -translate-y-1/2" />

        <div className="container-narrow relative">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span
              data-aos="fade-down"
              data-aos-duration="600"
              className="section-badge"
            >
              Success Stories
            </span>
            <h2
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            >
              What Our Users Say
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              className="text-muted-foreground text-lg leading-relaxed"
            >
              Real stories from job seekers who found success through our
              platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={index * 150}
                className="group bg-card rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-7xl font-heading text-teal-100 select-none leading-none group-hover:text-teal-200 transition-colors">
                  "
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-6 relative">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-muted-foreground mb-8 leading-relaxed relative text-lg">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center shadow-teal group-hover:scale-110 transition-transform duration-300">
                    <span className="font-heading font-bold text-white text-xl">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />

        <div className="container-narrow relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              data-aos="fade-up"
              data-aos-duration="800"
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
            >
              Ready to Start Your
              <br />
              <span className="text-gradient">Career Journey?</span>
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              className="text-xl text-slate-300 mb-10 leading-relaxed"
            >
              Join thousands of job seekers who have found their dream jobs
              through Unemployment Solution Trust. Your next opportunity is just
              a click away.
            </p>
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/jobs"
                className="btn-accent w-full sm:w-auto group"
              >
                Browse Jobs
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-6 py-3 text-white font-semibold rounded-xl border-2 border-white/20 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm w-full sm:w-auto"
              >
                About Our Mission
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;