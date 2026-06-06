import { X, Clock, Users, Award, CheckCircle, Info, Check } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useCart } from "../context/CartContext";

interface TreatmentDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  treatment: {
    id: number;
    name: string;
    category: string;
    price: number;
    originalPrice: number;
    savings: number;
    description: string;
    duration?: string;
    successRate?: string;
    recovery?: string;
    procedure?: string[];
    benefits?: string[];
    requirements?: string[];
  };
}

export function TreatmentDetailsModal({ isOpen, onClose, treatment }: TreatmentDetailsModalProps) {
  const { addToCart, isInCart } = useCart();
  const inCart = isInCart(treatment.id);

  const handleAddToCart = () => {
    addToCart(treatment);
    // Optional: close modal after adding to cart
    setTimeout(() => {
      onClose();
    }, 500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-teal-600 to-teal-700 text-white p-6 rounded-t-2xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="pr-12">
            <Badge className="bg-white/20 text-white mb-3">{treatment.category}</Badge>
            <h2 className="text-3xl font-bold mb-2">{treatment.name}</h2>
            <p className="text-teal-100">{treatment.description}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Pricing */}
          <div className="bg-teal-50 rounded-xl p-6 border-2 border-teal-200">
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-4xl font-bold text-teal-600">
                ${treatment.price.toLocaleString()}
              </span>
              <span className="text-xl text-gray-400 line-through">
                ${treatment.originalPrice.toLocaleString()}
              </span>
            </div>
            <Badge className="bg-green-500 text-white">
              Save ${treatment.savings.toLocaleString()} ({Math.round((treatment.savings / treatment.originalPrice) * 100)}% OFF)
            </Badge>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4">
            {treatment.duration && (
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Clock className="w-6 h-6 text-teal-600 mx-auto mb-2" />
                <div className="text-sm text-gray-600">Duration</div>
                <div className="font-semibold text-gray-900">{treatment.duration}</div>
              </div>
            )}
            {treatment.successRate && (
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Award className="w-6 h-6 text-teal-600 mx-auto mb-2" />
                <div className="text-sm text-gray-600">Success Rate</div>
                <div className="font-semibold text-gray-900">{treatment.successRate}</div>
              </div>
            )}
            {treatment.recovery && (
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Users className="w-6 h-6 text-teal-600 mx-auto mb-2" />
                <div className="text-sm text-gray-600">Recovery</div>
                <div className="font-semibold text-gray-900">{treatment.recovery}</div>
              </div>
            )}
          </div>

          {/* Procedure Steps */}
          {treatment.procedure && treatment.procedure.length > 0 && (
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Info className="w-5 h-5 text-teal-600" />
                Procedure Overview
              </h3>
              <ol className="space-y-2">
                {treatment.procedure.map((step, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    <span className="text-gray-700 pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Benefits */}
          {treatment.benefits && treatment.benefits.length > 0 && (
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-teal-600" />
                Key Benefits
              </h3>
              <ul className="space-y-2">
                {treatment.benefits.map((benefit, index) => (
                  <li key={index} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Requirements */}
          {treatment.requirements && treatment.requirements.length > 0 && (
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pre-Treatment Requirements</h3>
              <ul className="space-y-2">
                {treatment.requirements.map((req, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-teal-600">•</span>
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA */}
          <div className="pt-4 border-t">
            <Button
              className={`w-full py-6 text-lg transition-all ${
                inCart
                  ? 'bg-green-600 hover:bg-green-700 text-white'
                  : 'bg-teal-600 hover:bg-teal-700 text-white'
              }`}
              onClick={handleAddToCart}
              disabled={inCart}
            >
              {inCart ? (
                <>
                  <Check className="w-5 h-5 mr-2" />
                  Added to My Treatments
                </>
              ) : (
                'Add to My Treatments'
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

