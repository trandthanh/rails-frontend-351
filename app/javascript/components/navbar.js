const updateNavbar = () => {
  const navbar = document.querySelector(".navbar-lewagon");
  if (navbar) {
    window.addEventListener('scroll', (event) => {
      if (window.scrollY >= window.innerHeight) {
        navbar.classList.add("navbar-lewagon-white");
      } else {
        navbar.classList.remove("navbar-lewagon-white");
      }
    })
  }
}

export { updateNavbar };
