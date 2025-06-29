import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = ({ phoneNumber = "5571983654363", message = "Olá! Gostaria de solicitar um orçamento." }) => {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="whatsapp-float"
      aria-label="Entrar em contato via WhatsApp"
    >
      <svg width="225" height="225" viewBox="0 0 225 225" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M112.058 185.263C99.2461 185.263 86.677 181.871 75.547 175.434L47.0251 185.263L52.884 155.058C43.697 142.463 38.8521 127.651 38.8521 112.054C38.8521 71.6881 71.6921 38.8481 112.058 38.8481C152.427 38.8481 185.267 71.6881 185.267 112.054C185.267 152.422 152.427 185.263 112.058 185.263ZM76.8611 163.462L79.067 164.843C89.008 171.076 100.418 174.37 112.057 174.37C146.422 174.37 174.376 146.416 174.376 112.054C174.376 77.6951 146.422 49.7411 112.057 49.7411C77.6981 49.7411 49.744 77.6951 49.744 112.054C49.744 126.034 54.324 139.281 62.98 150.359L64.511 152.316L61.3071 168.82L76.8611 163.462Z" fill="url(#paint0_linear_468_461)"/>
        <path d="M75.101 83.9279C75.101 83.9279 79.399 76.4199 82.899 75.9909C86.401 75.5599 90.91 75.5599 92.124 77.8489C93.341 80.1359 98.773 93.4399 98.773 93.4399C98.773 93.4399 99.706 95.7279 98.276 97.9459C96.846 100.162 93.628 103.379 93.628 103.379C93.628 103.379 91.84 105.667 93.628 108.1C95.416 110.529 98.189 115 103.927 120.731C109.655 126.466 120.657 130.555 120.657 130.555C120.657 130.555 122.232 130.768 123.235 129.768C124.233 128.767 129.671 121.973 129.671 121.973C129.671 121.973 131.415 119.722 134.316 121.044C137.211 122.366 149.761 128.624 149.761 128.624C149.761 128.624 151.229 129.159 151.229 131.376C151.229 133.592 150.332 139.017 148.498 140.85C146.663 142.686 141.302 148.339 133.242 148.339C125.184 148.339 105.994 141.781 95.768 131.557C85.542 121.329 76.462 110.958 74.319 101.522C72.172 92.0819 72.46 87.8159 75.101 83.9279Z" fill="url(#paint1_linear_468_461)"/>
        <defs>
        <linearGradient id="paint0_linear_468_461" x1="112.06" y1="38.8481" x2="112.06" y2="185.263" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FFCF55"/>
        <stop offset="1" stop-color="#996E02"/>
        </linearGradient>
        <linearGradient id="paint1_linear_468_461" x1="112.061" y1="75.7695" x2="121.5" y2="144.5" gradientUnits="userSpaceOnUse">
        <stop offset="0.0976419" stop-color="#FFB700"/>
        <stop offset="1" stop-color="#AF810D"/>
        </linearGradient>
        </defs>
      </svg>
    </button>
  );
};

export default WhatsAppFloat;

