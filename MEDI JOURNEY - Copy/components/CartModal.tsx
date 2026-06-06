import { X, Trash2, ShoppingCart, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useCart } from "../context/CartContext";
import { Badge } from "./ui/badge";
import { navigateTo } from "../utils/navigation";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartModal({ isOpen, onClose }: CartModalProps) {
  const { cartItems, removeFromCart, getTotalPrice, getTotalSavings } = useCart();

  if (!isOpen) return null;

  const handleCheckout = () => {
    navigateTo('/checkout');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShoppingCart className="w-6 h-6" />
              <div>
                <h2 className="text-2xl font-bold">My Treatments</h2>
                <p className="text-teal-100 text-sm">
                  {cartItems.length} {cartItems.length === 1 ? 'treatment' : 'treatments'} selected
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Your cart is empty</h3>
              <p className="text-gray-600">Add treatments to get started with your medical journey</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-50 rounded-xl p-4 flex items-start justify-between gap-4 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900">{item.name}</h3>
                        <Badge className="mt-1 bg-gray-700">{item.category}</Badge>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="text-2xl font-bold text-teal-600">${item.price.toLocaleString()}</p>
                        <p className="text-xs text-gray-500 line-through">${item.originalPrice.toLocaleString()}</p>
                      </div>
                      <Badge className="bg-green-600 hover:bg-green-700">
                        Save ${item.savings.toLocaleString()}
                      </Badge>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors"
                    title="Remove from cart"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer with Price Summary */}
        {cartItems.length > 0 && (
          <div className="border-t border-gray-200 p-6 bg-gray-50">
            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span className="font-semibold">${getTotalPrice().toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>Total Savings</span>
                <span className="font-semibold">-${getTotalSavings().toLocaleString()}</span>
              </div>
              <div className="border-t border-gray-300 pt-3 flex justify-between text-lg font-bold text-gray-900">
                <span>Total</span>
                <span className="text-teal-600">${getTotalPrice().toLocaleString()}</span>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button
                onClick={onClose}
                variant="outline"
                className="flex-1"
              >
                Continue Shopping
              </Button>
              <Button
                onClick={handleCheckout}
                className="flex-1 bg-teal-600 hover:bg-teal-700 text-white"
              >
                Pay Advance
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

