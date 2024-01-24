function init() {
  const registrar = document.getElementById("btnreg");
  const hrefregistrar = "/html/cadastro.html";

  registrar.addEventListener("click", (ev) => {
    ev.preventDefault();
    closeregistrar(hrefregistrar);
  });

  function closeregistrar(href) {
    console.log("maca");
    window.location.href = href;
  }
}

init();
