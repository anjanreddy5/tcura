import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { BookConsultationModal } from "./BookConsultationModal";
import { navigateTo } from "../utils/navigation";

export function FeaturedDoctors() {
  const [selectedDoctor, setSelectedDoctor] = useState<{ name: string; specialty: string } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      experience: "15+ years",
      hospital: "Bangkok International",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop"
    },
    {
      name: "Dr. Raj Patel",
      specialty: "Orthopedic Surgeon",
      experience: "20+ years",
      hospital: "Apollo Hospital",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop"
    },
    {
      name: "Dr. Maria Garcia",
      specialty: "Fertility Specialist",
      experience: "12+ years",
      hospital: "Bumrungrad Hospital",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&h=200&fit=crop"
    },
    {
      name: "Dr. James Chen",
      specialty: "Neurosurgeon",
      experience: "18+ years",
      hospital: "Fortis Hospital",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&h=200&fit=crop"
    },
  ];

  const handleBookConsultation = (doctor: { name: string; specialty: string }) => {
    setSelectedDoctor(doctor);
    setIsModalOpen(true);
  };

  return (
    <section id="doctors" className="py-20 bg-gray-50">
      <div className="container px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Doctors</h2>
          <p className="text-xl text-gray-600">Meet our experienced medical professionals</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {doctors.map((doctor) => (
            <Card key={doctor.name} className="hover:shadow-xl transition-all hover:-translate-y-1 border-gray-200">
              <CardHeader>
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-teal-100 to-teal-200 mx-auto mb-4 overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-lg text-center">{doctor.name}</CardTitle>
                <Badge className="w-fit mx-auto bg-gray-900 hover:bg-gray-800">{doctor.specialty}</Badge>
              </CardHeader>
              <CardContent className="text-center space-y-3">
                <p className="text-sm text-gray-600 mb-1">{doctor.experience} experience</p>
                <p className="text-sm text-gray-500">{doctor.hospital}</p>
                <Button
                  onClick={() => handleBookConsultation(doctor)}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white mt-3"
                  size="sm"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Consultation
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center">
          <Button
            onClick={() => navigateTo('/doctors')}
            className="bg-white hover:bg-gray-50 text-teal-600 border-2 border-teal-600 px-8 py-6 text-base group"
            size="lg"
          >
            See More Doctors
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
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
    </section>
  );
}

