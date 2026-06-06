import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Calendar, Award, GraduationCap, MapPin, Star, Users, Sparkles, Search } from "lucide-react";
import { BookConsultationModal } from "../components/BookConsultationModal";
import { Header } from "../components/Header";

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  experience: string;
  hospital: string;
  image: string;
  rating: number;
  education: string;
  languages: string[];
  consultationFee: string;
  about: string;
}

export function DoctorsPage() {
  const [selectedDoctor, setSelectedDoctor] = useState<{ name: string; specialty: string } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const doctors: Doctor[] = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      experience: "15+ years",
      hospital: "Bangkok International Hospital",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
      rating: 4.9,
      education: "MD, DM Cardiology - Harvard Medical School",
      languages: ["English", "Hindi", "Thai"],
      consultationFee: "$150",
      about: "Specialized in interventional cardiology with expertise in complex cardiac procedures. Published over 50 research papers."
    },
    {
      id: 2,
      name: "Dr. Raj Patel",
      specialty: "Orthopedic Surgeon",
      experience: "20+ years",
      hospital: "Apollo Hospital, New Delhi",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
      rating: 4.8,
      education: "MS Orthopedics - AIIMS, Fellowship in Joint Replacement",
      languages: ["English", "Hindi", "Gujarati"],
      consultationFee: "$120",
      about: "Expert in joint replacement surgeries and sports medicine. Performed over 5000 successful surgeries."
    },
    {
      id: 3,
      name: "Dr. Maria Garcia",
      specialty: "Fertility Specialist",
      experience: "12+ years",
      hospital: "Bumrungrad Hospital, Bangkok",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
      rating: 4.9,
      education: "MD, DNB - IVF & Reproductive Medicine",
      languages: ["English", "Spanish", "Thai"],
      consultationFee: "$180",
      about: "Renowned IVF specialist with high success rates. Helped over 2000 couples achieve parenthood."
    },
    {
      id: 4,
      name: "Dr. James Chen",
      specialty: "Neurosurgeon",
      experience: "18+ years",
      hospital: "Fortis Hospital, Mumbai",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop",
      rating: 4.7,
      education: "MCh Neurosurgery - Johns Hopkins University",
      languages: ["English", "Mandarin", "Hindi"],
      consultationFee: "$200",
      about: "Specialist in minimally invasive brain and spine surgeries. Pioneer in robotic neurosurgery in India."
    },
    {
      id: 5,
      name: "Dr. Priya Sharma",
      specialty: "Oncologist",
      experience: "14+ years",
      hospital: "Tata Memorial Hospital, Mumbai",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      rating: 4.8,
      education: "MD Oncology, DM Medical Oncology - AIIMS",
      languages: ["English", "Hindi", "Marathi"],
      consultationFee: "$160",
      about: "Expert in cancer treatment with focus on personalized medicine and immunotherapy."
    },
    {
      id: 6,
      name: "Dr. Ahmed Khan",
      specialty: "Gastroenterologist",
      experience: "16+ years",
      hospital: "Max Super Specialty Hospital, Delhi",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop",
      rating: 4.6,
      education: "DM Gastroenterology - PGI Chandigarh",
      languages: ["English", "Hindi", "Urdu"],
      consultationFee: "$130",
      about: "Specialized in advanced endoscopy and liver diseases. Performed over 10,000 endoscopic procedures."
    },
    {
      id: 7,
      name: "Dr. Lisa Wong",
      specialty: "Dermatologist",
      experience: "10+ years",
      hospital: "Bumrungrad Hospital, Bangkok",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop",
      rating: 4.9,
      education: "MD Dermatology - Stanford University",
      languages: ["English", "Thai", "Mandarin"],
      consultationFee: "$140",
      about: "Expert in cosmetic dermatology and laser treatments. Certified in advanced aesthetic procedures."
    },
    {
      id: 8,
      name: "Dr. Vikram Singh",
      specialty: "Urologist",
      experience: "19+ years",
      hospital: "Apollo Hospital, Chennai",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop",
      rating: 4.7,
      education: "MCh Urology - AIIMS, Fellowship in Robotic Surgery",
      languages: ["English", "Hindi", "Tamil"],
      consultationFee: "$145",
      about: "Pioneer in robotic urological surgeries. Specialized in kidney transplants and prostate treatments."
    }
  ];

  const handleBookConsultation = (doctor: Doctor) => {
    setSelectedDoctor({ name: doctor.name, specialty: doctor.specialty });
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
              <span className="text-sm font-medium">Expert Medical Professionals</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Our Expert Doctors
            </h1>

            <p className="text-xl md:text-2xl text-teal-100 mb-8 leading-relaxed">
              Connect with world-class medical professionals across specialties
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-teal-100 text-sm">Expert Doctors</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold">20+</div>
                  <div className="text-teal-100 text-sm">Specialties</div>
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
              placeholder="Search doctors by name, specialty, or hospital..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent text-base"
            />
          </div>
        </div>
      </div>

      {/* Doctors Grid */}
      <div className="container px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {doctors.filter(doctor =>
            doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
            doctor.hospital.toLowerCase().includes(searchQuery.toLowerCase())
          ).map((doctor) => (
            <Card
              key={doctor.id}
              className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-gray-200 group"
              onMouseEnter={() => setHoveredCard(doctor.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Front Side - Basic Info */}
              <div className={`transition-opacity duration-300 ${hoveredCard === doctor.id ? 'opacity-0' : 'opacity-100'}`}>
                <CardHeader className="pb-4">
                  <div className="relative w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden ring-4 ring-teal-100">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl text-center">{doctor.name}</CardTitle>
                  <Badge className="w-fit mx-auto bg-gray-900 hover:bg-gray-800 text-white">
                    {doctor.specialty}
                  </Badge>
                </CardHeader>
                <CardContent className="text-center space-y-2">
                  <div className="flex items-center justify-center gap-1 text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="font-semibold">{doctor.rating}</span>
                  </div>
                  <p className="text-sm text-gray-600">{doctor.experience} experience</p>
                  <p className="text-sm text-gray-500 flex items-center justify-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {doctor.hospital}
                  </p>
                </CardContent>
              </div>

              {/* Back Side - Detailed Info */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-teal-600 to-teal-700 text-white p-6 transition-opacity duration-300 ${
                  hoveredCard === doctor.id ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <div className="h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="font-bold text-lg">{doctor.name}</h3>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <GraduationCap className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <p className="text-teal-50">{doctor.education}</p>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <Award className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <p className="text-teal-50">{doctor.about}</p>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mt-2">
                        {doctor.languages.map((lang) => (
                          <span
                            key={lang}
                            className="px-2 py-1 bg-white/20 rounded-full text-xs"
                          >
                            {lang}
                          </span>
                        ))}
                      </div>
                      
                      <div className="pt-2 border-t border-white/20">
                        <p className="text-lg font-bold">Consultation Fee: {doctor.consultationFee}</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button
                    onClick={() => handleBookConsultation(doctor)}
                    className="w-full bg-white text-teal-600 hover:bg-teal-50 mt-4"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Consultation
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Book Consultation Modal */}
      {selectedDoctor && (
        <BookConsultationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          doctorName={selectedDoctor.name}
          doctorSpecialty={selectedDoctor.specialty}
        />
      )}
    </div>
  );
}

