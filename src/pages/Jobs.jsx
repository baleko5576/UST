import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    Search,
    MapPin,
    Briefcase,
    Clock,
    DollarSign,
    Building2,
    Filter,
    ChevronDown,
    ChevronRight,
    ChevronLeft,
    X,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const jobListings = [
    {
        id: 1,
        title: "Software Developer",
        company: "Tech Solutions India Pvt Ltd",
        location: "Bangalore, India",
        type: "Full-time",
        salary: "₹35,000 - ₹50,000",
        category: "Technology",
        posted: "2 days ago",
        description:
            "We are looking for a skilled software developer to join our growing team.",
        skills: ["JavaScript", "React", "Node.js"],
    },
    {
        id: 2,
        title: "Administrative Assistant",
        company: "Global Enterprises India",
        location: "Delhi, India",
        type: "Full-time",
        salary: "₹15,000 - ₹25,000",
        category: "Administrative",
        posted: "1 day ago",
        description:
            "Seeking an organized administrative assistant to support our executive team.",
        skills: ["MS Office", "Communication", "Organization"],
    },
    {
        id: 3,
        title: "Sales Representative",
        company: "Retail Masters India",
        location: "Mumbai, India",
        type: "Full-time",
        salary: "₹12,000 + Commission",
        category: "Sales",
        posted: "3 days ago",
        description:
            "Join our sales team and help drive business growth across the region.",
        skills: ["Sales", "Negotiation", "Customer Service"],
    },
    {
        id: 4,
        title: "Registered Nurse",
        company: "City Hospital India",
        location: "Chennai, India",
        type: "Full-time",
        salary: "₹20,000 - ₹30,000",
        category: "Healthcare",
        posted: "5 days ago",
        description:
            "Experienced registered nurse needed for our busy healthcare facility.",
        skills: ["Patient Care", "Medical Knowledge", "First Aid"],
    },
    {
        id: 5,
        title: "Graphic Designer",
        company: "Creative Agency India",
        location: "Pune, India",
        type: "Contract",
        salary: "₹15,000 - ₹25,000",
        category: "Design",
        posted: "1 week ago",
        description:
            "Creative graphic designer needed for branding and marketing projects.",
        skills: ["Photoshop", "Illustrator", "Creativity"],
    },
    {
        id: 6,
        title: "Electrician",
        company: "Power Solutions India",
        location: "Kolkata, India",
        type: "Full-time",
        salary: "₹8,000 - ₹12,000",
        category: "Skilled Trades",
        posted: "4 days ago",
        description:
            "Certified electrician needed for residential and commercial projects.",
        skills: ["Electrical Systems", "Safety", "Problem Solving"],
    },
];

const categories = [
    "All",
    "Technology",
    "Administrative",
    "Sales",
    "Healthcare",
    "Design",
    "Skilled Trades",
];
const locations = [
    "All Locations",
    "Bangalore",
    "Delhi",
    "Mumbai",
    "Chennai",
    "Pune",
    "Kolkata",
];
const jobTypes = ["All Types", "Full-time", "Part-time", "Contract", "Internship"];

const JOBS_PER_PAGE = 6;

