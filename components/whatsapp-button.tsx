"use client"

import { useState, useEffect } from "react"

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  const phoneNumber = "918977754033"
  const message = "Hi Kemplast! I'd like to know more about your products and services."

  useEffect(() => {
    // Show button after a short delay
    const timer = setTimeout(() => setIsVisible(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Auto-expand to show text after button appears
    if (isVisible) {
      const expandTimer = setTimeout(() => setIsExpanded(true), 2500)
      return () => clearTimeout(expandTimer)
    }
  }, [isVisible])

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <>
      <style jsx>{`
        @keyframes wa-entrance {
          0% {
            opacity: 0;
            transform: translateY(24px) scale(0.8);
          }
          60% {
            opacity: 1;
            transform: translateY(-4px) scale(1.03);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes wa-pulse {
          0%, 100% {
            box-shadow: 0 4px 20px rgba(200, 120, 30, 0.3),
                        0 0 0 0 rgba(200, 120, 30, 0.4);
          }
          50% {
            box-shadow: 0 4px 20px rgba(200, 120, 30, 0.3),
                        0 0 0 10px rgba(200, 120, 30, 0);
          }
        }

        @keyframes wa-expand {
          0% {
            max-width: 44px;
            padding-right: 0;
          }
          100% {
            max-width: 260px;
            padding-right: 18px;
          }
        }

        @keyframes wa-text-fade {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .wa-button {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 9999;
          display: flex;
          align-items: center;
          gap: 8px;
          height: 44px;
          padding-left: 12px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          background: linear-gradient(135deg, #d4842a 0%, #c06a18 40%, #b85d12 100%);
          color: white;
          opacity: 0;
          overflow: hidden;
          animation: wa-entrance 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards,
                     wa-pulse 2.5s ease-in-out 3s infinite;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
                      box-shadow 0.3s ease,
                      background 0.3s ease;
          box-shadow: 0 3px 14px rgba(200, 120, 30, 0.3),
                      0 1px 4px rgba(0, 0, 0, 0.08);
          max-width: 44px;
          padding-right: 0;
        }

        .wa-button.expanded {
          animation: wa-entrance 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards,
                     wa-expand 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards,
                     wa-pulse 2.5s ease-in-out 4s infinite;
          animation-delay: 0s, 0s, 4s;
        }

        .wa-button:hover {
          transform: scale(1.04);
          background: linear-gradient(135deg, #e09035 0%, #cc7520 40%, #c06a18 100%);
          box-shadow: 0 6px 28px rgba(200, 120, 30, 0.5),
                      0 3px 8px rgba(0, 0, 0, 0.15);
        }

        .wa-button:active {
          transform: scale(0.97);
        }

        .wa-icon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          fill: white;
          filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.12));
        }

        .wa-text {
          font-size: 13px;
          font-weight: 600;
          white-space: nowrap;
          letter-spacing: 0.01em;
          opacity: 0;
          pointer-events: none;
        }

        .wa-button.expanded .wa-text {
          animation: wa-text-fade 0.4s ease 0.3s forwards;
        }

        @media (max-width: 640px) {
          .wa-button {
            bottom: 16px;
            right: 16px;
            height: 40px;
            padding-left: 10px;
          }

          .wa-button.expanded {
            padding-right: 14px;
          }

          .wa-icon {
            width: 18px;
            height: 18px;
          }

          .wa-text {
            font-size: 12px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .wa-button {
            animation: none;
            opacity: 1;
            max-width: 260px;
            padding-right: 18px;
          }
          .wa-button.expanded {
            animation: none;
          }
          .wa-button.expanded .wa-text {
            animation: none;
            opacity: 1;
          }
        }
      `}</style>

      {isVisible && (
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`wa-button${isExpanded ? " expanded" : ""}`}
          aria-label="Chat on WhatsApp"
          id="whatsapp-chat-button"
        >
          <svg className="wa-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span className="wa-text">How can I help you?</span>
        </a>
      )}
    </>
  )
}
