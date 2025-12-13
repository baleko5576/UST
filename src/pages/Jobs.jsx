import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Search, MapPin, Briefcase, Clock, DollarSign, Building2, Filter, ChevronDown } from "lucide-react";

const jobListings = [
    {
        "id": 1,
        "title": "Software Developer",
        "company": "Tech Solutions India Pvt Ltd",
        "location": "Bangalore, India",
        "type": "Full-time",
        "salary": "₹35,000 - ₹50,000",
        "category": "Technology",
        "posted": "2 days ago",
        "description": "We are looking for a skilled software developer to join our growing team.",
        "skills": ["JavaScript", "React", "Node.js"]
    },
    {
        "id": 2,
        "title": "Administrative Assistant",
        "company": "Global Enterprises India",
        "location": "Delhi, India",
        "type": "Full-time",
        "salary": "₹15,000 - ₹25,000",
        "category": "Administrative",
        "posted": "1 day ago",
        "description": "Seeking an organized administrative assistant to support our executive team.",
        "skills": ["MS Office", "Communication", "Organization"]
    },
    {
        "id": 3,
        "title": "Sales Representative",
        "company": "Retail Masters India",
        "location": "Mumbai, India",
        "type": "Full-time",
        "salary": "₹12,000 + Commission",
        "category": "Sales",
        "posted": "3 days ago",
        "description": "Join our sales team and help drive business growth across the region.",
        "skills": ["Sales", "Negotiation", "Customer Service"]
    },
    {
        "id": 4,
        "title": "Registered Nurse",
        "company": "City Hospital India",
        "location": "Chennai, India",
        "type": "Full-time",
        "salary": "₹20,000 - ₹30,000",
        "category": "Healthcare",
        "posted": "5 days ago",
        "description": "Experienced registered nurse needed for our busy healthcare facility.",
        "skills": ["Patient Care", "Medical Knowledge", "First Aid"]
    },
    {
        "id": 5,
        "title": "Graphic Designer",
        "company": "Creative Agency India",
        "location": "Pune, India",
        "type": "Contract",
        "salary": "₹15,000 - ₹25,000",
        "category": "Design",
        "posted": "1 week ago",
        "description": "Creative graphic designer needed for branding and marketing projects.",
        "skills": ["Photoshop", "Illustrator", "Creativity"]
    },
    {
        "id": 6,
        "title": "Electrician",
        "company": "Power Solutions India",
        "location": "Kolkata, India",
        "type": "Full-time",
        "salary": "₹8,000 - ₹12,000",
        "category": "Skilled Trades",
        "posted": "4 days ago",
        "description": "Certified electrician needed for residential and commercial projects.",
        "skills": ["Electrical Systems", "Safety", "Problem Solving"]
    }
];

const categories = ["All", "Technology", "Administrative", "Sales", "Healthcare", "Design", "Skilled Trades"];
const locations = ["All Locations", "Bangalore", "Delhi", "Mumbai", "Chennai", "Pune", "Kolkata"];
const jobTypes = ["All Types", "Full-time", "Part-time", "Contract", "Internship"];

const JOBS_PER_PAGE = 6;

