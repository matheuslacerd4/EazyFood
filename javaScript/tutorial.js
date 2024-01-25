function init() {
  const btngostou = document.querySelector("#btnlike");

  btngostou.addEventListener("click", (ev) => {
    ev.preventDefault();
    dlike();
  });

  function dlike() {
    btngostou.style.color = "#8e407b";
  }
}

init();
