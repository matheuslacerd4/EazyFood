function init() {
  const form = document.querySelector("#createrecipeform");
  form.addEventListener("submit", async function (ev) {
    ev.preventDefault();
    const dataArr = [...new FormData(this)];
    const data = Object.fromEntries(dataArr);
    await uploadRecipe(data);
    window.location.href = "/html/index.html";
  });
}
const uploadRecipe = async function (newRecipe) {
  try {
    const ingredients = Object.entries(newRecipe)
      .filter((entry) => entry[0].startsWith("ingredient") && entry[1] !== "")
      .map((ing) => {
        const ingArr = ing[1].split(",").map((el) => el.trim());
        // const ingArr = ing[1].replaceAll(' ', '').split(',');

        if (ingArr.length !== 3)
          throw new Error(
            "Wrong ingredient format! Please use the correct format."
          );

        const [quantity, unit, description] = ingArr;
        return { quantity: quantity ? +quantity : null, unit, description };
      });

    const recipe = {
      title: newRecipe.title,
      source_url: newRecipe.source_url,
      image_url: newRecipe.image,
      publisher: newRecipe.publisher,
      cooking_time: +newRecipe.cooking_time,
      servings: +newRecipe.servings,
      ingredients,
    };

    await createRecipe(recipe);
    window.alert("Sua receita foi criada com sucesso!");
  } catch (err) {
    window.alert(err.message);
  }
};

async function createRecipe(recipe) {
  try {
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes?key=6d82df91-bef9-41f9-9f0c-fc404dcb088f`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(recipe),
      }
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    throw error;
  }
}

init();
