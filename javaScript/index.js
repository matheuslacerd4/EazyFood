function init() {
  const button = document.getElementById("btnupfoto");
  const body = document.getElementsByTagName("main")[0];
  const btnfechar = document.getElementById("btnfechar");

  button.addEventListener("click", (ev) => {
    ev.preventDefault();
    renderUpCardFoto();
  });

  btnfechar.addEventListener("click", (ev) => {
    ev.preventDefault();
    fechar();
  });

  function renderUpCardFoto() {
    body.insertAdjacentHTML(
      "afterbegin",
      `
      <body>
    <div id="cardupfoto" class="container-global">
      <header class="cabecalho">
        <h1>Criar publicação</h1>
        <button id="btnfechar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path
              d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"
            />
          </svg>
        </button>
      </header>
      <section>
        <div class="perfil">
          <img id="userimg" src="../img/perfil2.jpg" />
          <strong id="username">Matheus Lacerda</strong>
        </div>
        <div class="dadosrec">
          <input id="descr" type="text" placeholder="Descrição da receita" />
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-camera btnfoto"
              viewBox="0 0 16 16"
            >
              <path
                d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z"
              />
              <path
                d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
              />
            </svg>
            
          </button>
        </div>

        <div>
          <button id="enviar-receita">Publicar</button>
        </div>
        </section>
        </div>
        </body>
        `
    );
  }

  function fechar() {
    document.getElementById("cardupfoto").classList.add("fechar");
  }
}

init();
