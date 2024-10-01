//ASIDE

const aside = document.querySelector("aside");
const asideContent = `<a href="#null" target="_self">Regístrate gratis y obtén un 15% dto. en tu primera compra</a>`;
aside.innerHTML = asideContent;

//HEADER

const header = document.querySelector("header");
const nav = document.createElement("nav");

//Icono de menú

const menuAnchor = document.createElement("a");
menuAnchor.href = "#null";
menuAnchor.target = "_self";
menuAnchor.classList = "hidden";
const menuImage = document.createElement("img");
menuImage.src =
  "https://res.cloudinary.com/darvwfw0u/image/upload/v1727793319/menu-icon_z3gewo.svg";
menuImage.alt = "Icono de menú";
menuAnchor.appendChild(menuImage);
nav.appendChild(menuAnchor);

//Logo de la tienda

const logoAnchor = document.createElement("a");
logoAnchor.href = "#null";
logoAnchor.target = "_self";
logoAnchor.classList = "logo";
const logoImage = document.createElement("img");
logoImage.src =
  "https://res.cloudinary.com/darvwfw0u/image/upload/v1727792268/logo-tienda_x3le9n.png";
logoImage.alt = "Logo FC Barcelona Tienda";
logoAnchor.appendChild(logoImage);
nav.appendChild(logoAnchor);

//Links a otras secciones

const linksSecciones = document.createElement("ul");
linksSecciones.id = "sectionLinks";

const secciones = [
  "Equipaciones",
  "Entrenamiento",
  "Moda",
  "Memorabilia",
  "Accesorios",
  "Rebajas",
];

for (const seccion of secciones) {
  const li = document.createElement("li");
  li.innerHTML = `
  <a href="#null" target="_self">
  ${seccion}
  </a>
  `;
  linksSecciones.appendChild(li);
}
nav.appendChild(linksSecciones);

//Links de los iconos

const linksIconos = document.createElement("ul");
linksIconos.id = "iconsLinks";

const iconosHeader = [
  {
    icon: "https://res.cloudinary.com/darvwfw0u/image/upload/v1727793477/search-icon_tgsymb.svg",
    name: "Icono de búsqueda",
  },
  {
    icon: "https://res.cloudinary.com/darvwfw0u/image/upload/v1727793445/person-icon_vhgxhf.svg",
    name: "Icono de persona",
  },
  {
    icon: "https://res.cloudinary.com/darvwfw0u/image/upload/v1727793461/shopping-bag-icon_ecrjqw.svg",
    name: "Icono de cesta",
  },
];

for (const icono of iconosHeader) {
  const li = document.createElement("li");
  li.innerHTML = `
   <a href="#null target="_self">
      <img src="${icono.icon}" alt="${icono.name}"  />
    </a>
  `;
  linksIconos.appendChild(li);
}
nav.appendChild(linksIconos);

//Adjuntamos el nav al header

header.appendChild(nav);

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

const jugadoras = [
  {
    number: 1,
    name: "Gemma",
    position: "Portera",
    image:
      "https://www.fcbarcelona.com/photo-resources/2023/10/16/782e2b0e-36d0-4951-b98b-3bb4270a4fb7/25-Gemma.jpg?width=640&height=400",
  },
  {
    number: 4,
    name: "María León",
    position: "Defensa",
    image:
      "https://www.fcbarcelona.com/photo-resources/2023/10/16/fd8fdbd0-aade-4a07-ac1e-b72a81f99d43/04-Mapi.jpg?width=640&height=400",
  },
  {
    number: 22,
    name: "Ona Batlle",
    position: "Defensa",
    image:
      "https://www.fcbarcelona.com/photo-resources/2023/10/16/ae61cf98-09cf-465e-8bb1-43426ec027f7/22-Ona_batlle.jpg?width=640&height=400",
  },
  {
    number: 11,
    name: "Alexia",
    position: "Centrocampista",
    image:
      "https://www.fcbarcelona.com/photo-resources/2023/10/16/74b498d2-032c-4d84-b24c-e8d7d0fa575b/11-Alexia.jpg?width=640&height=400",
  },
  {
    number: 12,
    name: "Patri",
    position: "Centrocampista",
    image:
      "https://www.fcbarcelona.com/photo-resources/2023/10/16/b253d4b3-013e-4279-ab81-f2d37ac18544/12-Patri.jpg?width=640&height=400",
  },
  {
    number: 23,
    name: "Engen",
    position: "Centrocampista",
    image:
      "https://www.fcbarcelona.com/photo-resources/2023/10/16/906fb7ad-5be6-424e-8479-0cabc0c2785c/23-Engen.jpg?width=640&height=400",
  },
  {
    number: 7,
    name: "Paralluelo",
    position: "Delantera",
    image:
      "https://www.fcbarcelona.com/photo-resources/2023/10/16/f13c1c0c-df29-43f2-b24c-63c5d7da3fc8/07-Paralluelo.jpg?width=640&height=400",
  },
  {
    number: 16,
    name: "Rolfö",
    position: "Delantera",
    image:
      "https://www.fcbarcelona.com/photo-resources/2023/10/16/13ce36ed-009d-4dce-b63f-e110f129ffe8/16-Rolfo.jpg?width=640&height=400",
  },
];

