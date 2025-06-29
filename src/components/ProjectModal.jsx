import React, { useState, useEffect } from 'react';
import { X, Phone, Heart, Share2, MapPin, Calendar, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { siteData } from '../data/siteData';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  const [mainImage, setMainImage] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    if (project.gallery && project.gallery.length > 0) {
      setMainImage(project.gallery[0]);
      setCurrentImageIndex(0);
    }
  }, [project.gallery]);

  const handleContactClick = () => {
    const message = `Olá, tenho interesse no projeto: ${project.title} em ${project.location}. Poderíamos conversar sobre isso?`;
    const whatsappUrl = `https://wa.me/${siteData.company.phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleImageChange = (image, index) => {
    setIsImageLoading(true);
    setMainImage(image);
    setCurrentImageIndex(index);
  };

  const handlePrevImage = () => {
    if (project.gallery && project.gallery.length > 1) {
      const prevIndex = currentImageIndex === 0 ? project.gallery.length - 1 : currentImageIndex - 1;
      handleImageChange(project.gallery[prevIndex], prevIndex);
    }
  };

  const handleNextImage = () => {
    if (project.gallery && project.gallery.length > 1) {
      const nextIndex = currentImageIndex === project.gallery.length - 1 ? 0 : currentImageIndex + 1;
      handleImageChange(project.gallery[nextIndex], nextIndex);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: project.title,
        text: project.description,
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
                  {project.title}
                </h2>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-[#00002F]/70">
                  {project.location && (
                    <div className="flex items-center gap-1">
                      <MapPin size={16} className="text-[#FDD736]" />
                      <span className="font-medium">{project.location}</span>
                    </div>
                  )}
                  {project.year && (
                    <>
                      <span className="hidden sm:inline">•</span>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} className="text-[#FDD736]" />
                        <span>{project.year}</span>
                      </div>
                    </>
                  )}
                  <span className="hidden sm:inline">•</span>
                  <span className="text-[#FDD736] font-medium">Projeto Executado</span>
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
            <div className="lg:w-3/5 p-4 md:p-8 bg-[#00002F]/5 lg:w-2/5 p-4 md:p-8 lg:overflow-y-auto">
              <div className="relative group">
                {/* Main Image */}
                <div className="relative aspect-[6/6] bg-white rounded-2xl shadow-lg mb-6">
                  {isImageLoading && (
                    <div className="absolute inset-0 bg-[#00002F]/10 animate-pulse flex items-center justify-center">
                      <div className="w-8 h-8 border-4 border-[#00002F]/20 border-t-[#FDD736] rounded-full animate-spin"></div>
                    </div>
                  )}
                  
                  {mainImage && (
                    <img
                      src={mainImage}
                      alt={project.title}
                      className="w-full h-full duration-300"
                      onLoad={() => setIsImageLoading(false)}
                      onError={() => setIsImageLoading(false)}
                    />
                  )}
                  
                  {/* Navigation Arrows */}
                  {project.gallery && project.gallery.length > 1 && (
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
                  {project.gallery && project.gallery.length > 1 && (
                    <div className="absolute bottom-4 right-4 bg-[#00002F]/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {currentImageIndex + 1} / {project.gallery.length}
                    </div>
                  )}

                  {/* View Gallery Badge */}
                  <div className="absolute top-4 left-4 bg-[#FDD736]/90 text-[#00002F] px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Eye size={14} />
                    Galeria do Projeto
                  </div>
                </div>

                {/* Thumbnails */}
                {project.gallery && project.gallery.length > 1 && (
                  <div className="flex gap-3 overflow-x-auto pb-2">
                    {project.gallery.map((image, index) => (
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
                          alt={`${project.title} - ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Project Info - Scroll removido no mobile, mantido no desktop */}
            <div className="lg:w-2/5 p-4 md:p-8 lg:overflow-y-auto">
              <div className="space-y-6">
                {/* Description */}
                <div>
                  <h3 className="font-montserrat text-xl font-semibold text-[#00002F] mb-3">
                    Sobre o Projeto
                  </h3>
                  <p className="font-montserrat text-[#00002F]/80 leading-relaxed text-lg">
                    {project.description}
                  </p>
                </div>

                {/* Project Details */}
                {project.details && (
                  <div>
                    <h3 className="font-montserrat text-xl font-semibold text-[#00002F] mb-4">
                      Detalhes do Projeto
                    </h3>
                    <div className="space-y-3">
                      {project.details.map((detail, index) => (
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

                {/* Project Highlights */}
                <div className="bg-gradient-to-r from-[#FDD736]/10 to-[#FDD736]/20 border border-[#FDD736]/30 rounded-2xl p-6">
                  <h4 className="font-montserrat font-semibold text-[#00002F] mb-2">
                    ✨ Destaques do Projeto
                  </h4>
                  <ul className="text-sm text-[#00002F]/80 space-y-1">
                    <li>• Projeto executado com excelência</li>
                    <li>• Acabamento de alta qualidade</li>
                    <li>• Entrega dentro do prazo</li>
                    <li>• Cliente 100% satisfeito</li>
                  </ul>
                </div>

                {/* Project Stats */}
                {(project.area || project.rooms || project.duration) && (
                  <div className="grid grid-cols-2 gap-4">
                    {project.area && (
                      <div className="bg-white border border-[#00002F]/10 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-[#FDD736]">{project.area}</div>
                        <div className="text-sm text-[#00002F]/70">Área Total</div>
                      </div>
                    )}
                    {project.rooms && (
                      <div className="bg-white border border-[#00002F]/10 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-[#FDD736]">{project.rooms}</div>
                        <div className="text-sm text-[#00002F]/70">Ambientes</div>
                      </div>
                    )}
                    {project.duration && (
                      <div className="bg-white border border-[#00002F]/10 rounded-xl p-4 text-center col-span-2">
                        <div className="text-2xl font-bold text-[#FDD736]">{project.duration}</div>
                        <div className="text-sm text-[#00002F]/70">Tempo de Execução</div>
                      </div>
                    )}
                  </div>
                )}

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
            <div className="flex flex-col sm:flex-row gap-2 items-center justify-between">
              <div className="text-center sm:text-left">
                <p className="text-sm text-[#00002F]/80 mb-1">
                  Gostou deste projeto?
                </p>
                <p className="text-xs text-[#00002F]/60">
                  Entre em contato e vamos criar algo incrível para você também
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
                  Gostei desse projeto
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

export default ProjectModal;

