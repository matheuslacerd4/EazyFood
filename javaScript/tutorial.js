function init() {
  const btngostou = document.getElementById("btnlike");

  btngostou.addEventListener("click", (ev) => {
    ev.preventDefault();
    gostou();
  });
  btngostou.addEventListener("dblclick", (ev) => {
    ev.preventDefault();
    ngostou();
  });

  function gostou() {
    btngostou.style.fill = "#8e407b";
  }
  function ngostou() {
    btngostou.style.fill = "#fff";
  }
}

init();
