
const observerSlide = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");}
      else { 
          entry.target.classList.remove("show");
      } 
      });
  });
  
  const hiddenElementsSlide = document.querySelectorAll(".hidden ");
  hiddenElementsSlide.forEach((element) => { observerSlide.observe(element); });
  
  