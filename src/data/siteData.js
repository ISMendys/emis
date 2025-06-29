// Dados configuráveis do site - Fácil de editar
export const siteData = {
  // Informações da empresa
  company: {
    name: "EMIS Decorações",
    tagline: "Elegância em cada detalhe.",
    subtitle: "Cortinas e persianas personalizadas para transformar o seu espaço.",
    phone: "5571983654363",
    email: "contato@emisdecoracoes.com",
    address: "Salvador, BA"
  },

  // Produtos/Soluções - Fácil de adicionar novos
  products: [
    {
      id: 1,
      title: "Cortina de Tecido",
      description: "Elegância e sofisticação para sua sala, com diversas opções de tecidos e cores para combinar com seu ambiente.",
      images: [
        "/src/assets/images/cortina-tecido/cortina3.jpeg",
        "/src/assets/images/cortina-tecido/cortina6.jpeg"
      ],
      details: [
        "Tecidos de alta qualidade",
        "Diversidade de cores e texturas",
        "Controle de luminosidade",
        "Fácil manutenção"
      ]
    },
    {
      id: 2,
      title: "Persiana Romana",
      description: "Funcionalidade e estilo clássico, ideal para quem busca um visual clean e moderno com a praticidade das persianas.",
      images: [
        "/src/assets/images/persiana-romana/cortina1.jpeg",
        "/src/assets/images/persiana-romana/cortina2.jpeg"
      ],
      details: [
        "Design elegante e minimalista",
        "Mecanismo de acionamento suave",
        "Bloqueio de luz eficiente",
        "Fácil instalação"
      ]
    },
    {
      id: 3,
      title: "Cortina com Blackout",
      description: "Controle total da luminosidade e privacidade, perfeita para quartos e ambientes que exigem escuridão total.",
      images: [
        "/src/assets/images/cortina-blackout/cortina1.jpeg",
        "/src/assets/images/cortina-blackout/cortina2.jpeg",
        "/src/assets/images/cortina-blackout/cortina3.jpeg",
        "/src/assets/images/cortina-blackout/cortina4.jpeg",
        "/src/assets/images/cortina-blackout/cortina5.jpeg",
      ],
      details: [
        "Bloqueio de 100% da luz",
        "Isolamento térmico e acústico",
        "Tecido resistente e durável",
        "Ideal para home theaters"
      ]
    },
    {
      id: 4,
      title: "Persiana Rolo",
      description: "Modernidade e praticidade em um só produto, com design discreto e fácil de usar, se adapta a qualquer estilo de decoração.",
      images: [
        "/src/assets/images/persiana-rolo/cortina1.jpeg",
        "/src/assets/images/persiana-rolo/cortina2.jpeg",
        "/src/assets/images/persiana-rolo/cortina3.jpeg"
      ],
      details: [
        "Acionamento manual ou motorizado",
        "Tecidos translúcidos, screen ou blackout",
        "Fácil limpeza",
        "Design compacto"
      ]
    }
  ],

  // Projetos - Fácil de adicionar novos
  projects: [
    {
      id: 1,
      title: "Sala de Estar",
      location: "Salvador - BA",
      image: "/src/assets/images/sala/cortina2.jpeg",
      description: "Projeto de sala de estar que combina cortinas elegantes com persianas romanas para criar um ambiente acolhedor e sofisticado.",
      details: [
        "Cortinas de tecido em linho",
        "Persianas romanas em tom neutro",
        "Mobiliário moderno e confortável",
        "Iluminação indireta para aconchego"
      ],
      gallery: [
        "/src/assets/images/sala/cortina6.jpeg",
        "/src/assets/images/sala/cortina2.jpeg",
        "/src/assets/images/sala/cortina3.jpeg",
        "/src/assets/images/sala/cortina4.jpeg",
        "/src/assets/images/sala/cortina5.jpeg",
        "/src/assets/images/sala/cortina1.jpeg",
      ]
    },
    {
      id: 2,
      title: "Quarto",
      location: "Salvador - BA",
      image: "/src/assets/images/quarto/cortina1.jpeg",
      description: "Quarto master com cortinas blackout para total privacidade e controle de luz, complementado por uma decoração minimalista.",
      details: [
        "Cortinas blackout em tecido duplo",
        "Cama king size com cabeceira estofada",
        "Iluminação dimerizável",
        "Piso laminado"
      ],
      gallery: [
        "/src/assets/images/quarto/cortina1.jpeg",
        "/src/assets/images/quarto/cortina2.jpeg",
        "/src/assets/images/quarto/cortina3.jpeg",
        "/src/assets/images/quarto/cortina4.jpeg",
        "/src/assets/images/quarto/cortina5.jpeg",
        "/src/assets/images/quarto/cortina6.jpeg",
        // "/src/assets/images/quarto/cortina7.jpeg",
        "/src/assets/images/quarto/cortina8.jpeg",
      ]
    },
    {
      id: 3,
      title: "Comercial",
      location: "Salvador, Bomfim - BA",
      image: "/src/assets/images/comercial/cortina1.jpeg",
      description: "Escritório moderno e funcional com persianas romanas que oferecem controle de luz ideal para o ambiente de trabalho.",
      details: [
        "Persianas romanas com filtro solar",
        "Mesa de trabalho ergonômica",
        "Estante planejada",
        "Cadeira confortável"
      ],
      gallery: [
        "/src/assets/images/comercial/cortina1.jpeg",
        "/src/assets/images/comercial/cortina2.jpeg",
        "/src/assets/images/comercial/cortina3.jpeg",
        "/src/assets/images/comercial/cortina4.jpeg",
        "/src/assets/images/comercial/cortina5.jpeg",
        "/src/assets/images/comercial/cortina6.jpeg",
        "/src/assets/images/comercial/cortina7.jpeg",
        "/src/assets/images/comercial/cortina8.jpeg",
      ]
    },
    {
      id: 4,
      title: "Capas",
      location: "Salvador - BA",
      image: "/src/assets/images/capas/capa1.jpeg",
      description: "Sala de jantar elegante com cortinas rolo que proporcionam um visual clean e sofisticado, ideal para refeições em família.",
      details: [
        "Cortinas rolo em tecido screen",
        "Mesa de jantar para 8 pessoas",
        "Lustre pendente",
        "Buffet com espelho"
      ],
      gallery: [
        "/src/assets/images/capas/capa1.jpeg",
        "/src/assets/images/capas/capa2.jpeg",
        "/src/assets/images/capas/capa3.jpg",
        "/src/assets/images/capas/capa4.jpg",
        "/src/assets/images/capas/capa5.jpg",
        "/src/assets/images/capas/capa6.jpg"
      ]
    }
  ],

  // Diferenciais da empresa
  features: [
    "Atendimento personalizado e exclusivo",
    "Materiais de altíssima qualidade",
    "Mais de 20 anos de experiência no mercado"
  ],

  // Redes sociais
  social: {
    instagram: "https://www.instagram.com/emisdecora/",
    pinterest: "https://pinterest.com/emisdecoracoes",
    istech: "https://istech.tech"
  }
};

// Função para adicionar novo produto
export const addProduct = (newProduct) => {
  const newId = Math.max(...siteData.products.map(p => p.id)) + 1;
  siteData.products.push({
    id: newId,
    ...newProduct
  });
};

// Função para adicionar novo projeto
export const addProject = (newProject) => {
  const newId = Math.max(...siteData.projects.map(p => p.id)) + 1;
  siteData.projects.push({
    id: newId,
    ...newProject
  });
};