const mostrarJugadores = () => {
  const contenedorJugadores = document.getElementById("equipoMasculino");
  contenedorJugadores.innerHTML = "";
  document.getElementById("equipoFemenino").style.display = "none";
  document.getElementById("equipoMasculino").style.display = "grid";
  for (const jugador of jugadores) {
    const li = document.createElement("li");
    li.innerHTML = `
    <a href="#null target="_self">
      <img src="${jugador.image}" alt="${jugador.name}"  />
    </a>
    <p>#${jugador.number}</p>
    <h3>${jugador.name}</h3>
    <p>${jugador.position}</p>
    `;
    contenedorJugadores.appendChild(li);
  }
};

const mostrarJugadoras = () => {
  const contenedorJugadoras = document.getElementById("equipoFemenino");
  contenedorJugadoras.innerHTML = "";
  document.getElementById("equipoFemenino").style.display = "grid";
  document.getElementById("equipoMasculino").style.display = "none";
  for (const jugadora of jugadoras) {
    const li = document.createElement("li");
    li.innerHTML = `
    <a href="#null" target="_self">
      <img src="${jugadora.image}" alt="${jugadora.name}"  />
    </a>
    <p>#${jugadora.number}</p>
    <h3>${jugadora.name}</h3>
    <p>${jugadora.position}</p>
    `;
    contenedorJugadoras.appendChild(li);
  }
};

window.onload = mostrarJugadores;

document
  .getElementById("masculino")
  .addEventListener("click", mostrarJugadores);
document.getElementById("femenino").addEventListener("click", mostrarJugadoras);

//SECTION #MODA

const novedades = [
  {
    title: "Novedades hombre",
    image:
      "https://res.cloudinary.com/darvwfw0u/image/upload/v1727354236/novedades-hombre_tzsbhg.webp",
  },
  {
    title: "Novedades mujer",
    image:
      "https://res.cloudinary.com/darvwfw0u/image/upload/v1727354233/novedades-mujer_vuhxrj.webp",
  },
  {
    title: "Novedades niños/as",
    image:
      "https://res.cloudinary.com/darvwfw0u/image/upload/v1727354227/novedades-nin%CC%83os_dwvsgh.webp",
  },
];

