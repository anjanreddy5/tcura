import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Star, MapPin, Phone, Award, Building2, Users, Heart, Activity, Sparkles, Search } from "lucide-react";
import { ContactHospitalModal } from "../components/ContactHospitalModal";
import { Header } from "../components/Header";

interface Hospital {
  id: number;
  name: string;
  location: string;
  rating: number;
  specialties: string[];
  image: string;
  beds: number;
  doctors: number;
  accreditation: string[];
  description: string;
}

export function HospitalsPage() {
  const [selectedHospital, setSelectedHospital] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const hospitals: Hospital[] = [
    {
      id: 1,
      name: "Bangkok International Hospital",
      location: "Bangkok, Thailand",
      rating: 4.9,
      specialties: ["Cardiology", "Orthopedics", "Neurology"],
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop",
      beds: 500,
      doctors: 200,
      accreditation: ["JCI", "ISO 9001"],
      description: "Leading international hospital with state-of-the-art facilities and world-class medical care."
    },
    {
      id: 2,
      name: "Apollo Hospital",
      location: "New Delhi, India",
      rating: 4.8,
      specialties: ["Oncology", "Neurology", "Cardiology", "Transplant"],
      image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=600&h=400&fit=crop",
      beds: 700,
      doctors: 350,
      accreditation: ["JCI", "NABH", "NABL"],
      description: "India's premier healthcare institution with cutting-edge technology and expert medical professionals."
    },
    {
      id: 3,
      name: "Bumrungrad Hospital",
      location: "Bangkok, Thailand",
      rating: 4.9,
      specialties: ["Cosmetic", "Dentistry", "Fertility", "Wellness"],
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&h=400&fit=crop",
      beds: 580,
      doctors: 250,
      accreditation: ["JCI", "ISO 14001"],
      description: "Southeast Asia's leading medical tourism destination with comprehensive healthcare services."
    },
    {
      id: 4,
      name: "Fortis Hospital",
      location: "Mumbai, India",
      rating: 4.7,
      specialties: ["Fertility", "Transplant", "Oncology"],
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&h=400&fit=crop",
      beds: 450,
      doctors: 180,
      accreditation: ["NABH", "NABL"],
      description: "Renowned for organ transplants and advanced fertility treatments with high success rates."
    },
    {
      id: 5,
      name: "Max Super Specialty Hospital",
      location: "New Delhi, India",
      rating: 4.8,
      specialties: ["Cardiology", "Neurology", "Orthopedics", "Gastroenterology"],
      image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=600&h=400&fit=crop",
      beds: 650,
      doctors: 300,
      accreditation: ["NABH", "JCI", "NABL"],
      description: "Multi-specialty hospital known for cardiac care and minimally invasive surgeries."
    },
    {
      id: 6,
      name: "Medanta - The Medicity",
      location: "Gurugram, India",
      rating: 4.9,
      specialties: ["Cardiology", "Neurology", "Oncology", "Transplant"],
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&h=400&fit=crop",
      beds: 1250,
      doctors: 800,
      accreditation: ["NABH", "NABL", "JCI"],
      description: "One of India's largest multi-specialty hospitals with comprehensive medical services."
    },
    {
      id: 7,
      name: "Samitivej Hospital",
      location: "Bangkok, Thailand",
      rating: 4.7,
      specialties: ["Pediatrics", "Maternity", "Cardiology"],
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop",
      beds: 400,
      doctors: 150,
      accreditation: ["JCI", "ISO 9001"],
      description: "Specialized in women and children's healthcare with family-friendly facilities."
    },
    {
      id: 8,
      name: "Kokilaben Dhirubhai Ambani Hospital",
      location: "Mumbai, India",
      rating: 4.8,
      specialties: ["Oncology", "Neurology", "Cardiology", "Orthopedics"],
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&h=400&fit=crop",
      beds: 750,
      doctors: 400,
      accreditation: ["NABH", "NABL"],
      description: "Advanced tertiary care hospital with robotic surgery and precision medicine."
    }
  ];

  const handleContactHospital = (hospitalName: string) => {
    setSelectedHospital(hospitalName);
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
              <span className="text-sm font-medium">International Accreditation</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Top Hospitals
            </h1>

            <p className="text-xl md:text-2xl text-teal-100 mb-8 leading-relaxed">
              World-class medical facilities with international accreditation
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold">100+</div>
                  <div className="text-teal-100 text-sm">Partner Hospitals</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold">JCI</div>
                  <div className="text-teal-100 text-sm">Accredited</div>
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
              placeholder="Search hospitals by name, location, or specialty..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent text-base"
            />
          </div>
        </div>
      </div>

      {/* Hospitals Grid */}
      <div className="container px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hospitals.filter(hospital =>
            hospital.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            hospital.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
            hospital.specialties.some(specialty => specialty.toLowerCase().includes(searchQuery.toLowerCase()))
          ).map((hospital) => (
            <Card
              key={hospital.id}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-gray-200"
            >
              {/* Hospital Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={hospital.image}
                  alt={hospital.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="font-bold text-gray-900">{hospital.rating}</span>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{hospital.name}</CardTitle>
                <p className="text-sm text-gray-600 flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {hospital.location}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Description */}
                <p className="text-sm text-gray-600">{hospital.description}</p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-teal-50 p-3 rounded-lg">
                    <div className="flex items-center gap-2 text-teal-700">
                      <Building2 className="w-4 h-4" />
                      <span className="text-xs font-medium">Beds</span>
                    </div>
                    <p className="text-lg font-bold text-teal-900 mt-1">{hospital.beds}+</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="flex items-center gap-2 text-blue-700">
                      <Users className="w-4 h-4" />
                      <span className="text-xs font-medium">Doctors</span>
                    </div>
                    <p className="text-lg font-bold text-blue-900 mt-1">{hospital.doctors}+</p>
                  </div>
                </div>

                {/* Specialties */}
                <div>
                  <p className="text-xs font-semibold text-gray-700 mb-2">Specialties:</p>
                  <div className="flex flex-wrap gap-2">
                    {hospital.specialties.map((specialty) => (
                      <Badge key={specialty} variant="secondary" className="bg-gray-100 text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Accreditation */}
                <div>
                  <p className="text-xs font-semibold text-gray-700 mb-2 flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    Accreditation:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {hospital.accreditation.map((acc) => (
                      <Badge key={acc} className="bg-green-600 hover:bg-green-700 text-xs">
                        {acc}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Contact Button */}
                <Button
                  onClick={() => handleContactHospital(hospital.name)}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Hospital
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Contact Hospital Modal */}
      {selectedHospital && (
        <ContactHospitalModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          hospitalName={selectedHospital}
        />
      )}
    </div>
  );
}

