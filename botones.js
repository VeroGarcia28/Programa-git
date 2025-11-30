document.addEventListener("DOMContentLoaded", () => {

  const btnNosotros = document.querySelector(".nosotros");
  if (btnNosotros) {
    btnNosotros.addEventListener("click", () => {
      window.location.href = "nosotros.html";
    });
  }

  const btnSindrome = document.querySelector(".sindrome");
  if (btnSindrome) {
    btnSindrome.addEventListener("click", () => {
      window.location.href = "sindrome.html";
    });
  }

  const btnProgramas = document.querySelector(".programas");
  if (btnProgramas) {
    btnProgramas.addEventListener("click", () => {
      window.location.href = "programas.html";
    });
  }

  const btnMaterialdeapoyo = document.querySelector(".materialdeapoyo");
  if (btnMaterialdeapoyo) {
    btnMaterialdeapoyo.addEventListener("click", () => {
      window.location.href = "materialdeapoyo.html";
    });
  }

  
  const btnContacto = document.querySelector(".contacto");
  if (btnContacto) {
    btnContacto.addEventListener("click", () => {
      window.location.href = "contacto.html";
    });
  }


  const btnPlataforma = document.querySelector(".plataformafamilia");
  if (btnPlataforma) {
    btnPlataforma.addEventListener("click", () => {
      window.location.href = "plataforma.html";
    });
  }

  
  
  const btnVolver = document.querySelector(".volver");
  if (btnVolver) {
    btnVolver.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }

});

const btnPagos = document.querySelector(".pagos");
  if (btnPagos) {
    btnPagos.addEventListener("click", () => {
      window.location.href = "pagos.html";
    });
  }


  document.querySelector('.donaciones').addEventListener('click', function () {
    const seccion = document.getElementById('seccion-donaciones');
    seccion.scrollIntoView({ behavior: 'smooth' });
})