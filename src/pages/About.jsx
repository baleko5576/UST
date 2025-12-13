import { Link } from "react-router-dom";
import {
  Target,
  Eye,
  Heart,
  Award,
  Users,
  Building2,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Globe,
  Lightbulb,
  Shield
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  const values = [
    { icon: Heart, title: "Compassion", description: "We understand the challenges of unemployment and approach every job seeker with empathy and genuine care." },
    { icon: Shield, title: "Integrity", description: "We maintain the highest ethical standards in all our operations, ensuring trust and transparency." },
    { icon: Lightbulb, title: "Innovation", description: "We continuously improve our skill-matching technology to provide the best opportunities for job seekers." },
    { icon: Globe, title: "Inclusivity", description: "We believe everyone deserves equal access to employment opportunities, regardless of their background." },
  ];

  const impactStats = [
    { value: "50,000+", label: "Jobs Posted Annually", description: "Across diverse industries and skill levels" },
    { value: "35,000+", label: "Successful Placements", description: "Job seekers found meaningful employment" },
    { value: "500+", label: "Partner Companies", description: "From startups to Fortune 500 companies" },
    { value: "25+", label: "Training Programs", description: "Free skill development courses available" },
  ];

  const teamMembers = [
    { name: "Dr. Vivek Sharma", role: "Executive Director", bio: "Former labor economist with 20+ years in workforce development policy." },
    { name: "Maria Santos", role: "Head of Career Services", bio: "Certified career counselor dedicated to helping individuals discover their potential." },
    { name: "David Kim", role: "Technology Director", bio: "Led the development of our AI-powered skill matching platform." },
    { name: "Dr. Aisha Patel", role: "Training Programs Lead", bio: "Education specialist focused on practical skill development for the modern workplace." },
  ];

  const milestones = [
    { year: "2015", event: "Founded with a mission to reduce unemployment through skill-based matching" },
    { year: "2017", event: "Launched our first AI-powered job matching platform" },
    { year: "2019", event: "Reached 10,000 successful job placements" },
    { year: "2021", event: "Introduced free training programs and certifications" },
    { year: "2023", event: "Expanded partnerships to over 500 companies nationwide" },
  ];

  return (
    <div className="min-h-screen bg-background dark:bg-background text-foreground dark:text-foreground transition-colors duration-300">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 dark:from-primary/20 dark:to-secondary/20" />
        <div className="container-narrow section-padding !py-0 relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent dark:bg-accent/20 dark:text-accent rounded-full text-sm font-medium mb-6 animate-fade-up">
              About Us
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight mb-6 animate-fade-up animation-delay-100">
              Empowering Careers,<span className="text-gradient"> Building Futures</span>
            </h1>
            <p className="text-lg text-muted-foreground dark:text-muted-foreground/80 animate-fade-up animation-delay-200">
              Unemployment Solution Trust is dedicated to bridging the gap between talented 
              individuals and meaningful employment opportunities through innovative 
              skill-based matching and comprehensive career support.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted dark:bg-muted/20 transition-colors duration-300">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="card-elevated p-8 lg:p-10 dark:bg-gray-800 transition-colors duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h2 className="font-heading text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground dark:text-muted-foreground/80 leading-relaxed">
                To eliminate unemployment barriers by connecting job seekers with opportunities that match their unique skills, experience, and aspirations. We strive to empower individuals through education, training, and personalized career guidance.
              </p>
            </div>

            <div className="card-elevated p-8 lg:p-10 dark:bg-gray-800 transition-colors duration-300">
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-secondary-foreground" />
              </div>
              <h2 className="font-heading text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground dark:text-muted-foreground/80 leading-relaxed">
                A world where everyone has access to meaningful employment that aligns with their skills and potential. We envision communities thriving with engaged, productive individuals who contribute to economic growth while achieving personal fulfillment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Our Foundation</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4">Core Values That Guide Us</h2>
            <p className="text-muted-foreground dark:text-muted-foreground/80">These principles shape every decision we make and every service we provide</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground/80 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section-padding bg-primary dark:bg-primary/90 transition-colors duration-300">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Our Impact</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mt-2 mb-4">Making a Real Difference</h2>
            <p className="text-primary-foreground/80">Our commitment to reducing unemployment has created measurable change</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-heading text-4xl md:text-5xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="font-medium text-primary-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-primary-foreground/70">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

 {/* Our Story Timeline */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Our Journey</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Milestones Along the Way
            </h2>
            <p className="text-muted-foreground">
              From humble beginnings to a nationwide impact
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <span className="font-heading font-bold text-primary-foreground text-sm">
                      {milestone.year}
                    </span>
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2" />
                  )}
                </div>
                <div className="card-elevated p-5 flex-1">
                  <p className="text-foreground">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-muted">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Leadership</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground">
              Dedicated professionals committed to your career success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="card-elevated p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="font-heading text-2xl font-bold text-primary">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <div className="text-sm text-accent font-medium mb-3">{member.role}</div>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="card-elevated p-8 md:p-12 lg:p-16 text-center bg-gradient-to-br from-primary to-primary/90">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Join Our Mission
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Whether you're a job seeker looking for opportunities or an employer 
              wanting to find great talent, we're here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/services" className="btn-accent w-full sm:w-auto">
                Explore Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                to="/"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-foreground text-primary-foreground font-medium rounded-lg transition-all duration-300 hover:bg-primary-foreground hover:text-primary w-full sm:w-auto"
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

export default About;
