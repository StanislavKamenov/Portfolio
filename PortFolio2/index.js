let typed = new Typed('.multiple-text', {
    strings: ['Junior Frontend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: false
}) 

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });
  
  // Scroll Reveal //
ScrollReveal ({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.information, .Aboutus, .contactus', {origin: 'left'})
ScrollReveal().reveal('.image, .about-img, .card, .Projects', {origin: 'left'})







