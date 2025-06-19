let isScrolled = false;
let mobileMenuOpen = false;

// Elementos DOM
const elements = {
  header: document.getElementById('header'),
  mobileMenuBtn: document.getElementById('mobile-menu-btn'),
  mobileNav: document.getElementById('mobile-nav'),
  mobileNavLinks: document.querySelectorAll('.mobile-nav-link'),
  contactForm: document.getElementById('contact-form'),
  formSuccess: document.getElementById('form-success'),
  backBtn: document.getElementById('back-btn'),
  mobileCloseBtn: document.getElementById('mobile-close-btn'),
  destinationsGrid: document.querySelector('.destinations-grid')
};

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
  initHeaderScroll();
  initMobileMenu();
  initDestinations();
  initForms();
  initSmoothScrolling();
  initDropdowns();
});


function initDropdowns() {
  
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('> a.mobile-nav-link') || dropdown.querySelector('> a');
        
        // Para mobile, adicionar evento de clique para toggle
        if (window.innerWidth <= 920) {
            link.addEventListener('click', function(e) {
                if (this.parentElement.classList.contains('dropdown')) {
                    e.preventDefault();
                    e.stopPropagation(); // Impede que o evento se propague
                    dropdown.classList.toggle('active');
                }
            });
        }
        
        // Filtro por tipo de transporte - apenas para desktop
        if (window.innerWidth > 920) {
            const filterLinks = dropdown.querySelectorAll('.dropdown-menu a');
            filterLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const filterType = this.getAttribute('data-filter');
                    filterDestinationsByType(filterType);
                });
            });
        }
    });
}



// Função de filtro atualizada
function filterDestinationsByType(type) {
    // Primeiro mostra todos os cards
    document.querySelectorAll('.destination-card').forEach(card => {
        card.style.display = 'none';
    });
    
    // Depois mostra apenas os do tipo selecionado
    if (type === 'rodoviario') {
        // Exemplo - ajuste conforme seus dados
        document.querySelectorAll('.destination-card[data-transport*="rodoviario"]').forEach(card => {
            card.style.display = 'block';
        });
    } else if (type === 'aereo') {
        document.querySelectorAll('.destination-card[data-transport*="aereo"]').forEach(card => {
            card.style.display = 'block';
        });
    } else if (type === 'maritimo') {
        document.querySelectorAll('.destination-card[data-transport*="maritimo"]').forEach(card => {
            card.style.display = 'block';
        });
    }
    
    // Rola para a seção de destinos
    const destinosSection = document.getElementById('destinos');
    if (destinosSection) {
        window.scrollTo({
            top: destinosSection.offsetTop - 80,
            behavior: 'smooth'
        });
    }
}

// Funções de inicialização
function initHeaderScroll() {
  window.addEventListener('scroll', () => {
    isScrolled = window.scrollY > 50;
    elements.header.classList.toggle('scrolled', isScrolled);
  });
  elements.header.classList.toggle('scrolled', window.scrollY > 50);
}

function initMobileMenu() {
  elements.mobileMenuBtn.addEventListener('click', toggleMobileMenu);
  elements.mobileCloseBtn.addEventListener('click', closeMobileMenu);
  
  elements.mobileNavLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    const isDropdownTrigger = this.closest('.dropdown');

    if (!isDropdownTrigger || window.innerWidth > 920) {
      closeMobileMenu();
    }
  });
})};


function toggleMobileMenu() {
  mobileMenuOpen = !mobileMenuOpen;
  elements.mobileNav.classList.toggle('active', mobileMenuOpen);
  elements.mobileMenuBtn.innerHTML = mobileMenuOpen ? 
    '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
    
  // Re-inicializa os dropdowns quando o menu é aberto
  if (mobileMenuOpen) {
    initDropdowns();
  }
}


function closeMobileMenu() {
  mobileMenuOpen = false;
  elements.mobileNav.classList.remove('active');
  elements.mobileMenuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
}

function initDestinations() {
  renderDestinations('todos');
  
  document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      renderDestinations(button.getAttribute('data-filter'));
    });
  });
}

function renderDestinations(filter) {
  elements.destinationsGrid.innerHTML = '';
  
  let filteredDestinations = destinations.filter(dest => {
    if (filter === 'todos') return true;
    if (filter === 'promocoes') return dest.promotion;
    return dest.type === filter;
  });
  
  filteredDestinations.forEach(destination => {
    const card = document.createElement('div');
    card.className = 'destination-card fade-in';
    card.setAttribute('data-transport', destination.transportType || 'outro');
    
    card.innerHTML = `
      <div class="destination-image">
        <img src="${destination.image}" alt="${destination.title}">
        ${destination.promotion ? '<span class="destination-type">Promoção</span>' : 
          (destination.featured ? '<span class="destination-type">Destaque</span>' : '')}
      </div>
      <div class="destination-content">
        <h3>${destination.title}</h3>
        <div class="destination-location">
          <i class="fa-solid fa-location-dot"></i>
          <span>${destination.location}</span>
        </div>
        <p class="destination-description">${destination.description}</p>
        <div class="destination-price">
          R$ ${destination.price.toLocaleString('pt-BR')} <span>por pessoa</span>
        </div>
        <div class="destination-footer">
          <div class="destination-rating">
            <i class="fa-solid fa-star"></i>
            <span>${destination.rating.toFixed(1)}</span>
          </div>
          <div class="destination-buttons">
            <button class="btn btn-primary saiba-mais-btn" data-id="${destination.id}">Saiba Mais</button>
            <a href="${destination.instagramPost}" target="_blank" class="btn btn-outline instagram-btn">
              <i class="fab fa-instagram"></i> Instagram
            </a>
          </div>
        </div>
      </div>
    `;
    
    elements.destinationsGrid.appendChild(card);
  });
}

function initForms() {
  if (elements.contactForm) {
    elements.contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      sendWhatsAppMessage(this);
      elements.formSuccess.classList.add('active');
      this.reset();
    });
  }
  
  if (elements.backBtn) {
    elements.backBtn.addEventListener('click', () => {
      elements.formSuccess.classList.remove('active');
    });
  }
}

function sendWhatsAppMessage(form) {
  const formData = new FormData(form);
  const message = `Olá Viaje facil! Gostaria de entrar em contato:\n\n` +
    `*Nome:* ${formData.get('name')}\n` +
    `*E-mail:* ${formData.get('email')}\n` +
    `*Telefone:* ${formData.get('phone')}\n` +
    `*Assunto:* ${formData.get('subject')}\n` +
    `*Mensagem:* ${formData.get('message') || 'Sem mensagem adicional'}`;
  
  window.open(`https://wa.me/999999999999?text=${encodeURIComponent(message)}`, '_blank');
}

function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) {
      setTimeout(() => {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }, 100);
    }
  }
}

window.addEventListener('resize', function() {
    initDropdowns();
    
    // Esconde o menu mobile se a tela for maior que 920px
    if (window.innerWidth > 920 && mobileMenuOpen) {
        closeMobileMenu();
    }
});

// Event delegation para os botões "Saiba Mais"
elements.destinationsGrid.addEventListener('click', function(e) {
  if (e.target.classList.contains('saiba-mais-btn')) {
    const destinationId = parseInt(e.target.getAttribute('data-id'));
    openDestinationModal(destinationId);
  }
});