import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Stethoscope, Check, ArrowRight, Clock, Award, TrendingUp, Users } from "lucide-react";
import { useCart, Treatment } from "../context/CartContext";
import { navigateTo } from "../utils/navigation";
import { TreatmentDetailsModal } from "./TreatmentDetailsModal";

interface TreatmentWithDetails extends Treatment {
  duration?: string;
  successRate?: string;
  recovery?: string;
  procedure?: string[];
  benefits?: string[];
  requirements?: string[];
}

export function TopTreatments() {
  const { addToCart, removeFromCart, isInCart } = useCart();
  const [selectedTreatment, setSelectedTreatment] = useState<TreatmentWithDetails | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        "Initial fertility assessment",
        "Ovarian stimulation with medications",
        "Regular monitoring with ultrasounds",
        "Egg retrieval procedure",
        "Fertilization in laboratory",
        "Embryo transfer to uterus"
      ],
      benefits: [
        "High success rates for conception",
        "Genetic screening available",
        "Multiple embryo options",
        "Controlled timing",
        "Expert medical supervision"
      ],
      requirements: [
        "Fertility evaluation completed",
        "Age under 42 (typically)",
        "Healthy uterus",
        "Partner sperm or donor sperm"
      ]
    },
    {
      id: 4,
      name: "Heart Surgery",
      category: "Cardiology",
      price: 10000,
      originalPrice: 20000,
      savings: 10000,
      description: "Cardiac bypass surgery with post-operative care and rehabilitation",
      duration: "3-6 hours surgery",
      successRate: "85-95%",
      recovery: "6-12 weeks",
      procedure: [
        "Pre-operative cardiac assessment",
        "General anesthesia administration",
        "Chest incision and heart-lung bypass",
        "Bypass graft placement",
        "Heart restart and closure",
        "ICU monitoring and recovery"
      ],
      benefits: [
        "Improved blood flow to heart",
        "Reduced chest pain",
        "Lower risk of heart attack",
        "Enhanced quality of life",
        "Increased life expectancy"
      ],
      requirements: [
        "Severe coronary artery disease",
        "Failed medication management",
        "Good overall health for surgery",
        "Non-smoker or willing to quit"
      ]
    },
  ];

  const handleToggleCart = (treatment: Treatment) => {
    if (isInCart(treatment.id)) {
      removeFromCart(treatment.id);
    } else {
      addToCart(treatment);
    }
  };

  return (
    <section id="treatments" className="py-20 bg-gray-50">
      <div className="container px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Top Treatments</h2>
          <p className="text-xl text-gray-600">Explore our most popular medical procedures</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {treatments.map((treatment) => {
            const inCart = isInCart(treatment.id);
            return (
              <Card
                key={treatment.id}
                className={`hover:shadow-xl transition-all hover:-translate-y-1 border-2 ${
                  inCart ? 'border-teal-600 bg-teal-50' : 'border-gray-200'
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge className="bg-gray-900 hover:bg-gray-800">{treatment.category}</Badge>
                    <button
                      onClick={() => handleToggleCart(treatment)}
                      className={`p-2 rounded-full transition-all ${
                        inCart
                          ? 'bg-teal-600 text-white'
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
                  <CardTitle className="text-lg">{treatment.name}</CardTitle>
                  <p className="text-sm text-gray-600 mt-2">{treatment.description}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex items-center gap-1 text-gray-600">
                      <Clock className="w-3 h-3" />
                      <span>{treatment.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                      <Award className="w-3 h-3" />
                      <span>{treatment.successRate}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                      <TrendingUp className="w-3 h-3" />
                      <span>{treatment.recovery}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                      <Users className="w-3 h-3" />
                      <span>Expert Care</span>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="pt-2 border-t border-gray-200">
                    <p className="text-3xl font-bold text-teal-600">
                      ${treatment.price.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-500 line-through">
                      ${treatment.originalPrice.toLocaleString()}
                    </p>
                    <Badge className="bg-green-600 hover:bg-green-700 mt-2">
                      Save ${treatment.savings.toLocaleString()}
                    </Badge>
                  </div>

                  {/* Read More Button */}
                  <Button
                    onClick={() => {
                      setSelectedTreatment(treatment);
                      setIsModalOpen(true);
                    }}
                    variant="outline"
                    className="w-full border-teal-600 text-teal-600 hover:bg-teal-50 mt-2"
                    size="sm"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* More Treatments Button */}
        <div className="text-center">
          <Button
            onClick={() => navigateTo('/treatments')}
            className="bg-white hover:bg-gray-50 text-teal-600 border-2 border-teal-600 px-8 py-6 text-base group"
            size="lg"
          >
            More Treatments
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
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
    </section>
  );
}

