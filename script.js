let input = document.querySelector(".search");
let button = document.querySelector("#finder");
let image = document.getElementById("poke-img");
let span = document.getElementById("poke-name");
let right = document.getElementById("right");
let left = document.getElementById("left");
let up = document.getElementById("up");
let down = document.getElementById("down");
let redBtn = document.getElementById("red-btn");
let called = false;
let pokemoncalledid;
button.addEventListener("click", async () => {
  let pokemon = input.value;
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  let response = await fetch(url);
  let data = await response.json();

  const pokeentry = {
    name: data.name,
    id: data.id,
    img: [data.sprites["front_default"], data.sprites["back_default"]],
    type: data.types.map(type => type.type.name).join(",")
  };
  console.log(pokeentry);
  image.innerHTML = `<img class='inserted' src='${pokeentry.img[0]}'></img>`;
  span.textContent = `${pokeentry.name}
  ${pokeentry.type}`;
  called = true;
  pokemoncalledid = pokeentry.id;
});

right.addEventListener("click", async () => {
  if (called) {
    let pokemon = input.value;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    const pokeentry = {
      name: data.name,
      id: data.id,
      img: [data.sprites["front_default"], data.sprites["back_default"]],
      type: data.types.map(type => type.type.name).join(",")
    };
    console.log(pokeentry);
    image.innerHTML = `<img class='inserted' src='${pokeentry.img[1]}'></img>`;
  }
});
left.addEventListener("click", async () => {
  if (called) {
    let pokemon = input.value;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    const pokeentry = {
      name: data.name,
      id: data.id,
      img: [data.sprites["front_default"], data.sprites["back_default"]],
      type: data.types.map(type => type.type.name).join(",")
    };
    console.log(pokeentry);
    image.innerHTML = `<img class='inserted' src='${pokeentry.img[0]}'></img>`;
  }
});
up.addEventListener("click", async () => {
  if (called && pokemoncalledid != 450) {
    let pokemon = pokemoncalledid + 1;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    const pokeentry = {
      name: data.name,
      id: data.id,
      img: [data.sprites["front_default"], data.sprites["back_default"]],
      type: data.types.map(type => type.type.name).join(",")
    };
    console.log(pokeentry);
    image.innerHTML = `<img class='inserted' src='${pokeentry.img[0]}'></img>`;
    span.textContent = `${pokeentry.name}
  ${pokeentry.type}`;
    pokemoncalledid += 1;
  }
});
down.addEventListener("click", async () => {
  if (called && pokemoncalledid != 1) {
    let pokemon = pokemoncalledid - 1;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    const pokeentry = {
      name: data.name,
      id: data.id,
      img: [data.sprites["front_default"], data.sprites["back_default"]],
      type: data.types.map(type => type.type.name).join(",")
    };
    console.log(pokeentry);
    image.innerHTML = `<img class='inserted' src='${pokeentry.img[0]}'></img>`;
    span.textContent = `${pokeentry.name}
  ${pokeentry.type}`;
    pokemoncalledid -= 1;
  }
});
redBtn.addEventListener("click", async () => {
  let pokemon = Math.floor(Math.random() * 451);
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  const pokeentry = {
    name: data.name,
    id: data.id,
    img: [data.sprites["front_default"], data.sprites["back_default"]],
    type: data.types.map(type => type.type.name).join(",")
  };
  console.log(pokeentry);
  image.innerHTML = `<img class='inserted' src='${pokeentry.img[0]}'></img>`;
  span.textContent = `${pokeentry.name}
    ${pokeentry.type}`;
  pokemoncalledid -= 1;
});
