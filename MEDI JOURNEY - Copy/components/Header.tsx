import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Heart, Phone, ShoppingCart, User, LogOut, UserCircle } from "lucide-react";
import { useCart } from "../context/CartContext";
import { CartModal } from "./CartModal";
import { navigateTo } from "../utils/navigation";
import { AuthPage } from "../pages/AuthPage";

interface UserData {
  name: string;
  email: string;
  phone?: string;
}

export function Header() {
  const { cartItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [user, setUser] = useState<UserData | null>(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }

    // Listen for login/logout events
    const handleLogin = () => {
      const userData = localStorage.getItem('user');
      if (userData) {
        setUser(JSON.parse(userData));
      }
    };

    const handleLogout = () => {
      setUser(null);
    };

    window.addEventListener('userLogin', handleLogin);
    window.addEventListener('userLogout', handleLogout);

    return () => {
      window.removeEventListener('userLogin', handleLogin);
      window.removeEventListener('userLogout', handleLogout);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setShowProfileMenu(false);
    window.dispatchEvent(new Event('userLogout'));
  };

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith('/')) {
      e.preventDefault();
      navigateTo(path);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
        <div className="container flex h-16 items-center justify-between px-6">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigateTo('/')}>
            <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
              <Heart className="w-7 h-7 text-white fill-white" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold leading-none">
                <span className="text-gray-900">Medi</span>
                <span className="text-teal-600">Journey</span>
              </h1>
              <span className="text-xs text-gray-500">Your Path to Healing</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a
              href="/treatments"
              onClick={(e) => handleNavigation(e, '/treatments')}
              className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
            >
              Treatments
            </a>
            <a
              href="/hospitals"
              onClick={(e) => handleNavigation(e, '/hospitals')}
              className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
            >
              Hospitals
            </a>
            <a
              href="/doctors"
              onClick={(e) => handleNavigation(e, '/doctors')}
              className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
            >
              Doctors
            </a>
            <a
              href="/about"
              onClick={(e) => handleNavigation(e, '/about')}
              className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
            >
              About
            </a>
            <a
              href="/contact"
              onClick={(e) => handleNavigation(e, '/contact')}
              className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <a href="tel:+918000123456" className="hidden md:flex items-center gap-2 text-sm text-gray-700 hover:text-teal-600 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-medium">+91 8000 123 456</span>
            </a>
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-teal-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Button>

            {user ? (
              <div className="relative">
                <Button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-4 shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                >
                  <UserCircle className="w-5 h-5" />
                  <span className="hidden md:inline">{user.name}</span>
                </Button>

                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                    <button
                      onClick={() => {
                        navigateTo('/profile');
                        setShowProfileMenu(false);
                      }}
                      className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 flex items-center gap-2"
                    >
                      <User className="w-4 h-4" />
                      My Profile
                    </button>
                    <button
                      onClick={handleLogout}
                      className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Button
                onClick={() => setIsAuthOpen(true)}
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 shadow-md hover:shadow-lg transition-all"
              >
                Get Started
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Cart Modal */}
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Auth Modal */}
      {isAuthOpen && <AuthPage onClose={() => setIsAuthOpen(false)} />}
    </>
  );
}

