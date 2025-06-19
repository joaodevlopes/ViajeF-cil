// Hero Slider Data
const heroSlides = [
  {
    id: 1,
    image: 'img/Onibus.jpg',
    title: 'Viaje com conforto e segurança',
    subtitle: 'Pacotes rodoviários com os melhores ônibus do mercado.',
    cta: 'Conheça nossos pacotes',
    link: 'pacotes/pacotes-rodoviarios.html'
  },
  {
    id: 2,
    image: 'img/Avião.jpg',
    title: 'Voando para Seu Destino dos Sonhos',
    subtitle: 'Passagens aéreas com os melhores preços e condições.',
    cta: 'Ver destinos',
    link: 'pacotes/pacotes-aereos.html'
  },
  
  {
    id: 3,
    image: 'img/Cruzeiro.jpg',
    title: 'Cruzeiros Inesquecíveis',
    subtitle: 'Experiências únicas em alto mar com tudo incluso.',
    cta: 'Conheça nossos pacotes',
    link: 'pacotes/pacotes-cruzeiro.html'
  }
];

// Destination Cards Data
const destinations = [
  {
    id: 1,
    title: 'Gramado',
    slug: 'gramado-rs',
    location: 'Rio Grande do Sul, Brasil',
    description: 'Encante-se com paisagens europeias, gastronomia deliciosa e atrações imperdíveis em qualquer estação do ano. Reserve agora e viva momentos inesquecíveis na Serra Gaúcha!',
    image: 'img/GramadoImg.PNG',
    price: 1250,
    rating: 5,
    type: 'nacionais',
    featured: true,
    instagramPost: 'https://www.instagram.com/',
    transportType:'rodoviario'
  },
  {
    id: 2,
    title: 'Foz do Iguaçu',
    slug: 'foz-do-iguacu',
    location: 'Paraná, Brasil',
    description: 'Um paraíso natural que vai transformar sua viagem! Maravilhe-se com as impressionantes Cataratas, descubra a energia da Usina de Itaipu e viva aventuras únicas na tríplice fronteira. Garanta já sua experiência inesquecível!',
    image: 'img/FozdoiguacuIMG.PNG',
    price: 1800,
    rating: 5,
    type:'nacionais',
    featured: true,
    instagramPost:'https://www.instagram.com/'
  },
  {
    id: 3,
    title: 'Porto Seguro',
    slug: 'porto-seguro',
    location: 'Bahia, Brasil',
    description: ' O destino ideal para quem busca sol, história e diversão! Encante-se com as praias paradisíacas, mergulhe na cultura local e viva experiências inesquecíveis na Costa do Descobrimento. Reserve agora e embarque nessa aventura baiana!',
    image: 'img/Portoseguroimg.jpg',
    price: 1420,
    rating: 5,
    type: 'nacionais',
    promotion: true,
    instagramPost:'https://www.instagram.com/'
  },
  {
    id: 4,
    title: 'Natal',
    slug: 'natal',
    location: 'Rio Grande do Norte, Brasil',
    description: ' um paraíso de dunas, praias deslumbrantes e sol o ano inteiro! Explore paisagens incríveis, saboreie a gastronomia potiguar e aproveite passeios emocionantes. Reserve sua viagem e descubra o melhor do Nordeste brasileiro!',
    image: 'img/NatalIMG.PNG',
    price: 1200,
    rating: 5,
    type: 'nacionais',
    promotion: true,
    instagramPost: 'https://www.instagram.com/'
  },
  {
    id: 5,
    title: 'Porto de Galinhas',
    slug: 'porto-galinhas',
    location: 'Pernambuco, Brasil',
    description: 'Um paraíso tropical no litoral pernambucano! Mergulhe em piscinas naturais de águas cristalinas, explore praias deslumbrantes e vivencie a vibrante cultura local. Reserve sua viagem e desfrute de momentos inesquecíveis neste destino encantador!',
    image: 'img/PortodegalinhasIMG.PNG',
    price: 1620,
    rating: 5,
    type: 'nacionais',
    promotion: true,
    instagramPost: 'https://www.instagram.com/'
  },
  {
    id: 6,
    title: 'Santiago',
    slug: 'santiago-chile',
    location: 'Santiago, Chile ',
    description: 'Uma cidade vibrante cercada pela imponência da Cordilheira dos Andes! Aproveite vinícolas premiadas, cultura rica e gastronomia sofisticada. Reserve sua viagem e descubra o charme da capital chilena!',
    image: 'img/SantiagoIMG.PNG',
    price: 1250,
    rating: 5,
    type: 'internacionais',
    featured: true,
    instagramPost: 'https://www.instagram.com/'
  }
];

// Testimonials Data
const testimonials = [
  {
    id: 1,
    name: 'Claudia Ribeiro',
    location: 'São Paulo, SP',
    photo: 'https://randomuser.me/api/portraits/women/32.jpg',
    rating: 5,
    comment: 'Melhor agência de viagens! Atendimento excelente, pacotes maravilhosos e preços justos. Fiz minha lua de mel com eles e foi tudo perfeito!'
  },
  {
    id: 2,
    name: 'Carlos Henrique',
    location: 'São Paulo, SP',
    photo: 'https://randomuser.me/api/portraits/men/44.jpg',
    rating: 5,
    comment: 'Já viajei várias vezes com a Viaje facil e sempre superaram minhas expectativas. Profissionais competentes e atenciosos. Recomendo!'
  },
  {
    id: 3,
    name: 'Ana Paula Silva',
    location: 'São Paulo, SP',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 5,
    comment: 'Contratei um pacote para Caldas Novas e fiquei impressionada com o serviço. Tudo saiu exatamente como combinado. Voltarei a contratar!'
  },
  {
    id: 4,
    name: 'Roberto Fernandes',
    location: 'São Paulo, SP',
    photo: 'https://randomuser.me/api/portraits/men/22.jpg',
    rating: 5,
    comment: 'Atendimento diferenciado! Equipe preocupada em oferecer a melhor experiência. Meu pacote para Porto Seguro foi impecável.'
  },
  {
    id: 5,
    name: 'Juliana Oliveira',
    location: 'São Paulo, SP',
    photo: 'https://randomuser.me/api/portraits/women/26.jpg',
    rating: 5,
    comment: 'Pacote rodoviário para Costa do Sauípe. Ônibus confortável, hotel excelente e preço justo. Super recomendo!'
  },
  {
    id: 6,
    name: 'Ricardo Alves',
    location: 'São Paulo, SP',
    photo: 'https://randomuser.me/api/portraits/men/65.jpg',
    rating: 5,
    comment: 'Melhor custo-benefício! Consegui pacote incrível para Natal com preço imbatível. Equipe muito atenciosa.'
  },
  {
    id: 7,
    name: 'Fernanda Costa',
    location: 'São Paulo, SP',
    photo: 'https://randomuser.me/api/portraits/women/45.jpg',
    rating: 5,
    comment: 'Atendimento excelente! Fiz uma viagem maravilhosa para Porto de Galinhas com minha família. Tudo perfeito!'
  }
];