const Jobs = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedLocation, setSelectedLocation] = useState("All Locations");
    const [selectedType, setSelectedType] = useState("All Types");
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "ease-out-cubic",
            once: false,
            mirror: true,
        });
    }, []);

    const filteredJobs = jobListings.filter((job) => {
        const matchesSearch =
            job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.skills.some((skill) =>
                skill.toLowerCase().includes(searchTerm.toLowerCase())
            );
        const matchesCategory =
            selectedCategory === "All" || job.category === selectedCategory;
        const matchesLocation =
            selectedLocation === "All Locations" ||
            job.location.includes(selectedLocation);
        const matchesType =
            selectedType === "All Types" || job.type === selectedType;

        return matchesSearch && matchesCategory && matchesLocation && matchesType;
    });

    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, selectedCategory, selectedLocation, selectedType]);

    const totalPages = Math.ceil(filteredJobs.length / JOBS_PER_PAGE);

    const paginatedJobs = filteredJobs.slice(
        (currentPage - 1) * JOBS_PER_PAGE,
        currentPage * JOBS_PER_PAGE
    );

    const clearFilters = () => {
        setSearchTerm("");
        setSelectedCategory("All");
        setSelectedLocation("All Locations");
        setSelectedType("All Types");
    };

    const hasActiveFilters =
        searchTerm ||
        selectedCategory !== "All" ||
        selectedLocation !== "All Locations" ||
        selectedType !== "All Types";

    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-16 md:pt-44 md:pb-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-background to-slate-100" />
                <div className="absolute top-20 right-10 w-72 h-72 bg-teal-200/40 rounded-full blur-3xl animate-pulse-soft" />
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-slate-200/60 rounded-full blur-3xl animate-pulse-soft animation-delay-200" />

                <div className="container-narrow relative">
                    <div className="max-w-3xl mx-auto text-center">
                        <span
                            data-aos="fade-down"
                            data-aos-duration="600"
                            className="badge mb-6"
                        >
                            Find Jobs
                        </span>
                        <h1
                            data-aos="fade-up"
                            data-aos-duration="800"
                            data-aos-delay="100"
                            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                        >
                            Find Your
                            <span className="text-gradient"> Perfect Job</span>
                        </h1>
                        <p
                            data-aos="fade-up"
                            data-aos-duration="800"
                            data-aos-delay="200"
                            className="text-lg text-muted-foreground mb-10"
                        >
                            Browse thousands of job opportunities matched to your skills and
                            experience
                        </p>

                        {/* Search Bar */}
                        <div
                            data-aos="fade-up"
                            data-aos-duration="800"
                            data-aos-delay="300"
                            className="max-w-2xl mx-auto"
                        >
                            <div className="bg-card rounded-2xl p-4 shadow-xl border border-border/50">
                                <div className="flex flex-col md:flex-row gap-4">
                                    <div className="flex-1 relative">
                                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                        <input
                                            type="text"
                                            placeholder="Job title, keywords, or skills..."
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            className="w-full pl-12 pr-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                                        />
                                    </div>
                                    <button className="btn-accent">
                                        <Search className="h-4 w-4 mr-2" />
                                        Search Jobs
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filters & Listings */}
            <section className="section-padding !pt-0 flex-1">
                <div className="container-narrow">
                    {/* Filters */}
                    <div
                        data-aos="fade-up"
                        data-aos-duration="800"
                        className="card-elevated p-6 mb-8"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <Filter className="h-5 w-5 text-muted-foreground" />
                                <span className="font-semibold">Filters</span>
                            </div>
                            {hasActiveFilters && (
                                <button
                                    onClick={clearFilters}
                                    className="text-sm text-primary hover:text-primary/80 flex items-center gap-1 transition-colors"
                                >
                                    <X className="w-4 h-4" />
                                    Clear all
                                </button>
                            )}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="relative group">
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="w-full px-4 py-3 border border-border rounded-xl appearance-none bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary cursor-pointer transition-all duration-300"
                                >
                                    {categories.map((cat) => (
                                        <option key={cat} value={cat}>
                                            {cat}
                                        </option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none group-hover:text-primary transition-colors" />
                            </div>

                            <div className="relative group">
                                <select
                                    value={selectedLocation}
                                    onChange={(e) => setSelectedLocation(e.target.value)}
                                    className="w-full px-4 py-3 border border-border rounded-xl appearance-none bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary cursor-pointer transition-all duration-300"
                                >
                                    {locations.map((loc) => (
                                        <option key={loc} value={loc}>
                                            {loc}
                                        </option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none group-hover:text-primary transition-colors" />
                            </div>

                            <div className="relative group">
                                <select
                                    value={selectedType}
                                    onChange={(e) => setSelectedType(e.target.value)}
                                    className="w-full px-4 py-3 border border-border rounded-xl appearance-none bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary cursor-pointer transition-all duration-300"
                                >
                                    {jobTypes.map((type) => (
                                        <option key={type} value={type}>
                                            {type}
                                        </option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none group-hover:text-primary transition-colors" />
                            </div>
                        </div>
                    </div>

                    {/* Results Count */}
                    <div
                        data-aos="fade-up"
                        data-aos-duration="600"
                        className="mb-6 flex items-center justify-between"
                    >
                        {filteredJobs.length > 0 ? (
                            <p className="text-muted-foreground">
                                Showing{" "}
                                <span className="font-semibold text-foreground">
                                    {(currentPage - 1) * JOBS_PER_PAGE + 1} -{" "}
                                    {Math.min(currentPage * JOBS_PER_PAGE, filteredJobs.length)}
                                </span>{" "}
                                of{" "}
                                <span className="font-semibold text-foreground">
                                    {filteredJobs.length}
                                </span>{" "}
                                jobs
                            </p>
                        ) : ''}
                    </div>

                    {/* Job Listings */}
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {paginatedJobs.map((job, index) => (
                            <div
                                key={job.id}
                                data-aos="fade-up"
                                data-aos-duration="800"
                                data-aos-delay={index * 100}
                                className="card-elevated overflow-hidden group"
                            >
                                {/* Card Header */}
                                <div className="p-6 pb-4">
                                    <div className="flex items-start justify-between gap-4 mb-4">
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                                                {job.title}
                                            </h3>
                                            <p className="text-muted-foreground flex items-center gap-2 text-sm">
                                                <Building2 className="h-4 w-4" />
                                                {job.company}
                                            </p>
                                        </div>
                                    </div>
                                    <span className="badge text-xs">{job.category}</span>
                                </div>

                                {/* Card Content */}
                                <div className="px-6 pb-4">
                                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                                        {job.description}
                                    </p>
                                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                                        <span className="flex items-center gap-1.5 bg-muted/50 px-2.5 py-1 rounded-lg">
                                            <MapPin className="h-3.5 w-3.5" />
                                            {job.location.split(",")[0]}
                                        </span>
                                        <span className="flex items-center gap-1.5 bg-muted/50 px-2.5 py-1 rounded-lg">
                                            <Briefcase className="h-3.5 w-3.5" />
                                            {job.type}
                                        </span>
                                    </div>
                                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mt-2">
                                        <span className="flex items-center gap-1.5 bg-muted/50 px-2.5 py-1 rounded-lg">
                                            <DollarSign className="h-3.5 w-3.5" />
                                            {job.salary}
                                        </span>
                                        <span className="flex items-center gap-1.5 bg-muted/50 px-2.5 py-1 rounded-lg">
                                            <Clock className="h-3.5 w-3.5" />
                                            {job.posted}
                                        </span>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {job.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border border-border text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Card Footer */}
                                <div className="px-6 pb-6">
                                    <button className="btn-primary w-full group/btn">
                                        Apply Now
                                        <ChevronRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Empty State */}
                    {paginatedJobs.length === 0 && (
                        <div
                            data-aos="fade-up"
                            data-aos-duration="800"
                            className="text-center py-16"
                        >
                            <div className="w-20 h-20 rounded-2xl bg-muted/50 flex items-center justify-center mx-auto mb-6">
                                <Search className="w-8 h-8 text-muted-foreground" />
                            </div>
                            <h3 className="font-heading text-xl font-semibold mb-2">
                                No jobs found
                            </h3>
                            <p className="text-muted-foreground mb-6">
                                No jobs match your current filters. Try adjusting your search.
                            </p>
                            <button onClick={clearFilters} className="btn-outline">
                                Clear Filters
                            </button>
                        </div>
                    )}

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div
                            data-aos="fade-up"
                            data-aos-duration="600"
                            className="flex justify-center items-center gap-4 mt-12"
                        >
                            <button
                                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                                disabled={currentPage === 1}
                                className="btn-outline px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <ChevronLeft className="w-4 h-4 mr-1" />
                                Prev
                            </button>

                            <div className="flex items-center gap-2">
                                {[...Array(totalPages)].map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentPage(i + 1)}
                                        className={`w-10 h-10 rounded-xl font-medium transition-all duration-300 ${currentPage === i + 1
                                                ? "bg-primary text-primary-foreground shadow-teal"
                                                : "bg-muted/50 hover:bg-muted text-muted-foreground"
                                            }`}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                            </div>

                            <button
                                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className="btn-outline px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Next
                                <ChevronRight className="w-4 h-4 ml-1" />
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 grid-pattern" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-3xl" />

                <div className="container-narrow relative">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2
                            data-aos="fade-up"
                            data-aos-duration="800"
                            className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4"
                        >
                            Can't find what you're looking for?
                        </h2>
                        <p
                            data-aos="fade-up"
                            data-aos-duration="800"
                            data-aos-delay="100"
                            className="text-slate-300 mb-8"
                        >
                            Create a profile and let employers find you. Get personalized job
                            recommendations based on your skills.
                        </p>
                        <Link
                            to="/services"
                            data-aos="fade-up"
                            data-aos-duration="800"
                            data-aos-delay="200"
                            className="btn-accent group inline-flex"
                        >
                            Explore Our Services
                            <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Jobs;