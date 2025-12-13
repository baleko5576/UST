import { Link } from "react-router-dom";
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
  Calculator
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Services = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Job Matching",
      description: "Our AI-powered platform analyzes your skills, experience, and preferences to match you with the most suitable job opportunities from our extensive database.",
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
      description: "Access free training programs and certifications to enhance your employability and stay competitive in today's job market.",
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
      description: "Get professional assistance in creating a compelling resume that effectively showcases your qualifications and catches employers' attention.",
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
      description: "Prepare for your interviews with mock sessions, expert tips, and comprehensive resources to help you make a strong impression.",
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
      description: "Receive personalized guidance from experienced career counselors who understand the job market and can help you make informed decisions.",
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
      description: "For those interested in self-employment, we offer resources and guidance to help you start and grow your own business.",
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
      description: "Sign up and fill in your professional details including skills, experience, education, and job preferences.",
    },
    {
      number: "02",
      title: "Get Skill Assessment",
      description: "Take our comprehensive skill assessment to identify your strengths and areas for improvement.",
    },
    {
      number: "03",
      title: "Receive Matched Jobs",
      description: "Our AI system matches your profile with suitable job openings and sends personalized recommendations.",
    },
    {
      number: "04",
      title: "Apply & Interview",
      description: "Apply to positions with one click and use our interview prep resources to ace your interviews.",
    },
    {
      number: "05",
      title: "Land Your Dream Job",
      description: "Get hired and start your new career journey with ongoing support from our team.",
    },
  ];

  const faqs = [
    {
      question: "Is UST completely free for job seekers?",
      answer: "Yes! All our services including job matching, skill development programs, resume building, and career counseling are completely free for job seekers.",
    },
    {
      question: "How does the skill-based matching work?",
      answer: "Our AI-powered system analyzes your skills, experience, certifications, and preferences, then matches them with job requirements from our employer partners to find the best opportunities for you.",
    },
    {
      question: "Can I access training programs remotely?",
      answer: "Absolutely! We offer both online and in-person training programs. Our online courses can be accessed anytime, anywhere, making it convenient for everyone.",
    },
    {
      question: "How long does it typically take to find a job?",
      answer: "The timeline varies based on factors like your field, experience, and market conditions. However, our matched candidates typically find employment within 2-8 weeks.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground dark:bg-gray-900 dark:text-gray-100">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 dark:from-primary/20 dark:to-secondary/20" />
        <div className="container-narrow section-padding !py-0 relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6 animate-fade-up dark:bg-accent/20">
              Our Services
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight mb-6 animate-fade-up animation-delay-100">
              Comprehensive Career
              <span className="text-gradient"> Support Services</span>
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-up animation-delay-200 dark:text-gray-300">
              From skill assessment to job placement, we provide everything you need 
              to succeed in your career journey. All services are completely free.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div key={index} className="card-elevated p-6 lg:p-8 group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3 text-foreground dark:text-gray-100">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4 text-muted-foreground dark:text-gray-300">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground dark:text-gray-300">
                      <CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
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
      <section className="section-padding bg-muted dark:bg-gray-800">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Job Categories</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4 text-foreground dark:text-gray-100">
              Explore Opportunities by Industry
            </h2>
            <p className="text-muted-foreground dark:text-gray-300">
              We partner with employers across all major industries to bring you diverse opportunities
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {jobCategories.map((category, index) => (
              <div
                key={index}
                className="card-elevated p-5 text-center group cursor-pointer bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary transition-colors">
                  <category.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-medium mb-1 text-foreground dark:text-gray-100">{category.title}</h3>
                <span className="text-sm font-medium text-accent dark:text-gray-100">{category.jobs}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">The Process</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4 text-foreground dark:text-gray-100">
              Your Path to Employment
            </h2>
            <p className="text-muted-foreground dark:text-gray-300">
              A simple five-step process designed to get you hired quickly
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center shrink-0">
                    <span className="font-heading font-bold text-primary-foreground">{step.number}</span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2 dark:bg-gray-600" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="font-heading text-xl font-semibold mb-2 text-foreground dark:text-gray-100">{step.title}</h3>
                  <p className="text-muted-foreground dark:text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-muted dark:bg-gray-800">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4 text-foreground dark:text-gray-100">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground dark:text-gray-300">
              Find answers to common questions about our services
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card-elevated p-6 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
                <h3 className="font-heading text-lg font-semibold mb-2 text-foreground dark:text-gray-100">{faq.question}</h3>
                <p className="text-muted-foreground dark:text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary dark:bg-primary/80">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-primary-foreground dark:text-white">
              Ready to Find Your Perfect Job?
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/80 dark:text-white/80">
              Join thousands of job seekers who have successfully found employment 
              through our skill-based matching platform. Your dream job awaits!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/about" className="btn-accent w-full sm:w-auto">
                Learn About Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                to="/"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-foreground text-primary-foreground font-medium rounded-lg transition-all duration-300 hover:bg-primary-foreground hover:text-primary w-full sm:w-auto dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-primary"
              >
                Back to Home
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
