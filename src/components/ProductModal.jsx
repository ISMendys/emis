import React, { useState, useEffect } from 'react';
import { X, Phone, Heart, Share2, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { siteData } from '../data/siteData';

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  const [mainImage, setMainImage] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    if (product.images && product.images.length > 0) {
      setMainImage(product.images[0]);
      setCurrentImageIndex(0);
    }
  }, [product]);

  const handleContactClick = () => {
    const message = `Olá, tenho interesse na solução: ${product.title}. Poderíamos conversar sobre isso?`;
    const whatsappUrl = `https://wa.me/${siteData.company.phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleImageChange = (image, index) => {
    setIsImageLoading(true);
    setMainImage(image);
    setCurrentImageIndex(index);
  };

  const handlePrevImage = () => {
    if (product.images && product.images.length > 1) {
      const prevIndex = currentImageIndex === 0 ? product.images.length - 1 : currentImageIndex - 1;
      handleImageChange(product.images[prevIndex], prevIndex);
    }
  };

  const handleNextImage = () => {
    if (product.images && product.images.length > 1) {
      const nextIndex = currentImageIndex === product.images.length - 1 ? 0 : currentImageIndex + 1;
      handleImageChange(product.images[nextIndex], nextIndex);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.title,
        text: product.description,
        url: window.location.href,
      });
    }
  };

  return (
    <>
      {/* Backdrop com blur */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-all duration-300 ease-out"
        onClick={onClose}
      />
      
      {/* Modal Container - Ajustado para scroll completo no mobile */}
      <div className="fixed inset-0 z-50 flex items-start md:items-center justify-center p-0 md:p-4 pointer-events-none">
        <div 
          className="bg-white rounded-none md:rounded-3xl shadow-2xl w-full md:max-w-6xl h-full md:max-h-[95vh] overflow-y-auto md:overflow-hidden pointer-events-auto transform transition-all duration-500 ease-out scale-100 opacity-100"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header - Botão X no topo direito para mobile */}
          <div className="relative bg-gradient-to-r from-[#00002F]/5 to-[#00002F]/10 px-4 md:px-8 py-4 md:py-6 border-b border-[#00002F]/10 sticky top-0 bg-white/95 backdrop-blur-sm z-10">
            {/* Botão de fechar no topo direito para mobile */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 md:hidden p-2 rounded-full bg-[#00002F]/10 text-[#00002F] hover:bg-[#FDD736] hover:text-[#00002F] transition-all duration-200 z-20"
            >
              <X size={20} />
            </button>
            
            <div className="flex items-start justify-between">
              <div className="flex-1 pr-12 md:pr-4">
                <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-[#00002F] leading-tight mb-2">
                  {product.title}
                </h2>
                <div className="flex items-center gap-2 text-sm text-[#00002F]/70">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-[#FDD736] text-[#FDD736]" />
                    ))}
                  </div>
                  <span className="font-medium">4.9</span>
                  <span>•</span>
                  <span>Solução Premium</span>
                </div>
              </div>
              
              {/* Action Buttons - Ocultos no mobile, visíveis no desktop */}
              <div className="hidden md:flex items-center gap-3">
                <button
                  onClick={() => setIsFavorited(!isFavorited)}
                  className={`p-3 rounded-full transition-all duration-200 ${
                    isFavorited 
                      ? 'bg-red-50 text-red-500 hover:bg-red-100' 
                      : 'bg-[#00002F]/10 text-[#00002F] hover:bg-[#00002F]/20'
                  }`}
                >
                  <Heart size={20} className={isFavorited ? 'fill-current' : ''} />
                </button>
                
                <button
                  onClick={handleShare}
                  className="p-3 rounded-full bg-[#00002F]/10 text-[#00002F] hover:bg-[#00002F]/20 transition-all duration-200"
                >
                  <Share2 size={20} />
                </button>
                
                <button
                  onClick={onClose}
                  className="p-3 rounded-full bg-[#00002F]/10 text-[#00002F] hover:bg-red-100 hover:text-red-600 transition-all duration-200"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Content - Layout responsivo com scroll completo no mobile */}
          <div className="flex flex-col lg:flex-row md:max-h-[calc(95vh-200px)]">
            {/* Image Gallery */}
            <div className="lg:w-3/5 p-4 md:p-8 bg-[#00002F]/5">
              <div className="relative group">
                {/* Main Image */}
                <div className="relative aspect-[4/3] bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
                  {isImageLoading && (
                    <div className="absolute inset-0 bg-[#00002F]/10 animate-pulse flex items-center justify-center">
                      <div className="w-8 h-8 border-4 border-[#00002F]/20 border-t-[#FDD736] rounded-full animate-spin"></div>
                    </div>
                  )}
                  
                  {mainImage && (
                    <img
                      src={mainImage}
                      alt={product.title}
                      className="w-full h-full object-contain transition-opacity duration-300"
                      onLoad={() => setIsImageLoading(false)}
                      onError={() => setIsImageLoading(false)}
                    />
                  )}
                  
                  {/* Navigation Arrows */}
                  {product.images && product.images.length > 1 && (
                    <>
                      <button
                        onClick={handlePrevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110"
                      >
                        <ChevronLeft size={20} className="text-[#00002F]" />
                      </button>
                      
                      <button
                        onClick={handleNextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110"
                      >
                        <ChevronRight size={20} className="text-[#00002F]" />
                      </button>
                    </>
                  )}
                  
                  {/* Image Counter */}
                  {product.images && product.images.length > 1 && (
                    <div className="absolute bottom-4 right-4 bg-[#00002F]/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {currentImageIndex + 1} / {product.images.length}
                    </div>
                  )}
                </div>

                {/* Thumbnails */}
                {product.images && product.images.length > 1 && (
                  <div className="flex gap-3 overflow-x-auto pb-2">
                    {product.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => handleImageChange(image, index)}
                        className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-3 transition-all duration-200 hover:scale-105 ${
                          currentImageIndex === index 
                            ? 'border-[#FDD736] shadow-lg' 
                            : 'border-[#00002F]/20 hover:border-[#00002F]/40'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${product.title} - ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Product Info - Scroll removido no mobile, mantido no desktop */}
            <div className="lg:w-2/5 p-4 md:p-8 lg:overflow-y-auto">
              <div className="space-y-6">
                {/* Description */}
                <div>
                  <h3 className="font-montserrat text-xl font-semibold text-[#00002F] mb-3">
                    Descrição
                  </h3>
                  <p className="font-montserrat text-[#00002F]/80 leading-relaxed text-lg">
                    {product.description}
                  </p>
                </div>

                {/* Details */}
                {product.details && (
                  <div>
                    <h3 className="font-montserrat text-xl font-semibold text-[#00002F] mb-4">
                      Características
                    </h3>
                    <div className="space-y-3">
                      {product.details.map((detail, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-[#FDD736]/10 rounded-xl border border-[#FDD736]/20">
                          <div className="w-2 h-2 bg-[#FDD736] rounded-full mt-2 flex-shrink-0"></div>
                          <span className="font-montserrat text-[#00002F]/80 leading-relaxed">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Benefits Badge */}
                <div className="bg-gradient-to-r from-[#FDD736]/10 to-[#FDD736]/20 border border-[#FDD736]/30 rounded-2xl p-6">
                  <h4 className="font-montserrat font-semibold text-[#00002F] mb-2">
                    ✨ Benefícios Exclusivos
                  </h4>
                  <ul className="text-sm text-[#00002F]/80 space-y-1">
                    <li>• Suporte técnico especializado</li>
                    <li>• Garantia estendida</li>
                    <li>• Consultoria personalizada</li>
                  </ul>
                </div>

                {/* Action Buttons para Mobile */}
                <div className="md:hidden flex gap-3 pt-4">
                  <button
                    onClick={() => setIsFavorited(!isFavorited)}
                    className={`p-3 rounded-full transition-all duration-200 ${
                      isFavorited 
                        ? 'bg-red-50 text-red-500' 
                        : 'bg-[#00002F]/10 text-[#00002F]'
                    }`}
                  >
                    <Heart size={20} className={isFavorited ? 'fill-current' : ''} />
                  </button>
                  
                  <button
                    onClick={handleShare}
                    className="p-3 rounded-full bg-[#00002F]/10 text-[#00002F] transition-all duration-200"
                  >
                    <Share2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer - Sticky no mobile */}
          <div className="bg-gradient-to-r from-[#00002F]/5 to-[#00002F]/10 px-4 md:px-8 py-4 md:py-6 border-t border-[#00002F]/10 sticky bottom-0 bg-white/95 backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="text-center sm:text-left">
                <p className="text-sm text-[#00002F]/80 mb-1">
                  Interessado nesta solução?
                </p>
                <p className="text-xs text-[#00002F]/60">
                  Entre em contato e receba uma proposta personalizada
                </p>
              </div>
              <div className="flex justify-center gap-3">
                <button
                  onClick={onClose}
                  className="px-4 py-2 border-2 border-[#00002F]/20 text-[#00002F] rounded-lg text-sm font-medium hover:bg-[#00002F]/5 transition-all duration-200 hover:scale-105"
                >
                  Fechar
                </button>
                
                <button
                  onClick={handleContactClick}
                  className="px-5 py-2 bg-gradient-to-r from-[#FDD736] to-[#FDD736]/90 hover:from-[#FDD736]/90 hover:to-[#FDD736] text-[#00002F] rounded-lg text-sm font-medium shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Phone size={16} />
                  Quero esta solução
                </button>
            </div>

            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes modalEnter {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        .modal-enter {
          animation: modalEnter 0.3s ease-out;
        }

        /* Scroll customizado para webkit browsers */
        .lg\\:overflow-y-auto::-webkit-scrollbar {
          width: 6px;
        }
        
        .lg\\:overflow-y-auto::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 3px;
        }
        
        .lg\\:overflow-y-auto::-webkit-scrollbar-thumb {
          background: #FDD736;
          border-radius: 3px;
        }
        
        .lg\\:overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: #d4b82a;
        }
      `}</style>
    </>
  );
};

export default ProductModal;

