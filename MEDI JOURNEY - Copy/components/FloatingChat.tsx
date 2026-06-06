import { useState } from "react";
import { Button } from "./ui/button";
import { MessageCircle, X } from "lucide-react";

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount] = useState(1);

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-teal-600 to-teal-700 p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Chat with us</h3>
                  <p className="text-xs text-teal-100">We typically reply in minutes</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="p-4 h-64 overflow-y-auto bg-gray-50">
            <div className="space-y-3">
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  MJ
                </div>
                <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[80%]">
                  <p className="text-sm text-gray-800">
                    Hello! 👋 How can we help you with your medical journey today?
                  </p>
                  <span className="text-xs text-gray-400 mt-1 block">Just now</span>
                </div>
              </div>
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent text-sm"
              />
              <Button className="bg-teal-600 hover:bg-teal-700 px-4">
                Send
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          onClick={() => setIsOpen(!isOpen)}
          data-chat-button
          className="relative rounded-full w-16 h-16 bg-teal-600 hover:bg-teal-700 shadow-2xl hover:shadow-3xl transition-all hover:scale-110 group"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <>
              <MessageCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-pulse">
                  {unreadCount}
                </span>
              )}
            </>
          )}
        </Button>
      </div>
    </>
  );
}