const productos = [
  {
    name: "Camiseta negra Barça",
    price: 34.99,
    seller: "FC Barcelona Tienda",
    image:
      "https://res.cloudinary.com/darvwfw0u/image/upload/v1727621655/camiseta-negra-barc%CC%A7a_r5nmql.webp",
  },
  {
    name: "Camiseta azul Barça",
    price: 34.99,
    seller: "FC Barcelona Tienda",
    image:
      "https://res.cloudinary.com/darvwfw0u/image/upload/v1727621735/camiseta-azul-barc%CC%A7a_zlupyo.webp",
  },
  {
    name: "Camiseta azul Barça - Mujer",
    price: 34.99,
    seller: "FC Barcelona Tienda",
    image:
      "https://res.cloudinary.com/darvwfw0u/image/upload/v1727621815/camiseta-azul-barc%CC%A7a-mujer_gdsy0i.webp",
  },
  {
    name: "Camisa blanca The Club",
    price: 149.99,
    seller: "FC Barcelona Tienda",
    image:
      "https://res.cloudinary.com/darvwfw0u/image/upload/v1727621988/camisa-blanca-the-club_fkuvtm.webp",
  },
  {
    name: "Sudadera azul marino Barça - Mujer",
    price: 64.99,
    seller: "FC Barcelona Tienda",
    image:
      "https://res.cloudinary.com/darvwfw0u/image/upload/v1727622352/sudadera-azul-marino-barc%CC%A7a-mujer_x6akba.webp",
  },
  {
    name: "Camiseta retro blaugrana Barça Cruyff",
    price: 49.99,
    seller: "FC Barcelona Tienda",
    image:
      "https://res.cloudinary.com/darvwfw0u/image/upload/v1727622487/camiseta-retro-blaugrana-barc%CC%A7a-cruyff_a8gfqb.webp",
  },
  {
    name: "Camiseta crop azulgrana Barça - Mujer",
    price: 34.99,
    seller: "FC Barcelona Tienda",
    image:
      "https://res.cloudinary.com/darvwfw0u/image/upload/v1727622605/camiseta-crop-azulgrana-barc%CC%A7a-mujer_iets8i.webp",
  },
  {
    name: "Sudadera Força Barça",
    price: 64.99,
    seller: "FC Barcelona Tienda",
    image:
      "https://res.cloudinary.com/darvwfw0u/image/upload/v1727622717/sudadera-forc%CC%A7a-barc%CC%A7a_klbplp.webp",
  },
  {
    name: "Camiseta Equipación 1995-97",
    price: 69.99,
    seller: "FC Barcelona Tienda",
    image:
      "https://res.cloudinary.com/darvwfw0u/image/upload/v1727622889/camiseta-equipacion-1995-97_f6x40r.webp",
  },
  {
    name: "Camiseta estampada roja escudo Barça",
    price: 39.99,
    seller: "FC Barcelona Tienda",
    image:
      "https://res.cloudinary.com/darvwfw0u/image/upload/v1727623366/camiseta-estampada-roja-escudo-barc%CC%A7a_ub5kyd.webp",
  },
  {
    name: "Polo grana Barça",
    price: 44.99,
    seller: "FC Barcelona Tienda",
    image:
      "https://res.cloudinary.com/darvwfw0u/image/upload/v1727623425/polo-grana-barc%CC%A7a_lce12k.webp",
  },
  {
    name: "Chaqueta con botones FC Barcelona - Mujer",
    price: 94.99,
    seller: "FC Barcelona Tienda",
    image:
      "https://res.cloudinary.com/darvwfw0u/image/upload/v1727623487/chaqueta-con-botones-fc-barcelona-mujer_qxiubv.webp",
  },
];

//Seleccionamos el ul de NOVEDADES y pintamos cada una de las cartas
const novedadesContenedor = document.querySelector("#novedades");

for (const novedad of novedades) {
  const li = document.createElement("li");
  li.innerHTML = `
  <img src="${novedad.image}" alt="${novedad.title}"  />
  <a href="#null" target="_self">
    <h2>${novedad.title}</h2>
  </a>
  `;
  novedadesContenedor.appendChild(li);
}

//Seleccionamos el ul de PRODUCTOS y pintamos cada una de las cartas
const productosContenedor = document.querySelector("#productos");

for (const producto of productos) {
  const li = document.createElement("li");
  li.innerHTML = `
  <h3>${producto.name}</h3>
   <a href="#null" target="_self">
      <img src="${producto.image}" alt="${producto.name}"  />
    </a>
    <p>${producto.price} €</p>
  `;
  productosContenedor.appendChild(li);
}