const Jobs = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedLocation, setSelectedLocation] = useState("All Locations");
    const [selectedType, setSelectedType] = useState("All Types");
    const [currentPage, setCurrentPage] = useState(1);

    const filteredJobs = jobListings.filter((job) => {
        const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesCategory = selectedCategory === "All" || job.category === selectedCategory;
        const matchesLocation = selectedLocation === "All Locations" || job.location.includes(selectedLocation);
        const matchesType = selectedType === "All Types" || job.type === selectedType;

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

    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground dark:bg-gray-900 dark:text-gray-100">
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 dark:from-primary/20 dark:to-secondary/20" />
                <div className="container-narrow section-padding !py-0 relative">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent dark:bg-accent/20 rounded-full text-sm font-medium mb-6 animate-fade-up">
                            Find Jobs
                        </span>
                        <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight mb-6 animate-fade-up animation-delay-100">
                            Find Your
                            <span className="text-gradient"> Perfect Job</span>
                        </h1>
                        <p className="text-lg text-muted-foreground dark:text-gray-300 animate-fade-up animation-delay-200">
                            Browse thousands of job opportunities matched to your skills and experience
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg p-4 mt-10 shadow-lg">
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-1 relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-300" />
                                    <input
                                        type="text"
                                        placeholder="Job title, keywords, or skills..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-100"
                                    />
                                </div>
                                <button className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 dark:bg-blue-700 dark:hover:bg-blue-600">
                                    <Search className="h-4 w-4" />
                                    Search Jobs
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filters & Listings */}
            <section className="pb-12 pt-5 px-4 flex-1" >
                <div className="container mx-auto">
                    {/* Filters */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-8 shadow-sm border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-2 mb-4">
                            <Filter className="h-5 w-5 text-gray-500 dark:text-gray-300" />
                            <span className="font-medium text-gray-700 dark:text-gray-200">Filters</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="relative">
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md appearance-none bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
                                >
                                    {categories.map((cat) => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-300 pointer-events-none" />
                            </div>

                            <div className="relative">
                                <select
                                    value={selectedLocation}
                                    onChange={(e) => setSelectedLocation(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md appearance-none bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
                                >
                                    {locations.map((loc) => (
                                        <option key={loc} value={loc}>{loc}</option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-300 pointer-events-none" />
                            </div>

                            <div className="relative">
                                <select
                                    value={selectedType}
                                    onChange={(e) => setSelectedType(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md appearance-none bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
                                >
                                    {jobTypes.map((type) => (
                                        <option key={type} value={type}>{type}</option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-300 pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    {/* Results Count */}
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Showing{" "}
                        <span className="font-semibold text-gray-900 dark:text-gray-100">
                            {(currentPage - 1) * JOBS_PER_PAGE + 1} -{" "}
                            {Math.min(currentPage * JOBS_PER_PAGE, filteredJobs.length)}
                        </span>{" "}
                        of{" "}
                        <span className="font-semibold text-gray-900 dark:text-gray-100">
                            {filteredJobs.length}
                        </span>{" "}
                        jobs
                    </p>

                    {/* Job Listings */}
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                        {paginatedJobs.map((job) => (
                            <div key={job.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                                {/* Card Header */}
                                <div className="p-6 pb-4">
                                    <div className="flex flex-col gap-4">
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">{job.title}</h3>
                                            <p className="text-gray-500 dark:text-gray-400 flex items-center gap-2">
                                                <Building2 className="h-4 w-4" />
                                                {job.company}
                                            </p>
                                        </div>
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 w-fit">
                                            {job.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className="px-6 pb-4">
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">{job.description}</p>
                                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                                        <span className="flex items-center gap-1">
                                            <MapPin className="h-4 w-4" />
                                            {job.location}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Briefcase className="h-4 w-4" />
                                            {job.type}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <DollarSign className="h-4 w-4" />
                                            {job.salary}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="h-4 w-4" />
                                            {job.posted}
                                        </span>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {job.skills.map((skill) => (
                                            <span key={skill} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-200">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Card Footer */}
                                <div className="px-6 pb-6">
                                    <button className="px-6 py-2 bg-blue-600 dark:bg-blue-700 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors">
                                        Apply Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {paginatedJobs.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-500 dark:text-gray-400 text-lg">No jobs found matching your criteria.</p>
                            <button
                                className="mt-4 px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                                onClick={() => {
                                    setSearchTerm("");
                                    setSelectedCategory("All");
                                    setSelectedLocation("All Locations");
                                    setSelectedType("All Types");
                                }}
                            >
                                Clear Filters
                            </button>
                        </div>
                    )}

                    {totalPages > 1 && (
                        <div className="flex justify-center items-center gap-4 mt-8">
                            <button
                                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                                disabled={currentPage === 1}
                                className="px-4 py-2 border rounded-md disabled:opacity-50 dark:border-gray-600"
                            >
                                Prev
                            </button>

                            <span className="text-sm text-gray-600 dark:text-gray-400">
                                Page {currentPage} of {totalPages}
                            </span>

                            <button
                                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className="px-4 py-2 border rounded-md disabled:opacity-50 dark:border-gray-600"
                            >
                                Next
                            </button>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Jobs;
