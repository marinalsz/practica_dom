//ASIDE
let parrafoAside = document.createElement("p");
let textoAside = document.createTextNode("Regístrate gratis y obtén un 15% dto. en tu primera compra");
parrafoAside.appendChild(textoAside);
let aside = document.querySelector("aside");
aside.appendChild(parrafoAside);

//HEADER
let imgHeader = document.createElement("img");
let header = document.querySelector("header");
header.appendChild(imgHeader);

//SECTION #JUGADORES
const jugadores = [
  {
    number: 1,
    name: "Ter Stegen",
    position: "Portero",
    image:
      "https://www.fcbarcelona.com/photo-resources/2023/10/04/b0033e0e-48a9-416e-ba12-f4c961e527ac/mini_01-MARC-ANDRE_TER_STEGEN.png?width=1340&height=1580",
  },
  {
    number: 3,
    name: "Alejandro Balde",
    position: "Defensa",
    image:
      "https://www.fcbarcelona.com/photo-resources/2023/10/03/4dcaaada-4c05-4dd0-90f6-e331b0523bf2/mini_202209_Fitxes_App_1920x1080_01_ALEJANDRO-BALDE.png?width=1340&height=1580",
  },
  {
    number: 4,
    name: "Ronald Araújo",
    position: "Defensa",
    image:
      "https://www.fcbarcelona.com/photo-resources/2023/10/03/96872777-182f-413a-8ff0-afc524bec116/mini_04-RONALD_ARAUJO.png?width=1340&height=1580",
  },
  {
    number: 8,
    name: "Pedri",
    position: "Centrocampista",
    image:
      "https://www.fcbarcelona.com/photo-resources/2023/10/04/de9aeea0-9ac0-4f64-b298-4fcc1d36a292/mini_08-PEDRI.png?width=1340&height=1580",
  },
  {
    number: 16,
    name: "Fermín López",
    position: "Centrocampista",
    image:
      "https://www.fcbarcelona.com/photo-resources/2024/02/01/8688e3ca-62dc-4d0a-8cd3-69d06699b124/mini_16-FERMIN.png?width=1340&height=1580",
  },
  {
    number: 21,
    name: "Frenkie de Jong",
    position: "Centrocampista",
    image:
      "https://www.fcbarcelona.com/photo-resources/2023/10/04/e666a68c-84f4-49bd-b4d3-111d0d8d050f/mini_21-FRENKIE_DE_JONG.png?width=1340&height=1580",
  },
  {
    number: 9,
    name: "Robert Lewandowski",
    position: "Delantero",
    image:
      "https://www.fcbarcelona.com/photo-resources/2023/10/04/3bc3ad2a-1ad9-421a-b7b5-67d08e8661eb/mini_09-ROBERT_LEWANDOWSKI.png?width=1340&height=1580",
  },
  {
    number: 10,
    name: "Lamine Yamal",
    position: "Delantero",
    image:
      "https://www.fcbarcelona.com/photo-resources/2024/07/11/e8f2f800-2d6c-4055-86fd-08e456ed8da8/Jugador-Lamine_Yamal_2.png?width=1340&height=1580",
  },
];

const playerContainer = document.querySelector("#equipo-masculino");

for (const jugador of jugadores) {
  const li = document.createElement("li");
  li.innerHTML = `
  <a href="${jugador.name}" target="_blank">
    <img src="${jugador.image}" alt="${jugador.name}"  />
  </a>
  `;
  playerContainer.appendChild(li);
}