//KAROL G//
const fotos = [
  {
    image:
      "https://store.fcbarcelona.com/cdn/shop/files/241KGM_1_3df43531-ca39-483d-8c6c-5bd347169f18.jpg?v=1712647153&width=1200",
  },
  {
    image:
      "https://store.fcbarcelona.com/cdn/shop/files/2403_DP_SPOTIFYxFCB_F001_084_A1_FULLRES.jpg?v=1712647494&width=1200",
  },
  {
    image:
      "https://store.fcbarcelona.com/cdn/shop/files/2403_DP_SPOTIFYxFCB_COLORS_F001_093_A2_FULLRES.jpg?v=1712647338&width=1200",
  },
  {
    image:
      "https://store.fcbarcelona.com/cdn/shop/files/2403_DP_SPOTIFYxFCB_COLORS_F003_158_54cf8294-b33c-4452-b20a-f95188c5a19d.jpg?v=1712844613&width=1200",
  },
  {
    image:
      "https://store.fcbarcelona.com/cdn/shop/files/GP22722.jpg?v=1712647326&width=1200",
  },
  {
    image:
      "https://store.fcbarcelona.com/cdn/shop/files/2403_DP_SPOTIFYxFCB_F004_105_A1_FULLRES_ff753434-cfaf-4aaa-a143-c1861e9cc17d.jpg?v=1712844638&width=1200",
  },
  {
    image:
      "https://store.fcbarcelona.com/cdn/shop/files/2403_DP_SPOTIFYxFCB_COLORS_F002_075_A2_FULLRES.jpg?v=1712758453&width=1200",
  },
  {
    image:
      "https://store.fcbarcelona.com/cdn/shop/files/241KGMF_1_63ac37da-0b30-478a-8435-e77c9b75b39f.jpg?v=1712647159&width=1200",
  },
  {
    image:
      "https://store.fcbarcelona.com/cdn/shop/files/2403_DP_SPOTIFYxFCB_COLORS_F005_072_A1_FULLRES_602da1cd-df06-45ad-9c7f-0a6da3680755.jpg?v=1712843669&width=1200",
  },
];

//Seleccionamos el ul de karolCollection y pintamos cada una de las cartas
const karolContenedor = document.querySelector("#karolCollection");

for (const foto of fotos) {
  const li = document.createElement("li");
  li.innerHTML = `
   <a href="#null" target="_self">
      <img src="${foto.image}" alt=""  />
    </a>
  `;
  karolContenedor.appendChild(li);
}

//FOOTER//

const listaAyuda = document.createElement("ul");
listaAyuda.id = "ayuda";

const enlaces = [
  "Ayuda",
  "Pedidos",
  "Envíos y entregas",
  "Devoluciones",
  "Formas de pago",
  "Socios y Peñas",
  "Contáctanos",
  "Buscador de tiendas",
];

for (const enlace of enlaces) {
  const li = document.createElement("li");
  li.innerHTML = `
  <a href="#null" target="_self">
  ${enlace}
  </a>
  `;
  listaAyuda.appendChild(li);
}

document.body.appendChild(listaAyuda);

const tarjetas = [
  {
    logo: "https://res.cloudinary.com/darvwfw0u/image/upload/v1727782345/mastercard_llwdzc.svg",
    name: "Mastercard",
  },
  {
    logo: "https://res.cloudinary.com/darvwfw0u/image/upload/v1727782345/maestro_sp6pke.svg",
    name: "Maestro",
  },
  {
    logo: "https://res.cloudinary.com/darvwfw0u/image/upload/v1727782345/apple-pay_kamytk.svg",
    name: "Apple Pay",
  },
  {
    logo: "https://res.cloudinary.com/darvwfw0u/image/upload/v1727782345/visa_tgxyg0.svg",
    name: "Visa",
  },
  {
    logo: "https://res.cloudinary.com/darvwfw0u/image/upload/v1727782345/paypal_r5xwql.svg",
    name: "Paypal",
  },
  {
    logo: "https://res.cloudinary.com/darvwfw0u/image/upload/v1727782345/google-pay_reozus.svg",
    name: "Google Pay",
  },
];

const pagoContainer = document.querySelector("#pago");

for (const tarjeta of tarjetas) {
  const li = document.createElement("li");
  li.innerHTML = `
    <img src="${tarjeta.logo}" alt="${tarjeta.name}"  />
  `;
  pagoContainer.appendChild(li);
}

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
  <a href="${red.link}" target="_self">
    <img src="${red.logo}" alt="${red.name}"  />
  </a>
  `;
  socialContainer.appendChild(li);
}
