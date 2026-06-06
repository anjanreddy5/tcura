import { Card, CardContent } from "./ui/card";

export function Testimonials() {
  const testimonials = [
    {
      name: "John Smith",
      country: "USA",
      treatment: "Dental Implants",
      text: "Amazing experience! The quality of care was exceptional and I saved thousands of dollars.",
    },
    {
      name: "Emma Wilson",
      country: "UK",
      treatment: "Knee Replacement",
      text: "Professional staff, modern facilities, and excellent results. Highly recommended!",
    },
    {
      name: "Michael Brown",
      country: "Canada",
      treatment: "IVF Treatment",
      text: "The doctors were caring and knowledgeable. We're now proud parents thanks to them!",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Patient Testimonials</h2>
          <p className="text-xl text-gray-600">Hear from our satisfied patients</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.country} • {testimonial.treatment}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

