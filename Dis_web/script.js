document.addEventListener("DOMContentLoaded", () => {
  // Menú hamburguesa
  const nav = document.querySelector("#nav");
  const open = document.querySelector("#open");
  const close = document.querySelector("#close");

  if (nav && open && close) {
    open.addEventListener("click", () => {
      nav.classList.add("visible");
    });

    close.addEventListener("click", () => {
      nav.classList.remove("visible");
    });
  }

  // ScrollReveal
  if (typeof ScrollReveal !== "undefined") {
    const sr = ScrollReveal({
      distance: '65px',
      duration: 2600,
      delay: 450,
      reset: true,
    });

    sr.reveal('.hero-seccion', { delay: 200, origin: 'top' });
    sr.reveal('.inicio-women', { delay: 200, origin: 'top' });
    sr.reveal('.inicio-men', { delay: 200, origin: 'top' });
    sr.reveal('.inicio-accesories', { delay: 200, origin: 'top' });
  }

  // Typed.js (dos instancias reutilizadas)
  if (typeof Typed !== "undefined") {
    const autoType = document.querySelector(".auto-type");
    if (autoType) {
      new Typed(".auto-type", {
        strings: ["vibe", "street", "aura"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
      });
    }

    const auto = document.querySelector(".auto");
    if (auto) {
      new Typed(".auto", {
        strings: [":)", ":("],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
      });
    }
  }

  // Registro/Login (por si se usa en alguna página)
  const contenedor = document.getElementById('contenedor');
  const registerBtn = document.getElementById('register');
  const loginBtn = document.getElementById('login');

  if (registerBtn && loginBtn && contenedor) {
    registerBtn.addEventListener("click", () => {
      contenedor.classList.add("active");
    });

    loginBtn.addEventListener("click", () => {
      contenedor.classList.remove("active");
    });
  }
});
