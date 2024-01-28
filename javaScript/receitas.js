const state = {
  recipe: {},
};

async function init() {
  const url = window.location.search;
  const id = url.split("=")[1];
  await searchRecipeById(id);
  renderrecipe();
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

async function searchRecipeById(id) {
  try {
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}?key=6d82df91-bef9-41f9-9f0c-fc404dcb088f`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    state.recipe = data.data.recipe;
    console.log(state);
  } catch (error) {
    console.log(error.message);
  }
}

function renderrecipe() {
  const receita = document.querySelector(".receita");
  receita.insertAdjacentHTML(
    "afterbegin",
    `<h1 class="title">${state.recipe.title}</h1>
    <div class="imgreceita" style="background-image: url(${
      state.recipe.image_url
    })"></div>
    <div id="interactions">
      <div id="btnsocial">
        <button id="btnwhats">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#25d366"
            class="bi bi-whatsapp"
            viewBox="0 0 16 16"
          >
            <path
              d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
            />
          </svg>
        </button>
        <button id="btntele">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#406fd3"
            class="bi bi-telegram"
            viewBox="0 0 16 16"
          >
            <path
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"
            />
          </svg>
        </button>
      </div>
      <button id="btnsalv">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-bookmark-check"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"
          />
          <path
            d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"
          />
        </svg>
      </button>
    </div>
    <div id="info">
      <span
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-alarm-fill svginfo"
          viewBox="0 0 16 16"
        >
          <path
            d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5m2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527"
          />
        </svg>
        ${state.recipe.cooking_time} min </span
      >
      <span
        >
        ${state.recipe.servings} Porções</span
      >
    </div>
  </section>
  <section class="ingredientes">
    <h3>ingredientes</h3>
    <ul>
    ${state.recipe.ingredients.map((ingredient) => {
      return `<li>
        <span>${ingredient.description}</span>
        <strong>${ingredient.quantity} ${ingredient.unit}</strong>
      </li>`;
    })}
    </ul>
  </section>`
  );
}

init();
