
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    const btnContainer = document.getElementById("IdtoDoaskForm");

      if (entry.isIntersecting) {
        btnContainer.style.display = "block";

        // Attendre que le DOM affiche l'élément avant de le cibler
        setTimeout(() => {
          const actionBtn = document.getElementById("actionBtn");
          if (actionBtn) {
            cycleAnimation(actionBtn);
          } else {
            console.warn("Le bouton n'a pas été trouvé !");
          }
        }, 100); // petit délai pour laisser le DOM afficher le bouton
      } else {
        btnContainer.style.display = "none";
      }
    });
  });

  const target = document.querySelector('.findsms');
  if (target) {
    observer.observe(target);
  } else {
    console.warn("L'élément .findsms n'existe pas !");
  }

  function cycleAnimation(button) {
    let step = 0;

    function animate() {
      if (!document.body.contains(button)) return;

      if (step % 2 === 0) {
        button.innerHTML = "💬 Message du PDG";
      } else {
        button.innerHTML = '<i class="bi bi-chat-dots-fill logo-animate" style="font-size: 20px !important;"></i>';
      }
      step++;
      setTimeout(animate, 3000);
    }

    animate();
  }
   const btnContainer = document.getElementById("IdtoDoaskForm");
   btnContainer.addEventListener("click", function(){
    btnContainer.style.display = "none"
   })

  const CloseSms = document.getElementById("CloseSms");
   CloseSms.addEventListener("click", function(){
    CloseSms.style.display = "block"
   })
}); 
