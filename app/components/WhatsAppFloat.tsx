"use client";

import { useEffect, useState } from "react";
import { FloatingWhatsApp } from "@digicroz/react-floating-whatsapp";

export default function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* WhatsApp Floating Widget */}

      <div
        className={`
          carpeight-whatsapp-wrapper
          fixed
          bottom-6
          right-5
          z-[9999]
          sm:bottom-8
          sm:right-8
          transition-all
          duration-500
          ease-out
          ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-8 opacity-0"
          }
        `}
        aria-hidden={!isVisible}
        style={{
          visibility: isVisible ? "visible" : "hidden",
        }}
      >
        <FloatingWhatsApp
          phoneNumber="919074418989"
          accountName="CARPEIGHT"
          statusMessage="Typically replies within 1 hour"
          chatMessage="Hello! 👋 Welcome to CARPEIGHT. How can we help you plan your next journey?"
          placeholder="Type your message..."
          messageDelay={1}
          darkMode={false}
          openChatOnClick={true}
          allowClickAway={false}
          allowEsc={true}
          allowDefaultSubmit={true}
          notification={false}
          notificationSound={false}
          className="carpeight-whatsapp-widget"
          buttonStyle={{
            backgroundColor: "#25D366",
            borderRadius: "50%",
            boxShadow: "0 5px 20px rgba(0,0,0,0.18)",
          }}
          chatboxStyle={{
            borderRadius: "16px",
            overflow: "hidden",
          }}
          chatboxHeight={380}
        />
      </div>

      {/* Sparkle animation */}

      <style jsx global>{`
        .carpeight-whatsapp-wrapper .carpeight-whatsapp-widget {
          position: relative;
        }

        .carpeight-whatsapp-wrapper .carpeight-whatsapp-widget::before,
        .carpeight-whatsapp-wrapper .carpeight-whatsapp-widget::after {
          position: absolute;
          z-index: 10000;
          pointer-events: none;
          color: #a4ea6d;
          animation: carpeightSparkle 2s ease-in-out infinite;
        }

        .carpeight-whatsapp-wrapper .carpeight-whatsapp-widget::before {
          content: "✦";
          top: -12px;
          right: -5px;
          font-size: 17px;
        }

        .carpeight-whatsapp-wrapper .carpeight-whatsapp-widget::after {
          content: "✧";
          bottom: 12px;
          left: -10px;
          font-size: 14px;
          animation-delay: 0.8s;
        }

        @keyframes carpeightSparkle {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(0.6) rotate(0deg);
          }

          50% {
            opacity: 1;
            transform: scale(1.3) rotate(45deg);
          }
        }

        @media (max-width: 640px) {
          .carpeight-whatsapp-wrapper {
            right: 16px;
            bottom: 20px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .carpeight-whatsapp-wrapper,
          .carpeight-whatsapp-wrapper * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </>
  );
}
