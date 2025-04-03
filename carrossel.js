document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".image-carousel");
  const track = carousel.querySelector(".carousel-track");
  const slides = Array.from(track.children);
  const dotsContainer = carousel.querySelector(".carousel-dots");
  const prevBtn = carousel.querySelector(".carousel-prev");
  const nextBtn = carousel.querySelector(".carousel-next");

  let currentIndex = 0;
  let intervalId;

  // Cria os dots de navegação
  slides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.classList.add("carousel-dot");
    dot.setAttribute("aria-label", `Ir para slide ${index + 1}`);

    if (index === 0) {
      dot.classList.add("active");
    }

    dot.addEventListener("click", () => {
      goToSlide(index);
    });

    dotsContainer.appendChild(dot);
  });

  const dots = Array.from(dotsContainer.children);

  // Função para mover para um slide específico
  function goToSlide(index) {
    track.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;

    // Atualiza dots ativos
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });

    // Reinicia o autoplay
    resetAutoplay();
  }

  // Navegação
  prevBtn.addEventListener("click", () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    goToSlide(newIndex);
  });

  nextBtn.addEventListener("click", () => {
    const newIndex = (currentIndex + 1) % slides.length;
    goToSlide(newIndex);
  });

  // Autoplay
  function startAutoplay() {
    intervalId = setInterval(() => {
      const newIndex = (currentIndex + 1) % slides.length;
      goToSlide(newIndex);
    }, 5000);
  }

  function resetAutoplay() {
    clearInterval(intervalId);
    startAutoplay();
  }

  // Pausa autoplay quando o mouse está sobre o carrossel
  carousel.addEventListener("mouseenter", () => {
    clearInterval(intervalId);
  });

  carousel.addEventListener("mouseleave", startAutoplay);

  // Inicia o carrossel
  startAutoplay();
});

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".pets-carousel");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  prevBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: -300, behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: 300, behavior: "smooth" });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const headerNav = document.querySelector(".header-navigation");

  menuToggle.addEventListener("click", function () {
    this.classList.toggle("active");
    headerNav.classList.toggle("active");

    // Bloqueia o scroll da página quando o menu está aberto
    document.body.style.overflow = headerNav.classList.contains("active")
      ? "hidden"
      : "";
  });

  // Fecha o menu ao clicar em um link (opcional)
  const navLinks = document.querySelectorAll(".header-links a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      headerNav.classList.remove("active");
      document.body.style.overflow = "";
    });
  });
});
