import React, { useState } from 'react';
import { Menu, X, Phone, Mail, Instagram, MapPin, Check } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Parallax } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/parallax';

import './App.css';

// Componentes
import ProductCard from './components/ProductCard';
import Logo from './components/Logo';
import ProjectCard from './components/ProjectCard';
import WhatsAppFloat from './components/WhatsAppFloat';
import ContactForm from './components/ContactForm';
import ProductModal from './components/ProductModal'; // Importando o modal de produto
import ProjectModal from './components/ProjectModal'; // Importando o modal de projeto
import ParallaxDivider from './components/ParallaxDivider'; // Novo componente

// Dados
import { siteData } from './data/siteData';

// Imagens
import heroImage from './assets/images/hero-bg.jpeg';
// import parallaxBg from './assets/images/parallax-bg.jpeg'; // Removido, pois já é importado dentro do ParallaxDivider

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const openProductModal = (product) => {
    setSelectedProduct(product);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
  };

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="fixed top-0 w-full bg-navy/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-4"> {/* Adicionado gap para espaçamento */}
              {/* Logo */}
              <Logo className="h-15 w-auto" /> {/* Componente da logo */}

              {/* Nome da Empresa */}
              <div className="text-white">
                <h1 className="font-playfair text-3xl font-bold [text-shadow:1px_1px_2px_rgba(0,0,0,0.9)]">
                  {siteData.company.name}
                </h1>
                <p className="text-gold text-2xs font-montserrat [text-shadow:1px_1px_2px_rgba(0,0,0,0.7)]">
                  DECORAÇÕES
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 text-white">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="footer-link text hover:text-gold transition-colors font-montserrat cursor-pointer [text-shadow:1px_1px_2px_rgba(0,0,0,0.9)]"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('solucoes')}
                className="footer-link text hover:text-gold transition-colors font-montserrat cursor-pointer [text-shadow:1px_1px_2px_rgba(0,0,0,0.9)]"
              >
                Soluções
              </button>
              <button 
                onClick={() => scrollToSection('projetos')}
                className="footer-link text hover:text-gold transition-colors font-montserrat cursor-pointer [text-shadow:1px_1px_2px_rgba(0,0,0,0.9)]"
              >
                Projetos
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="footer-link text hover:text-gold transition-colors font-montserrat cursor-pointer [text-shadow:1px_1px_2px_rgba(0,0,0,0.9)]"
              >
                Contato
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-white/20">
              <div className="flex flex-col space-y-4 mt-4">
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="text-white hover:text-gold transition-colors font-montserrat text-left cursor-pointer"
                >
                  Início
                </button>
                <button 
                  onClick={() => scrollToSection('solucoes')}
                  className="text-white hover:text-gold transition-colors font-montserrat text-left cursor-pointer"
                >
                  Soluções
                </button>
                <button 
                  onClick={() => scrollToSection('projetos')}
                  className="text-white hover:text-gold transition-colors font-montserrat text-left cursor-pointer"
                >
                  Projetos
                </button>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="text-white hover:text-gold transition-colors font-montserrat text-left cursor-pointer"
                >
                  Contato
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
          data-swiper-parallax="-23%"
        />

        
        <div className="relative z-10 text-center text px-4 max-w-4xl mx-auto">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 fade-in">
            {siteData.company.tagline}
          </h1>
          <p className="font-montserrat text-lg md:text-xl mb-8 fade-in">
            {siteData.company.subtitle}
          </p>
          <button 
            onClick={() => scrollToSection('contato')}
            className="btn-gold fade-in"
          >
            Solicite um Orçamento Gratuito
          </button>
        </div>
      </section>

      {/* Soluções Section */}
      <section id="solucoes" className="section-padding bg-secondary mt-30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy mb-4">
              Conheça nossos produtos
            </h2>
          </div>

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className="pb-12"
          >
            {siteData.products.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard
                  image={product.images[0]}
                  title={product.title}
                  description={product.description}
                  onClick={() => openProductModal(product)}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="text-center mt-28">
            <button 
              onClick={() => scrollToSection('contato')}
              className="btn-gold flex items-center justify-center gap-2 mx-auto"
            >
              <Phone size={20} />
              Solicite uma Consultoria Gratuita
            </button>
          </div>
        </div>
      </section>

      <ParallaxDivider />

      {/* Projetos Section */}
      <section id="projetos" className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy mb-4">
              Nossos Projetos
            </h2>
          </div>

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className="pb-12"
          >
            {siteData.projects.map((project) => (
              <SwiperSlide key={project.id}>
                <ProjectCard
                  image={project.image}
                  title={project.title}
                  location={project.location}
                  onClick={() => openProjectModal(project)}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="text-center mt-28">
            <button 
              onClick={() => scrollToSection('contato')}
              className="btn-gold"
            >
              Quero fazer um Projeto
            </button>
          </div>
        </div>
      </section>

      {/* Nossa História Section */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={heroImage} 
                alt="Nossa equipe" 
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
            
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy mb-6">
                Nossa História, Sua Confiança
              </h2>
              
              <p className="font-montserrat text-gray-700 mb-6 leading-relaxed">
                Nossa paixão pela decoração é o compromisso com a qualidade nos detalhes on
              </p>

              <div className="space-y-4 mb-8">
                {siteData.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="text-gold flex-shrink-0" size={20} />
                    <span className="font-montserrat text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* <button 
                onClick={() => scrollToSection('contato')}
                className="btn-gold"
              >
                Quero um Projeto Assim
              </button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="section-padding bg-navy">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
              Vamos Criar Juntos?
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulário */}
            <div>
              <ContactForm />
            </div>

            {/* Informações de Contato */}
            <div className="space-y-6">
              <h3 className="font-playfair text-2xl font-bold text-white mb-6">
                Contatos
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                    <Phone className="text" size={20} />
                  </div>
                  <div>
                    <a href={`https://wa.me/5571983654363?text=${encodeURIComponent('Olá! Gostaria de solicitar um orçamento.')}`} target="_blank" rel="noopener noreferrer" className="text-white font-montserrat hover:text-gold transition-colors footer-link">+55 71 98365-4363</a>
                  </div>
                </div>

                {/* <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-white font-montserrat">{siteData.company.email}</p>
                  </div>
                </div> */}

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                    <MapPin className="text" size={20} />
                  </div>
                  <div>
                    <p className="text-white font-montserrat">{siteData.company.address}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                    <Instagram className="text" size={20} />
                  </div>
                  <div>
                    <a href={siteData.social.instagram} target="_blank" rel="noopener noreferrer" className="text-white font-montserrat hover:text-gold transition-colors footer-link">@emisdecoracoes</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy border-t border-white/20 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-playfair text-xl font-bold text-white mb-4">
                {siteData.company.name}
              </h3>
              <p className="text-white/70 font-montserrat text-sm">
                Elegância em cada detalhe para transformar o seu espaço.
              </p>
            </div>

            <div>
              <h4 className="font-montserrat font-semibold text-white mb-4">Links Rápidos</h4>
              <div className="space-y-2">
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="block text-white/70 hover:text-gold transition-colors font-montserrat text-sm cursor-pointer footer-link"
                >
                  Início
                </button>
                <button 
                  onClick={() => scrollToSection('solucoes')}
                  className="block text-white/70 hover:text-gold transition-colors font-montserrat text-sm cursor-pointer footer-link"
                >
                  Soluções
                </button>
                <button 
                  onClick={() => scrollToSection('projetos')}
                  className="block text-white/70 hover:text-gold transition-colors font-montserrat text-sm cursor-pointer footer-link"
                >
                  Projetos
                </button>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="block text-white/70 hover:text-gold transition-colors font-montserrat text-sm cursor-pointer footer-link"
                >
                  Contato
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-montserrat font-semibold text-white mb-4">Contato</h4>
              <div className="space-y-2">
                <p className="text-white/70 font-montserrat text-sm">+55 71 98365-4363</p>
                {/* <p className="text-white/70 font-montserrat text-sm">{siteData.company.email}</p> */}
                <p className="text-white/70 font-montserrat text-sm">{siteData.company.address}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/70 font-montserrat text-sm">
              © 2025 {siteData.company.name}. Todos os direitos reservados.
              <p></p>Criado por: <a href="https://istech.tech" target="_blank" rel="noopener noreferrer" className="text-white font-montserrat hover:text-gold transition-colors footer-link">Istech</a>
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <WhatsAppFloat />

      {/* Modals */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={closeProductModal}
        />
      )}

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={closeProjectModal}
        />
      )}
    </div>
  );
}

export default App;

