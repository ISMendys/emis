# EMIS Decorações - Site de Captação de Clientes

## 🎯 Sobre o Projeto

Site profissional desenvolvido para captação de clientes da EMIS Decorações, especializada em cortinas e persianas personalizadas. O site foi construído com componentes modulares e reutilizáveis para facilitar a personalização e adição de novos conteúdos.

## 🚀 Como Executar

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 📝 Como Personalizar o Site

### 1. Alterando Informações da Empresa

Edite o arquivo `src/data/siteData.js`:

```javascript
export const siteData = {
  company: {
    name: "EMIS Decorações",
    tagline: "Elegância em cada detalhe.",
    subtitle: "Cortinas e persianas personalizadas para transformar o seu espaço.",
    phone: "5547999999939",
    email: "contato@emisdecoracoes.com",
    address: "Florianópolis, SC"
  },
  // ...
};
```

### 2. Adicionando Novos Produtos/Soluções

No mesmo arquivo `src/data/siteData.js`, adicione novos produtos ao array:

```javascript
products: [
  {
    id: 5, // Próximo ID disponível
    title: "Novo Tipo de Cortina",
    description: "Descrição do produto",
    image: "/src/assets/images/nova-cortina.jpg"
  }
]
```

### 3. Adicionando Novos Projetos

```javascript
projects: [
  {
    id: 5, // Próximo ID disponível
    title: "Nome do Projeto",
    location: "Cidade",
    image: "/src/assets/images/novo-projeto.jpg"
  }
]
```

### 4. Substituindo Imagens

1. Coloque suas imagens na pasta `src/assets/images/`
2. Atualize os caminhos no arquivo `siteData.js`
3. Para a imagem do Hero, edite também o `src/App.jsx` na linha:
   ```javascript
   import heroImage from './assets/images/sua-nova-imagem.jpg';
   ```

### 5. Alterando Cores e Estilos

As cores principais estão definidas no arquivo `src/App.css`:

```css
:root {
  --background: #FFFFFF;
  --foreground: #0A0F2C;  /* Azul-marinho */
  --accent: #D4AF37;      /* Dourado */
  --secondary: #F5F5F5;   /* Cinza claro */
}
```

## 🧩 Componentes Reutilizáveis

### ProductCard
Usado na seção "Soluções Sob Medida":
```jsx
<ProductCard
  image="/caminho/para/imagem.jpg"
  title="Nome do Produto"
  description="Descrição opcional"
/>
```

### ProjectCard
Usado na seção "Projetos que Inspiram":
```jsx
<ProjectCard
  image="/caminho/para/imagem.jpg"
  title="Nome do Projeto"
  location="Localização"
/>
```

### ContactForm
Formulário de contato configurável. Para alterar o número do WhatsApp, edite:
```jsx
<WhatsAppFloat phoneNumber="5547999999939" />
```

## 📱 Responsividade

O site é totalmente responsivo e se adapta automaticamente a:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (até 767px)

## 🎨 Funcionalidades Implementadas

- ✅ Design elegante com paleta azul-marinho e dourado
- ✅ Navegação suave entre seções
- ✅ Efeitos hover nos cards de produtos e projetos
- ✅ Formulário de contato funcional
- ✅ Botão flutuante do WhatsApp
- ✅ Layout responsivo
- ✅ Animações suaves
- ✅ SEO otimizado

## 🔧 Estrutura de Arquivos

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ProductCard.jsx
│   ├── ProjectCard.jsx
│   ├── WhatsAppFloat.jsx
│   └── ContactForm.jsx
├── data/               # Dados configuráveis
│   └── siteData.js
├── assets/             # Imagens e recursos
│   └── images/
├── App.jsx             # Componente principal
└── App.css             # Estilos globais
```

## 📞 Configuração do WhatsApp

O botão do WhatsApp está configurado para abrir uma conversa com a mensagem pré-definida. Para personalizar:

1. Altere o número no arquivo `siteData.js`
2. Personalize a mensagem padrão no componente `WhatsAppFloat.jsx`

## 🚀 Deploy

Para fazer o deploy do site:

```bash
# Build do projeto
npm run build

# Os arquivos estarão na pasta 'dist'
```

## 💡 Dicas de Personalização

1. **Imagens**: Use imagens de alta qualidade (mínimo 1200px de largura)
2. **Textos**: Mantenha títulos concisos e descrições claras
3. **Cores**: Teste sempre o contraste para garantir legibilidade
4. **Performance**: Otimize imagens antes de adicionar ao projeto

## 📧 Suporte

Para dúvidas sobre personalização ou problemas técnicos, consulte a documentação do React e Tailwind CSS.

