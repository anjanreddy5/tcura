import { Header } from "../components/Header";
import { Card, CardContent } from "../components/ui/card";
import { Heart, Users, Award, Globe, Target, Shield, Sparkles, TrendingUp } from "lucide-react";

export function AboutPage() {
  const stats = [
    { icon: Users, label: "Happy Patients", value: "10,000+" },
    { icon: Award, label: "Expert Doctors", value: "500+" },
    { icon: Globe, label: "Countries Served", value: "50+" },
    { icon: Heart, label: "Success Rate", value: "95%" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "We put your health and well-being at the center of everything we do, ensuring personalized treatment plans."
    },
    {
      icon: Shield,
      title: "Quality & Safety",
      description: "All our partner hospitals are internationally accredited with the highest standards of medical care."
    },
    {
      icon: TrendingUp,
      title: "Affordable Excellence",
      description: "Access world-class medical treatments at prices up to 70% lower than in Western countries."
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Connected with top-tier hospitals and specialists across Asia, offering comprehensive medical solutions."
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Header */}
      <div className="relative bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container relative px-6 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">About Us</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Trusted Partner in Medical Tourism
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed max-w-3xl">
              Connecting patients worldwide with affordable, world-class healthcare
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full mb-3">
                    <stat.icon className="w-7 h-7" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm md:text-base text-white/90 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </div>

      {/* Our Story */}
      <div className="container px-6 py-16 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-justify">
              <p className="text-base">
                MediJourney was founded with a simple yet powerful vision: to make world-class healthcare accessible and affordable to everyone, regardless of their location or financial situation.
              </p>
              <p className="text-base">
                We recognized that millions of people around the world were struggling to access quality medical care due to high costs, long waiting times, or lack of specialized facilities in their home countries.
              </p>
              <p className="text-base">
                Today, we've helped over 10,000 patients from 50+ countries receive life-changing medical treatments at top-tier hospitals across Asia, saving them an average of 60% on medical costs while maintaining the highest standards of care.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop"
              alt="Medical team"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-teal-600 text-white p-6 rounded-xl shadow-xl">
              <div className="text-3xl font-bold">10+ Years</div>
              <div className="text-sm text-teal-100">of Excellence</div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-teal-600 transition-all hover:shadow-xl">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <value.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Our Mission */}
        <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-3xl p-12 text-center mb-20">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-600 rounded-full mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              To democratize access to world-class healthcare by connecting patients with the best medical facilities and specialists globally, while ensuring affordability, transparency, and exceptional care throughout their medical journey.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Why Choose MediJourney?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Your health deserves the best</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Accredited Hospitals</h3>
              <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                All our partner hospitals are internationally accredited (JCI, NABH) ensuring the highest quality standards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Expert Coordinators</h3>
              <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                Dedicated medical coordinators guide you through every step of your treatment journey.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Transparent Pricing</h3>
              <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                No hidden costs. Clear pricing with detailed breakdowns before you commit to treatment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

