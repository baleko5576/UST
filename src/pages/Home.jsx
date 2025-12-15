import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Users, Target, Award, TrendingUp, CheckCircle, ArrowRight,
  Briefcase, GraduationCap, FileText, Handshake, Star, Building2
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out-cubic",
      once: false,
      mirror: true,
    });
  }, []);

  const stats = [
    { value: "50,000+", label: "Jobs Posted", icon: Briefcase },
    { value: "35,000+", label: "Successful Placements", icon: Users },
    { value: "500+", label: "Partner Companies", icon: Building2 },
    { value: "95%", label: "Satisfaction Rate", icon: Star },
  ];

  const features = [
    { icon: Target, title: "Skill-Based Matching", description: "Our intelligent system matches your unique skills and experience with the perfect job opportunities tailored just for you." },
    { icon: GraduationCap, title: "Free Training Programs", description: "Access comprehensive skill development courses and certifications to enhance your employability at no cost." },
    { icon: FileText, title: "Resume Building", description: "Get professional assistance in crafting a compelling resume that highlights your strengths and catches employers' attention." },
    { icon: Handshake, title: "Career Counseling", description: "Receive personalized guidance from experienced career counselors who understand the job market inside out." },
  ];

  const steps = [
    { step: "01", title: "Register", description: "Create your free account and complete your professional profile with skills and experience." },
    { step: "02", title: "Get Matched", description: "Our AI-powered system analyzes your profile and matches you with suitable job openings." },
    { step: "03", title: "Apply", description: "Apply to matched positions with one click. Track all your applications in one dashboard." },
    { step: "04", title: "Get Hired", description: "Prepare for interviews with our resources and land your dream job." },
  ];

  const testimonials = [
    { name: "Sarah Johnson", role: "Software Developer", company: "Tech Solutions Inc.", quote: "After months of searching, UST matched me with a perfect role. Their skill-based approach made all the difference!" },
    { name: "Michael Chen", role: "Marketing Manager", company: "Global Brands Co.", quote: "The career counseling was invaluable. They helped me identify my strengths and find a career path I truly love." },
    { name: "Emily Rodriguez", role: "Registered Nurse", company: "City Medical Center", quote: "The training programs helped me get certified, and within weeks I found a fulfilling position. Highly recommend!" },
  ];

  return (
    <div className="min-h-screen bg-background dark:bg-background text-foreground dark:text-foreground transition-colors duration-300">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 transition-colors duration-300" />
        <div className="container-narrow section-padding !py-0 relative">
          <div className="max-w-3xl mx-auto text-center">
            <span data-aos="fade-down" className="inline-block px-4 py-1.5 bg-accent/10 dark:bg-accent/20 text-accent dark:text-accent rounded-full text-sm font-medium mb-6">
              Empowering Careers, Transforming Lives
            </span>
            <h1 data-aos="fade-up" data-aos-delay="100" className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Find Your Perfect Job Based on
              <span className="text-gradient"> Your Skills</span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="200" className="text-lg md:text-xl text-muted-foreground dark:text-muted-foreground/80 mb-8">
              Unemployment Solution Trust connects talented job seekers with employers
              through intelligent skill-based matching. Your next opportunity awaits.
            </p>
            <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/jobs" className="btn-accent w-full sm:w-auto hover:scale-105 transition-transform duration-300">
                Find Jobs Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link to="/about" className="btn-outline w-full sm:w-auto hover:scale-105 transition-transform duration-300">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary dark:bg-primary/90 transition-colors duration-300">
        <div className="container-narrow section-padding !py-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100} className="text-center hover:scale-105 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">What We Offer</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4">Comprehensive Employment Solutions</h2>
            <p className="text-muted-foreground dark:text-muted-foreground/80">
              We provide end-to-end support for your career journey, from skill assessment
              to job placement and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div key={index} data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} className="card-elevated p-6 lg:p-8 dark:bg-gray-800 transition-colors duration-300 group hover:-translate-y-2 hover:shadow-xl">
                <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground dark:text-muted-foreground/80 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-muted dark:bg-muted/20 transition-colors duration-300">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Simple Process</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4">How It Works</h2>
            <p className="text-muted-foreground dark:text-muted-foreground/80">
              Get started on your career journey in four simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} data-aos="flip-left" className="relative text-center hover:-translate-y-2 transition-transform duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground font-heading text-xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground/80">{step.description}</p>
                {index < steps.length - 1 && (
                  <div data-aos="fade-left" className="hidden lg:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-border dark:border-gray-600" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Success Stories</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4">What Our Users Say</h2>
            <p className="text-muted-foreground dark:text-muted-foreground/80">
              Real stories from job seekers who found success through our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} data-aos="zoom-in-up" className="card-elevated p-6 lg:p-8 dark:bg-gray-800 transition-colors duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                    <span className="font-heading font-semibold text-primary">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-medium text-foreground text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground dark:text-muted-foreground/80">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary dark:bg-primary/90 transition-colors duration-300">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Ready to Start Your Career Journey?</h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Join thousands of job seekers who have found their dream jobs through
              Unemployment Solution Trust. Your next opportunity is just a click away.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/jobs" className="btn-accent w-full sm:w-auto hover:scale-105 transition-transform duration-300">
                Browse Jobs
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link to="/about" className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-foreground text-primary-foreground font-medium rounded-lg transition-all duration-300 hover:bg-primary-foreground hover:text-primary w-full sm:w-auto">
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
