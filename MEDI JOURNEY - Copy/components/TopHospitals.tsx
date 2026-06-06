import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Star, MapPin, Phone, ArrowRight, Building2, Users, Award } from "lucide-react";
import { ContactHospitalModal } from "./ContactHospitalModal";
import { navigateTo } from "../utils/navigation";

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

export function TopHospitals() {
  const [selectedHospital, setSelectedHospital] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      specialties: ["Oncology", "Neurology", "Cardiology"],
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
      specialties: ["Cosmetic", "Dentistry", "Fertility"],
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
  ];

  const handleContactHospital = (hospitalName: string) => {
    setSelectedHospital(hospitalName);
    setIsModalOpen(true);
  };

  return (
    <section id="hospitals" className="py-20 bg-white">
      <div className="container px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Top Hospitals</h2>
          <p className="text-xl text-gray-600">World-class medical facilities at your fingertips</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {hospitals.map((hospital) => (
            <Card key={hospital.id} className="hover:shadow-xl transition-all hover:-translate-y-1 border-gray-200 overflow-hidden">
              {/* Hospital Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={hospital.image}
                  alt={hospital.name}
                  className="w-full h-full object-cover transition-transform hover:scale-110 duration-300"
                />
                <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="font-bold text-sm">{hospital.rating}</span>
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{hospital.name}</CardTitle>
                <p className="text-sm text-gray-600 flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {hospital.location}
                </p>
              </CardHeader>

              <CardContent className="space-y-3">
                {/* Hospital Stats */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-1 text-gray-600">
                    <Building2 className="w-3 h-3" />
                    <span>{hospital.beds} Beds</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <Users className="w-3 h-3" />
                    <span>{hospital.doctors}+ Doctors</span>
                  </div>
                </div>

                {/* Accreditation */}
                <div className="flex items-center gap-1 text-xs">
                  <Award className="w-3 h-3 text-teal-600" />
                  <span className="text-gray-600">{hospital.accreditation.join(", ")}</span>
                </div>

                {/* Specialties */}
                <div className="flex flex-wrap gap-2">
                  {hospital.specialties.slice(0, 3).map((specialty) => (
                    <Badge key={specialty} variant="secondary" className="bg-gray-100 text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>

                {/* Description */}
                <p className="text-xs text-gray-600 line-clamp-2">{hospital.description}</p>

                {/* Contact Button */}
                <Button
                  onClick={() => handleContactHospital(hospital.name)}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white mt-2"
                  size="sm"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Hospital
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Find More Button */}
        <div className="text-center">
          <Button
            onClick={() => navigateTo('/hospitals')}
            className="bg-white hover:bg-gray-50 text-teal-600 border-2 border-teal-600 px-8 py-6 text-base group"
            size="lg"
          >
            Find More Hospitals
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
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
    </section>
  );
}

