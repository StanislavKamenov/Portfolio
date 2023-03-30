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
  