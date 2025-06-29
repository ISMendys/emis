import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    // Por exemplo, enviar para um serviço de email ou API
    console.log('Formulário enviado:', formData);
    
    // Exemplo: redirecionar para WhatsApp com a mensagem
    const message = `Olá! Meu nome é ${formData.name}. ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5547999999939?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-gold transition-colors"
        />
      </div>
      
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-gold transition-colors"
        />
      </div>
      
      <div>
        <input
          type="tel"
          name="whatsapp"
          placeholder="WhatsApp"
          value={formData.whatsapp}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-gold transition-colors"
        />
      </div>
      
      <div>
        <textarea
          name="message"
          placeholder="Descreva brevemente seu projeto"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          required
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-gold transition-colors resize-none"
        />
      </div>
      
      <button
        type="submit"
        className="btn-gold w-full flex items-center justify-center gap-2"
      >
        <Send size={18} />
        Enviar e Solicitar Orçamento
      </button>
    </form>
  );
};

export default ContactForm;

