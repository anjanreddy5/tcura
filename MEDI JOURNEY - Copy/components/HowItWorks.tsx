import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Choose Your Treatment",
      description: "Browse our extensive catalog of medical treatments and procedures.",
    },
    {
      number: "2",
      title: "Select a Hospital",
      description: "Compare top-rated hospitals and their facilities worldwide.",
    },
    {
      number: "3",
      title: "Book Consultation",
      description: "Connect with experienced doctors for personalized care plans.",
    },
    {
      number: "4",
      title: "Start Your Journey",
      description: "We handle all logistics for a seamless medical tourism experience.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">Your path to quality healthcare in 4 simple steps</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <Card key={step.number} className="text-center">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

