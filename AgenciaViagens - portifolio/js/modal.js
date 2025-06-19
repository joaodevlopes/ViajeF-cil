const modal = document.getElementById('destination-modal');
const modalElements = {
  title: document.getElementById('modal-title'),
  price: document.getElementById('modal-price'),
  destination: document.getElementById('modal-destination'),
  form: document.getElementById('modal-form'),
  success: document.getElementById('modal-success'),
  closeBtn: document.querySelector('.close-modal')
};

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
  if (modalElements.closeBtn) {
    modalElements.closeBtn.addEventListener('click', closeModal);
  }
  
  if (modalElements.form) {
    modalElements.form.addEventListener('submit', handleModalSubmit);
  }
  
  // Fechar modal ao clicar fora ou pressionar ESC
  window.addEventListener('click', function(e) {
    if (e.target === modal) closeModal();
  });
  
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
});

// Abrir modal
function openDestinationModal(destinationId) {
  const destination = destinations.find(dest => dest.id === destinationId);
  
  if (destination && modal) {
    modalElements.title.textContent = destination.title;
    modalElements.price.textContent = `R$ ${destination.price.toLocaleString('pt-BR')} por pessoa`;
    modalElements.destination.value = destination.title;
    
    // Resetar formulário e mensagem de sucesso
    modalElements.form.reset();
    modalElements.success.classList.remove('active');
    
    // Mostrar modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

// Fechar modal
function closeModal() {
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    modalElements.success.classList.remove('active');
  }
}

// Enviar formulário
function handleModalSubmit(e) {
  e.preventDefault();
  
  const formData = new FormData(modalElements.form);
  const message = `Olá Viaje facil! Gostaria de informações sobre:\n\n` +
    `*Destino:* ${formData.get('destination')}\n` +
    `*Nome:* ${formData.get('name')}\n` +
    `*Telefone:* ${formData.get('phone')}\n` +
    `*E-mail:* ${formData.get('email')}\n` +
    `*Número de pessoas:* ${formData.get('people')}\n` +
    `*Mensagem:* ${formData.get('message') || 'Sem mensagem adicional'}`;
  
  window.open(`https://wa.me/999999999999?text=${encodeURIComponent(message)}`, '_blank');
  modalElements.success.classList.add('active');
}