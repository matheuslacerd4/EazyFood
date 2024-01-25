function init() {
  const btnsalv = document.getElementById("btnsalv");
  const btnlike = document.getElementById("btnlike");

  btnsalv.addEventListener("click", (ev) => {
    ev.preventDefault();
    stylesalvar();
  });
  btnsalv.addEventListener("dblclick", (ev) => {
    ev.preventDefault();
    removsalver();
  });

  btnlike.addEventListener("click", (ev) => {
    ev.preventDefault();
    gostou();
  });
  btnlike.addEventListener("dblclick", (ev) => {
    ev.preventDefault();
    ngostou();
  });

  function stylesalvar() {
    btnsalv.style.borderColor = "#8e407b";
    btnsalv.style.fill = "#8e407b";
  }
  function removsalver() {
    btnsalv.style.borderColor = "#fff";
    btnsalv.style.fill = "#fff";
  }

  function gostou() {
    btnlike.style.fill = "#8e407b";
  }

  function ngostou() {
    btnlike.style.fill = "#fff";
  }
}
/* teste */
init();
