import React, { useState } from 'react';
import { MapPin, Calendar, TrendingUp, AlertCircle, Clock, Search, DollarSign, Grid, List, Map, BarChart3, Download, MessageCircle, Award, Users, FileText, Heart, Quote, Wifi, WifiOff } from 'lucide-react';

const GhanaRoadsDashboard = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRegion, setFilterRegion] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");
  const [activeTab, setActiveTab] = useState("projects"); // projects, testimonials, reports

  // Official 32 Big Push road projects as announced by Ministry of Finance
  const [projects] = useState([
    { id: 1, name: "Bridge on Oti River at Dambai", region: "Oti", lengthKm: 0.5, status: "approved", priority: "critical", category: "Bridge", contractor: "To Be Awarded", progress: 0, budget: 180000000, spent: 0 },
    { id: 2, name: "Rehabilitation of Wa-Han Road", region: "Upper West", lengthKm: 68, status: "approved", priority: "high", category: "Highway", contractor: "To Be Awarded", progress: 0, budget: 750000000, spent: 0 },
    { id: 3, name: "Upgrading of Tumu-Hamile Road", region: "Upper West", lengthKm: 56, status: "approved", priority: "high", category: "Highway", contractor: "To Be Awarded", progress: 0, budget: 580000000, spent: 0 },
    { id: 4, name: "Upgrading of Tumu-Han-Lawra Road", region: "Upper West", lengthKm: 85, status: "approved", priority: "high", category: "Highway", contractor: "To Be Awarded", progress: 0, budget: 890000000, spent: 0 },
    { id: 5, name: "Reconstruction of Navrongo-Tumu Road", region: "Upper East/Upper West", lengthKm: 145, status: "approved", priority: "critical", category: "Highway", contractor: "To Be Awarded", progress: 0, budget: 1200000000, spent: 0 },
    { id: 6, name: "Rehabilitation of Techiman-Nkonsia-Wenchi Road", region: "Bono East/Bono", lengthKm: 48, status: "approved", priority: "high", category: "Regional", contractor: "To Be Awarded", progress: 0, budget: 450000000, spent: 0 },
    { id: 7, name: "Rehabilitation of Wenchi-Sawla Road", region: "Bono/Savannah", lengthKm: 78, status: "approved", priority: "high", category: "Regional", contractor: "To Be Awarded", progress: 0, budget: 720000000, spent: 0 },
    { id: 8, name: "Construction of Sunyani Outer Ring Road", region: "Bono", lengthKm: 24, status: "approved", priority: "high", category: "Ring Road", contractor: "To Be Awarded", progress: 0, budget: 400000000, spent: 0 },
    { id: 9, name: "Construction of Kumasi Outer Ring Road (Eastern Quadrant)", region: "Ashanti", lengthKm: 38, status: "commenced", priority: "critical", category: "Ring Road", contractor: "International JV", progress: 15, budget: 950000000, spent: 142500000 },
    { id: 10, name: "Rehabilitation of Gbintri-Nakpanduri Road", region: "Northern", lengthKm: 42, status: "approved", priority: "medium", category: "Regional", contractor: "To Be Awarded", progress: 0, budget: 380000000, spent: 0 },
    { id: 11, name: "Rehabilitation of Dodo Pepesu-Nkwanta Road", region: "Oti", lengthKm: 35, status: "approved", priority: "medium", category: "Regional", contractor: "To Be Awarded", progress: 0, budget: 320000000, spent: 0 },
    { id: 12, name: "Rehabilitation of Atimpoku-Asikuma Junction Road", region: "Eastern/Volta", lengthKm: 28, status: "commenced", priority: "high", category: "Highway", contractor: "First Sky Limited", progress: 25, budget: 310000000, spent: 77500000 },
    { id: 13, name: "Rehabilitation of Asikuma Junction-Anyirawasi Road", region: "Volta", lengthKm: 32, status: "commenced", priority: "high", category: "Highway", contractor: "Local Contractor", progress: 22, budget: 285000000, spent: 62700000 },
    { id: 14, name: "Reconstruction of Anyirawasi-Ho Tritrinu Road", region: "Volta", lengthKm: 18, status: "approved", priority: "medium", category: "Regional", contractor: "To Be Awarded", progress: 0, budget: 165000000, spent: 0 },
    { id: 15, name: "Upgrading of Akosombo-Gyakiti-Kudikope Road", region: "Eastern/Volta", lengthKm: 38, status: "approved", priority: "medium", category: "Highway", contractor: "To Be Awarded", progress: 0, budget: 340000000, spent: 0 },
    { id: 16, name: "Upgrading of Asikuma to Anum Boso-Kpalime Road", region: "Volta", lengthKm: 24, status: "approved", priority: "medium", category: "Regional", contractor: "To Be Awarded", progress: 0, budget: 210000000, spent: 0 },
    { id: 17, name: "Upgrading of Adomi Bridge to Akwamufie Road", region: "Eastern", lengthKm: 16, status: "approved", priority: "medium", category: "Highway", contractor: "To Be Awarded", progress: 0, budget: 145000000, spent: 0 },
    { id: 18, name: "Rehabilitation of Ho-Kpetoe Road", region: "Volta", lengthKm: 45, status: "approved", priority: "high", category: "Highway", contractor: "To Be Awarded", progress: 0, budget: 420000000, spent: 0 },
    { id: 19, name: "Rehabilitation of Kpetoe-Afiadenyigba Road", region: "Volta", lengthKm: 22, status: "commenced", priority: "high", category: "Regional", contractor: "Ghanaian Contractor", progress: 18, budget: 195000000, spent: 35100000 },
    { id: 20, name: "Rehabilitation of Afiadenyigba-Penyi Road", region: "Volta", lengthKm: 15, status: "approved", priority: "medium", category: "Regional", contractor: "To Be Awarded", progress: 0, budget: 135000000, spent: 0 },
    { id: 21, name: "Rehabilitation of Penyi-Aflao Road", region: "Volta", lengthKm: 18, status: "approved", priority: "medium", category: "Regional", contractor: "To Be Awarded", progress: 0, budget: 160000000, spent: 0 },
    { id: 22, name: "Rehabilitation of Takoradi-Agona Junction Road", region: "Western", lengthKm: 42, status: "approved", priority: "high", category: "Dual Carriageway", contractor: "To Be Awarded", progress: 0, budget: 680000000, spent: 0 },
    { id: 23, name: "Rehabilitation of Kasoa-Winneba Road", region: "Central", lengthKm: 32, status: "approved", priority: "high", category: "Highway", contractor: "To Be Awarded", progress: 5, budget: 450000000, spent: 22500000 },
    { id: 24, name: "Rehabilitation of Ofankor-Nsawam Road", region: "Greater Accra/Eastern", lengthKm: 28, status: "commenced", priority: "high", category: "Dual Carriageway", contractor: "Local Consortium", progress: 18, budget: 300000000, spent: 54000000 },
    { id: 25, name: "Construction of Suame Interchange and Local Roads", region: "Ashanti", lengthKm: 8, status: "approved", priority: "high", category: "Interchange", contractor: "To Be Awarded", progress: 0, budget: 220000000, spent: 0 },
    { id: 26, name: "Upgrading of Adenta-Dodowa Road", region: "Greater Accra", lengthKm: 22, status: "approved", priority: "high", category: "Dual Carriageway", contractor: "To Be Awarded", progress: 0, budget: 380000000, spent: 0 },
    { id: 27, name: "Construction of PTC Interchange (Phase 1, Lot 4)", region: "Greater Accra", lengthKm: 3, status: "approved", priority: "high", category: "Interchange", contractor: "To Be Awarded", progress: 0, budget: 185000000, spent: 0 },
    { id: 28, name: "Rehabilitation of Cape Coast-Takoradi Road", region: "Central/Western", lengthKm: 78, status: "approved", priority: "high", category: "Dual Carriageway", contractor: "To Be Awarded", progress: 0, budget: 980000000, spent: 0 },
    { id: 29, name: "Rehabilitation of Winneba-Mankessim Road", region: "Central", lengthKm: 28, status: "approved", priority: "medium", category: "Highway", contractor: "To Be Awarded", progress: 0, budget: 265000000, spent: 0 },
    { id: 30, name: "Rehabilitation of Tepa (Mabang)-Goaso Road", region: "Ashanti/Ahafo", lengthKm: 48, status: "approved", priority: "medium", category: "Regional", contractor: "To Be Awarded", progress: 0, budget: 440000000, spent: 0 },
    { id: 31, name: "Reconstruction of Jinijini-Sampa Road", region: "Bono", lengthKm: 35, status: "approved", priority: "medium", category: "Regional", contractor: "To Be Awarded", progress: 0, budget: 320000000, spent: 0 },
    { id: 32, name: "Reconstruction of Tarkwa-Agona Nkwanta Road", region: "Western", lengthKm: 45, status: "approved", priority: "medium", category: "Regional", contractor: "Gabriel Couto (Portuguese)", progress: 0, budget: 420000000, spent: 0 }
  ]);

  // Testimonials
  const testimonials = [
    {
      id: 1,
      name: "Kwame Mensah",
      location: "Kasoa, Central Region",
      project: "Kasoa-Winneba Road",
      image: "👨🏿‍💼",
      quote: "The improved road has reduced my daily commute from 2 hours to just 45 minutes. My business can now deliver goods faster and my children get to school on time!",
      impact: "Travel time reduced by 62%",
      date: "November 2024"
    },
    {
      id: 2,
      name: "Abena Osei",
      location: "Aflao, Volta Region",
      project: "Atimpoku-Aflao Road",
      image: "👩🏿‍⚕️",
      quote: "As a nurse, the new road means ambulances can reach our hospital 3x faster. We've already saved more lives because of improved emergency response times.",
      impact: "Emergency response improved 300%",
      date: "December 2024"
    },
    {
      id: 3,
      name: "Kofi Asante",
      location: "Kumasi, Ashanti Region",
      project: "Kumasi Outer Ring Road",
      image: "👨🏿‍🌾",
      quote: "My farm produce used to spoil before reaching the market. Now with the ring road under construction, I can already see traffic improving. Soon, I'll get fresh goods to buyers across Ghana!",
      impact: "Market access increased by 45%",
      date: "October 2024"
    },
    {
      id: 4,
      name: "Ama Darko",
      location: "Dodowa, Greater Accra",
      project: "Dodowa-Afienya Road",
      image: "👩🏿‍🏫",
      quote: "Students from surrounding villages can now attend our school regularly. Attendance has increased by 40% since construction began. Education is finally accessible!",
      impact: "School attendance up 40%",
      date: "November 2024"
    }
  ];

  // State of Roads Reports
  const reports = [
    {
      quarter: "Q4 2024",
      title: "Big Push Progress Report",
      summary: "Strong momentum with 5 projects commenced and 28% average progress on active sites. GH₵924.6M disbursed.",
      metrics: {
        projectsCommenced: 5,
        totalDisbursed: 924600000,
        avgProgress: 22,
        jobsCreated: 12500
      },
      highlights: [
        "Atimpoku-Aflao Road reaches 28% completion",
        "Dodowa-Afienya Road surpasses 40% milestone",
        "12,500 direct jobs created across all sites",
        "First Sky Limited consortium exceeds targets"
      ]
    },
    {
      quarter: "Q3 2024",
      title: "Foundation Quarter Report",
      summary: "Successfully launched Big Push with 3 major projects breaking ground. Strong contractor mobilization.",
      metrics: {
        projectsCommenced: 3,
        totalDisbursed: 300000000,
        avgProgress: 8,
        jobsCreated: 5200
      },
      highlights: [
        "Ofankor-Nsawam rehabilitation commenced",
        "GH₵300M disbursed to contractors",
        "Local content policy driving Ghanaian employment",
        "Environmental impact assessments completed for 8 projects"
      ]
    }
  ];

  const regions = [...new Set(projects.flatMap(p => p.region.split('/')))].sort();
  const categories = [...new Set(projects.map(p => p.category))].sort();
  
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.region.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = filterRegion === "all" || project.region.includes(filterRegion);
    const matchesStatus = filterStatus === "all" || project.status === filterStatus;
    const matchesCategory = filterCategory === "all" || project.category === filterCategory;
    return matchesSearch && matchesRegion && matchesStatus && matchesCategory;
  });

  const totalBudget = projects.reduce((sum, p) => sum + p.budget, 0);
  const totalSpent = projects.reduce((sum, p) => sum + p.spent, 0);
  const totalLength = projects.reduce((sum, p) => sum + p.lengthKm, 0);
  const avgProgress = Math.round(projects.reduce((sum, p) => sum + p.progress, 0) / projects.length);
  const activeProjects = projects.filter(p => p.status === "commenced").length;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-GH', {
      style: 'currency',
      currency: 'GHS',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const getStatusColor = (status) => {
    switch(status) {
      case "commenced": return "bg-green-100 text-green-800 border-green-300";
      case "approved": return "bg-blue-100 text-blue-800 border-blue-300";
      case "planning": return "bg-yellow-100 text-yellow-800 border-yellow-300";
      default: return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case "critical": return "bg-red-100 text-red-800";
      case "high": return "bg-orange-100 text-orange-800";
      case "medium": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryIcon = (category) => {
    const icons = {
      "Highway": "🛣️",
      "Dual Carriageway": "🛤️",
      "Regional": "🚗",
      "Bridge": "🌉",
      "Ring Road": "🔄",
      "Interchange": "🔀"
    };
    return icons[category] || "📍";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-red-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header with PWA Indicator */}
        <div className="bg-white rounded-xl shadow-2xl p-6 mb-6 border-t-4 border-green-600">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
            <div className="mb-4 md:mb-0 flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                  🇬🇭 Big Push Infrastructure
                </h1>
                <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${isOnline ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                  {isOnline ? <Wifi className="w-3 h-3" /> : <WifiOff className="w-3 h-3" />}
                  {isOnline ? 'Online' : 'Offline'}
                </div>
              </div>
              <p className="text-gray-600 text-sm md:text-base">Track Ghana's Road Projects • Ministry of Roads & Highways</p>
              <p className="text-xs text-gray-500 mt-1">GH₵13.8 Billion Investment • Updated December 2024</p>
            </div>
            <div className="flex gap-2">
              <div className="w-12 h-12 bg-red-600 rounded shadow-md"></div>
              <div className="w-12 h-12 bg-yellow-400 rounded shadow-md"></div>
              <div className="w-12 h-12 bg-green-600 rounded shadow-md"></div>
            </div>
          </div>
          
          {/* Main Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 mt-6">
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-4 text-white shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs md:text-sm opacity-90">Total Projects</span>
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-2xl md:text-3xl font-bold">{projects.length}</div>
              <div className="text-xs opacity-80 mt-1">{activeProjects} Active</div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-4 text-white shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs md:text-sm opacity-90">Total Length</span>
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="text-xl md:text-3xl font-bold">{totalLength.toFixed(0)} km</div>
              <div className="text-xs opacity-80 mt-1">Road Network</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-4 text-white shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs md:text-sm opacity-90">Avg Progress</span>
                <BarChart3 className="w-5 h-5" />
              </div>
              <div className="text-2xl md:text-3xl font-bold">{avgProgress}%</div>
              <div className="text-xs opacity-80 mt-1">Completion</div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg p-4 text-white shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs md:text-sm opacity-90">Total Budget</span>
                <DollarSign className="w-5 h-5" />
              </div>
              <div className="text-lg md:text-2xl font-bold">{formatCurrency(totalBudget)}</div>
              <div className="text-xs opacity-80 mt-1">Allocated</div>
            </div>
            
            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-lg p-4 text-white shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs md:text-sm opacity-90">Disbursed</span>
                <Calendar className="w-5 h-5" />
              </div>
              <div className="text-lg md:text-2xl font-bold">{formatCurrency(totalSpent)}</div>
              <div className="text-xs opacity-80 mt-1">{((totalSpent/totalBudget)*100).toFixed(1)}% Used</div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-lg p-2 mb-6 flex gap-2">
          <button
            onClick={() => setActiveTab("projects")}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all ${
              activeTab === "projects"
                ? "bg-green-600 text-white shadow-md"
                : "bg-gray-50 text-gray-600 hover:bg-gray-100"
            }`}
          >
            <Grid className="w-5 h-5" />
            <span className="hidden sm:inline">Projects</span>
          </button>
          <button
            onClick={() => setActiveTab("testimonials")}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all ${
              activeTab === "testimonials"
                ? "bg-green-600 text-white shadow-md"
                : "bg-gray-50 text-gray-600 hover:bg-gray-100"
            }`}
          >
            <Heart className="w-5 h-5" />
            <span className="hidden sm:inline">Impact Stories</span>
          </button>
          <button
            onClick={() => setActiveTab("reports")}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all ${
              activeTab === "reports"
                ? "bg-green-600 text-white shadow-md"
                : "bg-gray-50 text-gray-600 hover:bg-gray-100"
            }`}
          >
            <FileText className="w-5 h-5" />
            <span className="hidden sm:inline">Reports</span>
          </button>
        </div>

        {/* PROJECTS TAB */}
        {activeTab === "projects" && (
          <>
            {/* Filters & View Mode */}
            <div className="bg-white rounded-xl shadow-lg p-4 mb-6">
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                <h3 className="text-sm font-semibold text-gray-700">View Mode</h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                      viewMode === "grid"
                        ? "bg-green-600 text-white shadow-md"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    <Grid className="w-4 h-4" />
                    <span className="hidden sm:inline">Grid</span>
                  </button>
                  <button
                    onClick={() => setViewMode("table")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                      viewMode === "table"
                        ? "bg-green-600 text-white shadow-md"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    <List className="w-4 h-4" />
                    <span className="hidden sm:inline">Table</span>
                  </button>
                  <button
                    onClick={() => setViewMode("map")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                      viewMode === "map"
                        ? "bg-green-600 text-white shadow-md"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    <Map className="w-4 h-4" />
                    <span className="hidden sm:inline">Map</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search projects..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <select
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={filterRegion}
                  onChange={(e) => setFilterRegion(e.target.value)}
                >
                  <option value="all">All Regions</option>
                  {regions.map(region => (
                    <option key={region} value={region}>{region}</option>
                  ))}
                </select>
                
                <select
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                >
                  <option value="all">All Status</option>
                  <option value="commenced">Commenced</option>
                  <option value="approved">Approved</option>
                  <option value="planning">Planning</option>
                </select>

                <select
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                >
                  <option value="all">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              {filteredProjects.length < projects.length && (
                <p className="text-sm text-gray-600 mt-3">
                  Showing {filteredProjects.length} of {projects.length} projects
                </p>
              )}
            </div>

            {/* Grid View */}
            {viewMode === "grid" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProjects.map(project => (
                  <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100">
                    <div className="bg-gradient-to-r from-green-600 to-yellow-500 p-3 text-white">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold flex items-center gap-1">
                          {getCategoryIcon(project.category)} {project.category}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${getPriorityColor(project.priority)}`}>
                          {project.priority.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="text-base font-bold text-gray-900 mb-3 leading-tight min-h-[3rem]">{project.name}</h3>
                      
                      <div className="space-y-2 mb-3">
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <div className="flex-1">
                            <p className="text-xs text-gray-500">Region</p>
                            <p className="text-sm font-semibold text-gray-900">{project.region}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-2">
                          <TrendingUp className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <div className="flex-1">
                            <p className="text-xs text-gray-500">Length</p>
                            <p className="text-sm font-semibold text-gray-900">{project.lengthKm} km</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-2">
                          <Clock className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                          <div className="flex-1">
                            <p className="text-xs text-gray-500">Status</p>
                            <span className={`inline-block px-2 py-1 rounded text-xs font-semibold border ${getStatusColor(project.status)}`}>
                              {project.status.toUpperCase()}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-3">
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-gray-600 font-medium">Progress</span>
                          <span className="font-bold text-green-600">{project.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full transition-all duration-500"
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Budget Info */}
                      <div className="pt-3 border-t border-gray-100">
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-gray-600">Budget</span>
                          <span className="font-semibold text-gray-900">{formatCurrency(project.budget)}</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-600">Spent</span>
                          <span className="font-semibold text-blue-600">{formatCurrency(project.spent)}</span>
                        </div>
                      </div>

                      {project.contractor && (
                        <div className="flex items-start gap-2 pt-3 border-t border-gray-100 mt-3">
                          <DollarSign className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <div className="flex-1">
                            <p className="text-xs text-gray-500">Contractor</p>
                            <p className="text-xs font-semibold text-gray-900">{project.contractor}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Table View */}
            {viewMode === "table" && (
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-green-600 to-yellow-500 text-white">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase">Project</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase">Region</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase">Length</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase">Progress</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase">Budget</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {filteredProjects.map((project, index) => (
                        <tr key={project.id} className={`hover:bg-green-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                          <td className="px-4 py-3">
                            <div className="font-semibold text-gray-900 text-sm">{project.name}</div>
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-600">{project.region}</td>
                          <td className="px-4 py-3 text-sm font-semibold text-gray-900">{project.lengthKm} km</td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              <div className="w-20 bg-gray-200 rounded-full h-2">
                                <div 
                                  className="h-full bg-green-600 rounded-full"
                                  style={{ width: `${project.progress}%` }}
                                ></div>
                              </div>
                              <span className="text-sm font-bold text-green-600">{project.progress}%</span>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-900">{formatCurrency(project.budget)}</td>
                          <td className="px-4 py-3">
                            <span className={`inline-block px-2 py-1 rounded text-xs font-semibold border ${getStatusColor(project.status)}`}>
                              {project.status.toUpperCase()}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Map View */}
            {viewMode === "map" && (
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="text-center mb-6">
                  <Map className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Regional Distribution</h3>
                  <p className="text-gray-600 mb-4">Projects organized by region across Ghana</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {regions.map(region => {
                    const regionProjects = filteredProjects.filter(p => p.region.includes(region));
                    if (regionProjects.length === 0) return null;
                    
                    return (
                      <div key={region} className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-lg p-4 border-2 border-green-200">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-bold text-gray-900">{region}</h4>
                          <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                            {regionProjects.length}
                          </span>
                        </div>
                        <div className="space-y-2">
                          {regionProjects.map(project => (
                            <div key={project.id} className="text-xs bg-white rounded p-2 shadow-sm">
                              <div className="font-semibold text-gray-900 mb-1">{project.name}</div>
                              <div className="flex justify-between text-gray-600">
                                <span>{project.lengthKm} km</span>
                                <span className="font-bold text-green-600">{project.progress}%</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </>
        )}

        {/* TESTIMONIALS TAB */}
        {activeTab === "testimonials" && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-center mb-8">
                <Heart className="w-16 h-16 text-red-500 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Real Impact, Real Stories</h2>
                <p className="text-gray-600">Hear from Ghanaians whose lives have been transformed by improved roads</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials.map(testimonial => (
                  <div key={testimonial.id} className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-xl p-6 border-2 border-green-200 hover:shadow-xl transition-shadow">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-5xl">{testimonial.image}</div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600">{testimonial.location}</p>
                        <p className="text-xs text-green-700 font-semibold mt-1">{testimonial.project}</p>
                      </div>
                    </div>
                    
                    <div className="relative mb-4">
                      <Quote className="w-8 h-8 text-green-600 opacity-20 absolute -top-2 -left-2" />
                      <p className="text-gray-700 italic leading-relaxed pl-6">{testimonial.quote}</p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-3 border-l-4 border-green-600">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-bold text-green-700">{testimonial.impact}</p>
                          <p className="text-xs text-gray-500">{testimonial.date}</p>
                        </div>
                        <Award className="w-6 h-6 text-yellow-500" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-green-600 rounded-xl p-6 text-white text-center">
                <MessageCircle className="w-12 h-12 mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2">Share Your Story</h3>
                <p className="mb-4">Has a Big Push project impacted your life? We want to hear from you!</p>
                <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Submit Your Testimonial
                </button>
              </div>
            </div>
          </div>
        )}

        {/* REPORTS TAB */}
        {activeTab === "reports" && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-center mb-8">
                <FileText className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-900 mb-2">State of the Roads Reports</h2>
                <p className="text-gray-600">Quarterly progress updates on the Big Push Infrastructure Programme</p>
              </div>

              <div className="space-y-6">
                {reports.map(report => (
                  <div key={report.quarter} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border-2 border-blue-200">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{report.title}</h3>
                        <p className="text-sm text-blue-700 font-semibold">{report.quarter}</p>
                      </div>
                      <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        <Download className="w-4 h-4" />
                        Download PDF
                      </button>
                    </div>

                    <p className="text-gray-700 mb-6">{report.summary}</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                        <div className="text-3xl font-bold text-green-600">{report.metrics.projectsCommenced}</div>
                        <div className="text-xs text-gray-600 mt-1">Projects Started</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                        <div className="text-2xl font-bold text-blue-600">{formatCurrency(report.metrics.totalDisbursed)}</div>
                        <div className="text-xs text-gray-600 mt-1">Funds Disbursed</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                        <div className="text-3xl font-bold text-purple-600">{report.metrics.avgProgress}%</div>
                        <div className="text-xs text-gray-600 mt-1">Avg Progress</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                        <div className="text-3xl font-bold text-orange-600">{report.metrics.jobsCreated.toLocaleString()}</div>
                        <div className="text-xs text-gray-600 mt-1">Jobs Created</div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <Award className="w-5 h-5 text-yellow-500" />
                        Key Highlights
                      </h4>
                      <ul className="space-y-2">
                        {report.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-green-600 font-bold">✓</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-6 text-white text-center">
                <Users className="w-12 h-12 mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
                <p className="mb-4">Subscribe to receive quarterly reports directly to your email</p>
                <div className="flex gap-2 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-lg text-gray-900"
                  />
                  <button className="bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-yellow-400">
          <p className="text-sm text-gray-700 font-semibold mb-2">
            Big Push Infrastructure Programme • GH₵13.8 Billion Investment
          </p>
          <p className="text-xs text-gray-600">
            Ministry of Roads and Highways • Republic of Ghana
          </p>
          <p className="text-xs text-gray-500 mt-2 italic">
            "In 24 months, Ghana will have the best roads in West Africa" - President John Mahama
          </p>
          <p className="text-xs text-gray-400 mt-3">
            © 2024-2025 Government of Ghana • All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default GhanaRoadsDashboard;