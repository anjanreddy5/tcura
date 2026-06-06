import { Button } from "./ui/button";
import { Search, ArrowRight, TrendingUp } from "lucide-react";
import { navigateTo } from "../utils/navigation";

export function HeroSection() {
  const handleFindTreatment = () => {
    navigateTo('/treatments');
  };

  const handleTalkToCoordinator = () => {
    // Trigger the floating chat
    const chatButton = document.querySelector('[data-chat-button]') as HTMLButtonElement;
    if (chatButton) {
      chatButton.click();
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-teal-50 py-16 md:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-medium border border-teal-200">
              <TrendingUp className="w-4 h-4" />
              <span>Trusted by thousands from Nigeria, South Africa, Kenya & beyond</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Affordable World-Class Medical Care in India
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Connect with top-rated hospitals and specialist doctors in India. Save up to 60-80% on medical treatments without compromising on quality.
            </p>

            {/* Trust Badge */}
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100 w-fit">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 border-2 border-white flex items-center justify-center text-white font-bold text-sm">
                  NG
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white flex items-center justify-center text-white font-bold text-sm">
                  ZA
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-white flex items-center justify-center text-white font-bold text-sm">
                  KE
                </div>
              </div>
              <div className="text-sm">
                <p className="font-semibold text-gray-900">Trusted by thousands from</p>
                <p className="text-gray-600">Nigeria, South Africa, Kenya & beyond</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all group"
                onClick={handleFindTreatment}
              >
                <Search className="w-5 h-5 mr-2" />
                Find Your Treatment
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 hover:border-teal-600 hover:text-teal-600 px-8 py-6 text-base group"
                onClick={handleTalkToCoordinator}
              >
                Talk to a Coordinator
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Content - Doctor Image with Stats */}
          <div className="relative">
            {/* Stats Cards */}
            <div className="relative">
              {/* Doctor Image Placeholder */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&h=900&fit=crop"
                  alt="Expert Doctor"
                  className="w-full h-[500px] object-cover"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Stat Card 1 - Expert Doctors */}
              <div className="absolute top-8 -left-4 bg-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:scale-105 transition-transform">
                <div className="text-5xl font-bold text-teal-600 mb-1">500+</div>
                <div className="text-sm font-medium text-gray-600">Expert Doctors</div>
              </div>

              {/* Stat Card 2 - Happy Patients */}
              <div className="absolute bottom-8 -left-4 bg-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:scale-105 transition-transform">
                <div className="text-5xl font-bold text-teal-600 mb-1">10,000+</div>
                <div className="text-sm font-medium text-gray-600">Happy Patients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

