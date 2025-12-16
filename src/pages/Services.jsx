import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
  Briefcase,
  GraduationCap,
  FileText,
  Users,
  MessageSquare,
  Lightbulb,
  ArrowRight,
  CheckCircle,
  Building2,
  Code,
  Stethoscope,
  TrendingUp,
  Palette,
  Truck,
  Wrench,
  Calculator,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
    });
  }, []);

  const services = [
    {
      icon: Briefcase,
      title: "Job Matching",
      description:
        "Our AI-powered platform analyzes your skills, experience, and preferences to match you with the most suitable job opportunities from our extensive database.",
      features: [
        "Skill-based algorithm matching",
        "Personalized job recommendations",
        "Real-time job alerts",
        "One-click application",
      ],
    },
    {
      icon: GraduationCap,
      title: "Skill Development",
      description:
        "Access free training programs and certifications to enhance your employability and stay competitive in today's job market.",
      features: [
        "Industry-recognized certifications",
        "Online and in-person workshops",
        "Technical and soft skills training",
        "Career advancement courses",
      ],
    },
    {
      icon: FileText,
      title: "Resume Building",
      description:
        "Get professional assistance in creating a compelling resume that effectively showcases your qualifications and catches employers' attention.",
      features: [
        "Professional resume templates",
        "One-on-one resume reviews",
        "Keyword optimization for ATS",
        "Cover letter assistance",
      ],
    },
    {
      icon: MessageSquare,
      title: "Interview Preparation",
      description:
        "Prepare for your interviews with mock sessions, expert tips, and comprehensive resources to help you make a strong impression.",
      features: [
        "Mock interview sessions",
        "Industry-specific questions",
        "Video interview practice",
        "Feedback and coaching",
      ],
    },
    {
      icon: Users,
      title: "Career Counseling",
      description:
        "Receive personalized guidance from experienced career counselors who understand the job market and can help you make informed decisions.",
      features: [
        "One-on-one counseling sessions",
        "Career path planning",
        "Skills assessment",
        "Goal setting and tracking",
      ],
    },
    {
      icon: Lightbulb,
      title: "Entrepreneurship Support",
      description:
        "For those interested in self-employment, we offer resources and guidance to help you start and grow your own business.",
      features: [
        "Business plan development",
        "Startup resources",
        "Mentorship programs",
        "Networking opportunities",
      ],
    },
  ];

  const jobCategories = [
    { icon: Code, title: "Technology", jobs: "5,200+ Jobs" },
    { icon: Stethoscope, title: "Healthcare", jobs: "3,800+ Jobs" },
    { icon: TrendingUp, title: "Finance", jobs: "2,900+ Jobs" },
    { icon: Palette, title: "Creative & Design", jobs: "1,500+ Jobs" },
    { icon: Truck, title: "Logistics", jobs: "2,100+ Jobs" },
    { icon: Wrench, title: "Manufacturing", jobs: "3,200+ Jobs" },
    { icon: Calculator, title: "Accounting", jobs: "1,800+ Jobs" },
    { icon: Building2, title: "Construction", jobs: "2,400+ Jobs" },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Complete Your Profile",
      description:
        "Sign up and fill in your professional details including skills, experience, education, and job preferences.",
    },
    {
      number: "02",
      title: "Get Skill Assessment",
      description:
        "Take our comprehensive skill assessment to identify your strengths and areas for improvement.",
    },
    {
      number: "03",
      title: "Receive Matched Jobs",
      description:
        "Our AI system matches your profile with suitable job openings and sends personalized recommendations.",
    },
    {
      number: "04",
      title: "Apply & Interview",
      description:
        "Apply to positions with one click and use our interview prep resources to ace your interviews.",
    },
    {
      number: "05",
      title: "Land Your Dream Job",
      description:
        "Get hired and start your new career journey with ongoing support from our team.",
    },
  ];

  const faqs = [
    {
      question: "Is UST completely free for job seekers?",
      answer:
        "Yes! All our services including job matching, skill development programs, resume building, and career counseling are completely free for job seekers.",
    },
    {
      question: "How does the skill-based matching work?",
      answer:
        "Our AI-powered system analyzes your skills, experience, certifications, and preferences, then matches them with job requirements from our employer partners to find the best opportunities for you.",
    },
    {
      question: "Can I access training programs remotely?",
      answer:
        "Absolutely! We offer both online and in-person training programs. Our online courses can be accessed anytime, anywhere, making it convenient for everyone.",
    },
    {
      question: "How long does it typically take to find a job?",
      answer:
        "The timeline varies based on factors like your field, experience, and market conditions. However, our matched candidates typically find employment within 2-8 weeks.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-background to-slate-100" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-teal-200/40 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-slate-200/60 rounded-full blur-3xl animate-pulse-soft animation-delay-200" />

        <div className="container-narrow relative">
          <div className="max-w-3xl mx-auto text-center">
            <span
              data-aos="fade-down"
              data-aos-duration="600"
              className="badge mb-6"
            >
              Our Services
            </span>
            <h1
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Comprehensive Career
              <span className="text-gradient"> Support Services</span>
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              From skill assessment to job placement, we provide everything you
              need to succeed in your career journey. All services are
              completely free.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={index * 100}
                className="card-elevated p-6 lg:p-8 group"
              >
                <div className="icon-box mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-teal">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="section-padding bg-muted/50">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span
              data-aos="fade-down"
              data-aos-duration="600"
              className="section-badge"
            >
              Job Categories
            </span>
            <h2
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            >
              Explore Opportunities by Industry
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              className="text-muted-foreground text-lg"
            >
              We partner with employers across all major industries to bring you
              diverse opportunities
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {jobCategories.map((category, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-duration="600"
                data-aos-delay={index * 50}
                className="card-elevated p-5 text-center group cursor-pointer"
              >
                <div className="icon-box-outline mx-auto mb-3 group-hover:scale-110 transition-all duration-500">
                  <category.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-medium mb-1">{category.title}</h3>
                <span className="text-sm font-medium text-primary">
                  {category.jobs}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100/50 rounded-full blur-3xl" />
        <div className="container-narrow relative">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span
              data-aos="fade-down"
              data-aos-duration="600"
              className="section-badge"
            >
              The Process
            </span>
            <h2
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            >
              Your Path to Employment
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              className="text-muted-foreground text-lg"
            >
              A simple five-step process designed to get you hired quickly
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <div
                key={index}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-duration="800"
                data-aos-delay={index * 100}
                className="flex gap-6 mb-8 last:mb-0 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shrink-0 shadow-teal group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <span className="font-heading font-bold text-white">
                      {step.number}
                    </span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-4" />
                  )}
                </div>
                <div className="pb-8 pt-3">
                  <h3 className="font-heading text-xl font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-muted/50">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span
              data-aos="fade-down"
              data-aos-duration="600"
              className="section-badge"
            >
              FAQ
            </span>
            <h2
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            >
              Frequently Asked Questions
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              className="text-muted-foreground text-lg"
            >
              Find answers to common questions about our services
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={index * 100}
                className="card-elevated p-6 group"
              >
                <h3 className="font-heading text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-3xl" />

        <div className="container-narrow relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              data-aos="fade-up"
              data-aos-duration="800"
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Ready to Find Your Perfect Job?
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              className="text-xl text-slate-300 mb-10 leading-relaxed"
            >
              Join thousands of job seekers who have successfully found
              employment through our skill-based matching platform. Your dream
              job awaits!
            </p>
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/jobs" className="btn-accent w-full sm:w-auto group">
                Browse Jobs
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-6 py-3 text-white font-semibold rounded-xl border-2 border-white/20 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm w-full sm:w-auto"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;