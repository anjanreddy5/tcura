import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Stethoscope, Check, ArrowRight, Heart, Activity, Sparkles, Search } from "lucide-react";
import { useCart, Treatment } from "../context/CartContext";
import { Button } from "../components/ui/button";
import { Header } from "../components/Header";
import { TreatmentDetailsModal } from "../components/TreatmentDetailsModal";

interface TreatmentWithDetails extends Treatment {
  duration?: string;
  successRate?: string;
  recovery?: string;
  procedure?: string[];
  benefits?: string[];
  requirements?: string[];
}

export function TreatmentsPage() {
  const { addToCart, removeFromCart, isInCart } = useCart();
  const [selectedTreatment, setSelectedTreatment] = useState<TreatmentWithDetails | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const treatments: TreatmentWithDetails[] = [
    {
      id: 1,
      name: "Dental Implants",
      category: "Dentistry",
      price: 800,
      originalPrice: 2667,
      savings: 1867,
      description: "Complete dental implant procedure with crown, abutment, and follow-up care",
      duration: "3-6 months",
      successRate: "95-98%",
      recovery: "1-2 weeks",
      procedure: [
        "Initial consultation and X-rays",
        "Tooth extraction (if needed)",
        "Implant placement surgery",
        "Healing period (3-6 months)",
        "Abutment placement",
        "Crown fitting and final adjustments"
      ],
      benefits: [
        "Permanent solution for missing teeth",
        "Natural look and feel",
        "Prevents bone loss",
        "No damage to adjacent teeth",
        "Improved speech and eating"
      ],
      requirements: [
        "Good oral health",
        "Sufficient bone density",
        "Non-smoker or willing to quit",
        "Commitment to oral hygiene"
      ]
    },
    {
      id: 2,
      name: "Knee Replacement",
      category: "Orthopedics",
      price: 7000,
      originalPrice: 17500,
      savings: 10500,
      description: "Total knee replacement surgery with rehabilitation and physiotherapy",
      duration: "1-2 hours surgery",
      successRate: "90-95%",
      recovery: "3-6 months",
      procedure: [
        "Pre-operative assessment and planning",
        "Anesthesia administration",
        "Removal of damaged cartilage and bone",
        "Implant placement of artificial joint",
        "Wound closure and bandaging",
        "Post-operative physiotherapy program"
      ],
      benefits: [
        "Pain relief from arthritis",
        "Improved mobility and function",
        "Better quality of life",
        "Long-lasting results (15-20 years)",
        "Return to normal activities"
      ],
      requirements: [
        "Severe knee pain or stiffness",
        "Failed conservative treatments",
        "Good overall health",
        "Realistic expectations"
      ]
    },
    {
      id: 3,
      name: "IVF Treatment",
      category: "Fertility",
      price: 3500,
      originalPrice: 10000,
      savings: 6500,
      description: "Complete IVF cycle with medications, monitoring, and embryo transfer",
      duration: "4-6 weeks",
      successRate: "40-50%",
      recovery: "1-2 days",
      procedure: [
        "Ovarian stimulation with medications",
        "Regular monitoring with ultrasounds",
        "Egg retrieval procedure",
        "Fertilization in laboratory",
        "Embryo culture and development",
        "Embryo transfer to uterus"
      ],
      benefits: [
        "High success rates for conception",
        "Option to screen embryos genetically",
        "Can use donor eggs or sperm",
        "Multiple embryos can be frozen",
        "Controlled timing of pregnancy"
      ],
      requirements: [
        "Fertility evaluation completed",
        "Age under 42 (typically)",
        "Healthy uterus",
        "Partner sperm sample or donor"
      ]
    },
    {
      id: 4,
      name: "Heart Surgery",
      category: "Cardiology",
      price: 10000,
      originalPrice: 20000,
      savings: 10000,
      description: "Cardiac bypass surgery with ICU care and post-operative monitoring",
      duration: "3-6 hours surgery",
      successRate: "95-98%",
      recovery: "6-12 weeks",
      procedure: [
        "Pre-operative cardiac assessment",
        "General anesthesia",
        "Chest opening and heart-lung machine connection",
        "Bypass graft placement",
        "Heart restart and chest closure",
        "ICU monitoring and recovery"
      ],
      benefits: [
        "Improved blood flow to heart",
        "Relief from chest pain",
        "Reduced risk of heart attack",
        "Improved quality of life",
        "Increased life expectancy"
      ],
      requirements: [
        "Severe coronary artery disease",
        "Failed medication management",
        "Good lung function",
        "Commitment to lifestyle changes"
      ]
    },
    {
      id: 5,
      name: "Hip Replacement",
      category: "Orthopedics",
      price: 6500,
      originalPrice: 16250,
      savings: 9750,
      description: "Total hip replacement with advanced prosthetics and rehabilitation"
    },
    {
      id: 6,
      name: "Cataract Surgery",
      category: "Ophthalmology",
      price: 1200,
      originalPrice: 4000,
      savings: 2800,
      description: "Phacoemulsification with premium IOL implant for both eyes"
    },
    {
      id: 7,
      name: "Gastric Bypass",
      category: "Bariatric",
      price: 5500,
      originalPrice: 13750,
      savings: 8250,
      description: "Laparoscopic gastric bypass surgery with nutritional counseling"
    },
    {
      id: 8,
      name: "Spinal Fusion",
      category: "Neurosurgery",
      price: 8000,
      originalPrice: 20000,
      savings: 12000,
      description: "Minimally invasive spinal fusion with titanium implants"
    },
    {
      id: 9,
      name: "Breast Augmentation",
      category: "Cosmetic",
      price: 3000,
      originalPrice: 7500,
      savings: 4500,
      description: "Breast augmentation with FDA-approved silicone implants"
    },
    {
      id: 10,
      name: "Rhinoplasty",
      category: "Cosmetic",
      price: 2500,
      originalPrice: 6250,
      savings: 3750,
      description: "Nose reshaping surgery with computer imaging consultation"
    },
    {
      id: 11,
      name: "Liver Transplant",
      category: "Transplant",
      price: 35000,
      originalPrice: 87500,
      savings: 52500,
      description: "Complete liver transplant with donor matching and post-op care"
    },
    {
      id: 12,
      name: "Kidney Transplant",
      category: "Transplant",
      price: 30000,
      originalPrice: 75000,
      savings: 45000,
      description: "Kidney transplant surgery with immunosuppressive therapy"
    },
    {
      id: 13,
      name: "Prostate Surgery",
      category: "Urology",
      price: 4500,
      originalPrice: 11250,
      savings: 6750,
      description: "Robotic prostatectomy with nerve-sparing technique"
    },
    {
      id: 14,
      name: "Hysterectomy",
      category: "Gynecology",
      price: 3500,
      originalPrice: 8750,
      savings: 5250,
      description: "Laparoscopic hysterectomy with minimal scarring"
    },
    {
      id: 15,
      name: "Brain Tumor Surgery",
      category: "Neurosurgery",
      price: 12000,
      originalPrice: 30000,
      savings: 18000,
      description: "Advanced neurosurgery with neuro-navigation technology"
    },
    {
      id: 16,
      name: "Chemotherapy",
      category: "Oncology",
      price: 8000,
      originalPrice: 20000,
      savings: 12000,
      description: "Complete chemotherapy cycle with supportive care (per cycle)"
    }
  ];

  const handleToggleCart = (treatment: Treatment) => {
    if (isInCart(treatment.id)) {
      removeFromCart(treatment.id);
    } else {
      addToCart(treatment);
    }
  };

  const handleReadMore = (treatment: TreatmentWithDetails) => {
    setSelectedTreatment(treatment);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <Header />

      {/* Hero Header */}
      <div className="relative bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 text-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container relative px-6 py-20">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">World-Class Medical Care</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              All Treatments
            </h1>

            <p className="text-xl md:text-2xl text-teal-100 mb-8 leading-relaxed">
              Browse our comprehensive range of medical procedures with transparent pricing
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-teal-100 text-sm">Treatments</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold">60% OFF</div>
                  <div className="text-teal-100 text-sm">Average Savings</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </div>

      {/* Search Bar */}
      <div className="container px-6 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search treatments by name or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent text-base"
            />
          </div>
        </div>
      </div>

      {/* Treatments Grid */}
      <div className="container px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {treatments.filter(treatment =>
            treatment.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            treatment.category.toLowerCase().includes(searchQuery.toLowerCase())
          ).map((treatment) => {
            const inCart = isInCart(treatment.id);
            return (
              <Card
                key={treatment.id}
                className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 ${
                  inCart ? 'border-teal-600 bg-teal-50' : 'border-gray-200'
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <Badge className="bg-gray-900 hover:bg-gray-800 text-white">
                      {treatment.category}
                    </Badge>
                    <button
                      onClick={() => handleToggleCart(treatment)}
                      className={`p-2.5 rounded-full transition-all transform hover:scale-110 ${
                        inCart
                          ? 'bg-teal-600 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-600 hover:bg-teal-100 hover:text-teal-600'
                      }`}
                      title={inCart ? "Remove from cart" : "Add to cart"}
                    >
                      {inCart ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        <Stethoscope className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  <CardTitle className="text-xl mb-2">{treatment.name}</CardTitle>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {treatment.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="flex items-baseline gap-2 mb-1">
                      <p className="text-3xl font-bold text-teal-600">
                        ${treatment.price.toLocaleString()}
                      </p>
                    </div>
                    <p className="text-sm text-gray-500 line-through mb-2">
                      Original: ${treatment.originalPrice.toLocaleString()}
                    </p>
                    <Badge className="bg-green-600 hover:bg-green-700 text-white">
                      Save ${treatment.savings.toLocaleString()} ({Math.round((treatment.savings / treatment.originalPrice) * 100)}%)
                    </Badge>
                  </div>

                  {/* Read More Button */}
                  <Button
                    onClick={() => handleReadMore(treatment)}
                    variant="outline"
                    className="w-full border-teal-600 text-teal-600 hover:bg-teal-50 group"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  {inCart && (
                    <div className="bg-teal-100 text-teal-800 p-3 rounded-lg text-sm font-medium text-center">
                      ✓ Added to cart
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Treatment Details Modal */}
      {selectedTreatment && (
        <TreatmentDetailsModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          treatment={selectedTreatment}
        />
      )}
    </div>
  );
}

