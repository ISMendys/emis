import React from 'react';
import parallaxBg from '../../public/images/hero-bg.jpeg'; // Nova imagem de fundo

const ParallaxDivider = () => {
  return (
    <div 
      className="relative h-[400px] flex items-center justify-center overflow-hidden bg-[#00002F]"
    >
      {/* Imagem de Fundo com Parallax (usando background-attachment: fixed) */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{
          backgroundImage: `url(${parallaxBg})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
        }}
      />

      {/* Overlay escuro para contraste */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Conteúdo Central */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h3 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Inspiração que Transforma Ambientes
        </h3>
        
        <p className="font-montserrat text-lg md:text-xl text-white/90 leading-relaxed">
          Descubra a excelência em cada detalhe dos nossos projetos e deixe-se inspirar.
        </p>
      </div>
    </div>
  );
};

export default ParallaxDivider;

