document.addEventListener("DOMContentLoaded", function () {
  // Menu mobile
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileNav = document.getElementById("mobile-nav");

  mobileMenuBtn.addEventListener("click", function () {
    mobileNav.classList.toggle("active");
    this.innerHTML = mobileNav.classList.contains("active")
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';
  });

  // Fechar menu ao clicar em um link
  document.querySelectorAll("#mobile-nav .mobile-nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("active");
      mobileMenuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
  });

  // Variáveis globais para armazenar a seleção
  let selectedPrice = "";
  let selectedHotel = "EXCLUSIVE Di Roma"; // Valor padrão
  let selectedDeparture = "2025-06-07"; // Valor padrão (primeira data selecionada)
  let selectedReturn = "2025-06-11"; // Valor padrão (primeira data selecionada)

  // Controle de Abas
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons and contents
      tabBtns.forEach((b) => b.classList.remove("active"));
      tabContents.forEach((c) => c.classList.remove("active"));

      // Add active class to clicked button
      btn.classList.add("active");

      // Show corresponding content
      const tabId = btn.getAttribute("data-tab");
      document.getElementById(tabId).classList.add("active");
    });
  });

  function initHotelCarousels() {
    document.querySelectorAll(".hotel-carousel").forEach((carousel) => {
      const inner = carousel.querySelector(".carousel-inner");
      const items = carousel.querySelectorAll(".carousel-item");
      const prevBtn = carousel.querySelector(".carousel-control.prev");
      const nextBtn = carousel.querySelector(".carousel-control.next");
      let currentIndex = 0;

      function goToSlide(index) {
        if (index < 0) index = items.length - 1;
        else if (index >= items.length) index = 0;

        inner.style.transform = `translateX(-${index * 100}%)`;
        currentIndex = index;
      }

      prevBtn.addEventListener("click", () => goToSlide(currentIndex - 1));
      nextBtn.addEventListener("click", () => goToSlide(currentIndex + 1));
    });
  }

  initHotelCarousels();

  // Accordion de Hotéis
  const accordionHeaders = document.querySelectorAll(".hotel-accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const accordionItem = header.parentElement;
      accordionItem.classList.toggle("active");
    });
  });

  // Seleção de datas
  const dateOptions = document.querySelectorAll(".date-option");
  const whatsappBtns = document.querySelectorAll(".whatsapp-btn"); // Seleciona todos os botões

  dateOptions.forEach((option) => {
    option.addEventListener("click", function () {
      if (this.classList.contains("unavailable")) {
        return; // Não faz nada se estiver indisponível
      }

      // Remove previous selection
      dateOptions.forEach((opt) => opt.classList.remove("selected"));

      // Add current selection
      this.classList.add("selected");
      selectedDeparture = this.getAttribute("data-departure");
      selectedReturn = this.getAttribute("data-return");
      selectedHotel = this.querySelector(".hotel-name").textContent;
      selectedPrice = this.getAttribute("data-price");

      // Update WhatsApp links and show price
      updateWhatsappLinks();
      updatePriceDisplay();
    });
  });

  function updatePriceDisplay() {
    const priceDisplays = document.querySelectorAll(".price-display");
    priceDisplays.forEach((display) => {
      display.innerHTML = selectedPrice
        ? `A partir de <strong>R$ ${selectedPrice}</strong>`
        : "Selecione uma data para ver o preço";
    });
  }

  function updateWhatsappLinks() {
    const departureDate = new Date(selectedDeparture + "T00:00:00");
    const returnDate = new Date(selectedReturn + "T00:00:00");

    const options = { day: "numeric", month: "long", year: "numeric" };
    const formattedDeparture = departureDate.toLocaleDateString(
      "pt-BR",
      options
    );
    const formattedReturn = returnDate.toLocaleDateString("pt-BR", options);

    const message = `Olá Viaje Fácil! Gostaria de reservar para Caldas Novas no período de ${formattedDeparture} a ${formattedReturn} no hotel ${selectedHotel}. Por favor, envie mais informações.`;

    // Atualiza todos os botões do WhatsApp
    whatsappBtns.forEach((btn) => {
      btn.href = `https://wa.me/999999999999?text=${encodeURIComponent(
        message
      )}`;
    });
  }

  // Inicialização
  // Seleciona a primeira opção de data por padrão (junho)
  const firstAvailableDateOption = document.querySelector(
    ".date-option:not(.unavailable)"
  );
  if (firstAvailableDateOption) {
    firstAvailableDateOption.classList.add("selected");
    selectedDeparture = firstAvailableDateOption.getAttribute("data-departure");
    selectedReturn = firstAvailableDateOption.getAttribute("data-return");
    selectedHotel =
      firstAvailableDateOption.querySelector(".hotel-name").textContent;
    selectedPrice = firstAvailableDateOption.getAttribute("data-price");
  }

  updateWhatsappLinks();
  updatePriceDisplay();
});
