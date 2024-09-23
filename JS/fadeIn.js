

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("showSlide");}
      else { 
          entry.target.classList.remove("showSlide");
      } 
      });
  });
  
  const hiddenElements = document.querySelectorAll(".hideSlide");
  hiddenElements.forEach((element) => { observer.observe(element); });
  
  
  