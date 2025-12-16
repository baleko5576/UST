import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
  Target,
  Eye,
  Heart,
  Shield,
  Lightbulb,
  Globe,
  ArrowRight,
  Briefcase,
  Users,
  Building2,
  GraduationCap,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
    });
  }, []);

  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description:
        "We understand the challenges of unemployment and approach every job seeker with empathy and genuine care.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description:
        "We maintain the highest ethical standards in all our operations, ensuring trust and transparency.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We continuously improve our skill-matching technology to provide the best opportunities for job seekers.",
    },
    {
      icon: Globe,
      title: "Inclusivity",
      description:
        "We believe everyone deserves equal access to employment opportunities, regardless of their background.",
    },
  ];

  const impactStats = [
    {
      value: "50,000+",
      label: "Jobs Posted Annually",
      description: "Across diverse industries and skill levels",
      icon: Briefcase,
    },
    {
      value: "35,000+",
      label: "Successful Placements",
      description: "Job seekers found meaningful employment",
      icon: Users,
    },
    {
      value: "500+",
      label: "Partner Companies",
      description: "From startups to Fortune 500 companies",
      icon: Building2,
    },
    {
      value: "25+",
      label: "Training Programs",
      description: "Free skill development courses available",
      icon: GraduationCap,
    },
  ];

  const teamMembers = [
    {
      name: "Dr. Vivek Sharma",
      role: "Executive Director",
      bio: "Former labor economist with 20+ years in workforce development policy.",
      initials: "VS",
    },
    {
      name: "Maria Santos",
      role: "Head of Career Services",
      bio: "Certified career counselor dedicated to helping individuals discover their potential.",
      initials: "MS",
    },
    {
      name: "David Kim",
      role: "Technology Director",
      bio: "Led the development of our AI-powered skill matching platform.",
      initials: "DK",
    },
    {
      name: "Dr. Aisha Patel",
      role: "Training Programs Lead",
      bio: "Education specialist focused on practical skill development for the modern workplace.",
      initials: "AP",
    },
  ];

  const milestones = [
    {
      year: "2015",
      event: "Founded with a mission to reduce unemployment through skill-based matching",
    },
    { year: "2017", event: "Launched our first AI-powered job matching platform" },
    { year: "2019", event: "Reached 10,000 successful job placements" },
    { year: "2021", event: "Introduced free training programs and certifications" },
    { year: "2023", event: "Expanded partnerships to over 500 companies nationwide" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-background to-slate-100" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-teal-200/40 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-slate-200/60 rounded-full blur-3xl animate-pulse-soft animation-delay-200" />

        <div className="container-narrow relative">
          <div className="max-w-3xl mx-auto text-center">
            <span
              data-aos="fade-down"
              data-aos-duration="600"
              className="badge mb-6"
            >
              About Us
            </span>
            <h1
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Empowering Careers,
              <span className="text-gradient"> Building Futures</span>
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              Unemployment Solution Trust is dedicated to bridging the gap
              between talented individuals and meaningful employment
              opportunities through innovative skill-based matching and
              comprehensive career support.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted/50">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div
              data-aos="fade-right"
              data-aos-duration="800"
              className="card-elevated p-8 lg:p-10 group"
            >
              <div className="icon-box mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-teal">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h2 className="font-heading text-2xl font-bold mb-4">
                Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To eliminate unemployment barriers by connecting job seekers
                with opportunities that match their unique skills, experience,
                and aspirations. We strive to empower individuals through
                education, training, and personalized career guidance.
              </p>
            </div>

            <div
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="100"
              className="card-elevated p-8 lg:p-10 group"
            >
              <div className="icon-box mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-teal">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h2 className="font-heading text-2xl font-bold mb-4">
                Our Vision
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A world where everyone has access to meaningful employment that
                aligns with their skills and potential. We envision communities
                thriving with engaged, productive individuals who contribute to
                economic growth while achieving personal fulfillment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding relative">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-100/50 rounded-full blur-3xl" />
        <div className="container-narrow relative">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span
              data-aos="fade-down"
              data-aos-duration="600"
              className="section-badge"
            >
              Our Foundation
            </span>
            <h2
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            >
              Core Values That Guide Us
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              className="text-muted-foreground text-lg"
            >
              These principles shape every decision we make and every service we
              provide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                data-aos="flip-up"
                data-aos-duration="800"
                data-aos-delay={index * 100}
                className="text-center p-6 group"
              >
                <div className="icon-box-outline mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 ">
                  <value.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading text-lg font-semibold group-hover:scale-110 mb-2 transition-all duration-500">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground group-hover:scale-110 leading-relaxed transition-all duration-500">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="container-narrow relative">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span
              data-aos="fade-down"
              data-aos-duration="600"
              className="text-teal-400 font-semibold text-sm uppercase tracking-widest mb-4 block"
            >
              Our Impact
            </span>
            <h2
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Making a Real Difference
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              className="text-slate-400 text-lg"
            >
              Our commitment to reducing unemployment has created measurable
              change
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
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
                <div className="font-heading text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
                  {stat.value}
                </div>
                <div className="font-medium text-white mb-1">{stat.label}</div>
                <div className="text-sm text-slate-400">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding relative">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span
              data-aos="fade-down"
              data-aos-duration="600"
              className="section-badge"
            >
              Our Journey
            </span>
            <h2
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            >
              Milestones & Achievements
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-duration="800"
                data-aos-delay={index * 100}
                className="flex gap-6 mb-8 last:mb-0 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shrink-0 shadow-teal group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <span className="font-heading font-bold text-white text-sm">
                      {milestone.year}
                    </span>
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-4" />
                  )}
                </div>
                <div className="pb-8 pt-4">
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                    {milestone.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-muted/50">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span
              data-aos="fade-down"
              data-aos-duration="600"
              className="section-badge"
            >
              Leadership
            </span>
            <h2
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            >
              Meet Our Team
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              className="text-muted-foreground text-lg"
            >
              Dedicated professionals committed to your career success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={index * 100}
                className="card-elevated p-6 text-center group"
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center mx-auto mb-4 shadow-teal group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <span className="font-heading text-2xl font-bold text-white">
                    {member.initials}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-semibold mb-1">
                  {member.name}
                </h3>
                <div className="text-sm text-primary font-medium mb-3">
                  {member.role}
                </div>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
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
              Join Our Mission
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              className="text-xl text-slate-300 mb-10 leading-relaxed"
            >
              Whether you're looking for a job or want to partner with us, we're
              here to help you succeed.
            </p>
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/jobs" className="btn-accent w-full sm:w-auto group">
                Find Jobs
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-6 py-3 text-white font-semibold rounded-xl border-2 border-white/20 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm w-full sm:w-auto"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;