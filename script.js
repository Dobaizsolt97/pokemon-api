let input = document.querySelector(".search");
let button = document.querySelector("#finder");
let image = document.getElementById("poke-img");
let span = document.getElementById("poke-name");
let span1 = document.getElementById("poke-type");
let right = document.getElementById("right");
let left = document.getElementById("left");
let up = document.getElementById("up");
let down = document.getElementById("down");
let redBtn = document.getElementById("red-btn");
let greenBtn = document.getElementById("blk-btn");
let container = document.querySelector(".container");
let called = false;
const body = document.querySelector("body");
let pokemoncalledid;
button.addEventListener("click", async () => {
  let pokemon = input.value.toLocaleLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  let response = await fetch(url);
  let data = await response.json();

  const pokeentry = {
    name: data.name,
    id: data.id,
    img: [data.sprites["front_default"], data.sprites["back_default"]],
    type: data.types.map(type => type.type.name).join(",")
  };

  image.innerHTML = `<img class='inserted' src='${pokeentry.img[0]}'></img>`;
  span.innerHTML = `<h3>${pokeentry.name}</h3>
  <p>${pokeentry.type}</p>`;
  called = true;
  pokemoncalledid = pokeentry.id;
});

right.addEventListener("click", async () => {
  if (called) {
    let pokemon = pokemoncalledid;
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
    
    image.innerHTML = `<img class='inserted' src='${pokeentry.img[1]}'></img>`;
  }
});
left.addEventListener("click", async () => {
  if (called) {
    let pokemon = pokemoncalledid;
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
    image.innerHTML = `<img class='inserted' src='${pokeentry.img[0]}'></img>`;
  }
});
up.addEventListener("click", async () => {
  if (called && pokemoncalledid != 450) {
    let pokemon = pokemoncalledid + 1;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    let response = await fetch(url);
    let data = await response.json();
    const pokeentry = {
      name: data.name,
      id: data.id,
      img: [data.sprites["front_default"], data.sprites["back_default"]],
      type: data.types.map(type => type.type.name).join(",")
    };

    image.innerHTML = `<img class='inserted' src='${pokeentry.img[0]}'></img>`;
    span.innerHTML = `<h3>${pokeentry.name}</h3>
  <p>${pokeentry.type}</p>
  `;
    pokemoncalledid += 1;
  }
});
down.addEventListener("click", async () => {
  if (called && pokemoncalledid != 1) {
    let pokemon = pokemoncalledid - 1;
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
    span.innerHTML = `<h3>${pokeentry.name}</h3>
  <p>${pokeentry.type}</p>
  `;
    pokemoncalledid -= 1;
  }
});
redBtn.addEventListener("click", async () => {
  let pokemon = Math.floor(Math.random() * 451);
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
  span.innerHTML = `<h3>${pokeentry.name}</h3>
  <p>${pokeentry.type}</p>
    `;

  pokemoncalledid = pokeentry.id;
  called = true;
});
greenBtn.addEventListener("click", async () => {
  if (called) {
    let pokemon = pokemoncalledid;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    let response = await fetch(url);
    let data = await response.json();
    const pokeentry = {
      name: data.name,
      id: data.id,
      img: [data.sprites["front_default"], data.sprites["back_default"]],
      type: data.types.map(type => type.type.name).join(","),
      weight: data.weight / 10,
      height: data.height * 0.08
    };
    //span.textContent = `${(pokeentry.weight * 0.45).toFixed(0)} kilograms
    //${(pokeentry.height * 0.3).toFixed(1)} meters tall`;
    span.innerHTML = `<h3 class='greeninsert'> ${pokeentry.weight.toFixed(
      1
    )}gk</h3>
  <p class='greeninsert'>${pokeentry.height.toFixed(1)}m</p>`;
  }
});