//SECTION #MODA
const productos = [
  {
    name: "Camiseta negra Barça",
    price: 34.99,
    seller: "FC Barcelona Tienda",
    image:
      "https://store.fcbarcelona.com/cdn/shop/files/FCBESSENTIALSMASC2062.jpg?v=1720609432",
  },
  {
    name: "Camiseta negra Barça",
    price: 34.99,
    seller: "FC Barcelona Tienda",
    image:
      "https://store.fcbarcelona.com/cdn/shop/files/FCBESSENTIALSMASC2062.jpg?v=1720609432",
  },
  {
    name: "Camiseta negra Barça",
    price: 34.99,
    seller: "FC Barcelona Tienda",
    image:
      "https://store.fcbarcelona.com/cdn/shop/files/FCBESSENTIALSMASC2062.jpg?v=1720609432",
  },
  {
    name: "Camiseta negra Barça",
    price: 34.99,
    seller: "FC Barcelona Tienda",
    image:
      "https://store.fcbarcelona.com/cdn/shop/files/FCBESSENTIALSMASC2062.jpg?v=1720609432",
  },
  {
    name: "Camiseta negra Barça",
    price: 34.99,
    seller: "FC Barcelona Tienda",
    image:
      "https://store.fcbarcelona.com/cdn/shop/files/FCBESSENTIALSMASC2062.jpg?v=1720609432",
  },
  {
    name: "Camiseta negra Barça",
    price: 34.99,
    seller: "FC Barcelona Tienda",
    image:
      "https://store.fcbarcelona.com/cdn/shop/files/FCBESSENTIALSMASC2062.jpg?v=1720609432",
  },
  {
    name: "Camiseta negra Barça",
    price: 34.99,
    seller: "FC Barcelona Tienda",
    image:
      "https://store.fcbarcelona.com/cdn/shop/files/FCBESSENTIALSMASC2062.jpg?v=1720609432",
  },
  {
    name: "Camiseta negra Barça",
    price: 34.99,
    seller: "FC Barcelona Tienda",
    image:
      "https://store.fcbarcelona.com/cdn/shop/files/FCBESSENTIALSMASC2062.jpg?v=1720609432",
  },
  {
    name: "Camiseta negra Barça",
    price: 34.99,
    seller: "FC Barcelona Tienda",
    image:
      "https://store.fcbarcelona.com/cdn/shop/files/FCBESSENTIALSMASC2062.jpg?v=1720609432",
  },
  {
    name: "Camiseta negra Barça",
    price: 34.99,
    seller: "FC Barcelona Tienda",
    image:
      "https://store.fcbarcelona.com/cdn/shop/files/FCBESSENTIALSMASC2062.jpg?v=1720609432",
  },
  {
    name: "Camiseta negra Barça",
    price: 34.99,
    seller: "FC Barcelona Tienda",
    image:
      "https://store.fcbarcelona.com/cdn/shop/files/FCBESSENTIALSMASC2062.jpg?v=1720609432",
  },
  {
    name: "Camiseta negra Barça",
    price: 34.99,
    seller: "FC Barcelona Tienda",
    image:
      "https://store.fcbarcelona.com/cdn/shop/files/FCBESSENTIALSMASC2062.jpg?v=1720609432",
  },
];

//FOOTER

const redesSociales = [
  {
    logo: "https://cdn-icons-png.flaticon.com/128/5969/5969020.png",
    name: "Twitter",
    link: "https://x.com/fcbarcelona_es",
  },
  {
    logo: "https://cdn-icons-png.flaticon.com/128/2168/2168281.png",
    name: "Facebook",
    link: "https://www.facebook.com/fcbarcelona/",
  },
  {
    logo: "https://cdn-icons-png.flaticon.com/128/1384/1384015.png",
    name: "Instagram",
    link: "https://www.instagram.com/fcbarcelona/",
  },
  {
    logo: "https://cdn-icons-png.flaticon.com/128/3116/3116491.png",
    name: "TikTok",
    link: "https://www.tiktok.com/@fcbarcelona",
  },
  {
    logo: "https://cdn-icons-png.flaticon.com/128/4494/4494467.png",
    name: "Youtube",
    link: "https://www.youtube.com/user/fcbarcelona",
  },
  {
    logo: "https://cdn-icons-png.flaticon.com/128/2111/2111685.png",
    name: "Spotify",
    link: "https://open.spotify.com/user/31gorrj76f2m3wczoifm6f6tbn3q?si=a20bf0c076684729&nd=1",
  },
];

const socialContainer = document.querySelector("#social");

for (const red of redesSociales) {
  const li = document.createElement("li");
  li.innerHTML = `
  <a href="${red.link}" target="_blank">
    <img src="${red.logo}" alt="${red.name}"  />
  </a>
  `;
  /*  const a = document.createElement("a");
  a.href = red.link;
  const img = document.createElement("img");
  img.src = red.logo;
  img.alt = red.name;
  a.appendChild(img);
  li.appendChild(a); */
  //Al final del todo le inyectamos cada uno de los li's al contenedor
  socialContainer.appendChild(li);
}
