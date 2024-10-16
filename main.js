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

//SECTION #NUEVASEQUIPACIONES

const main = document.querySelector("main");

//Creamos la sección con su id

const nuevasEquipaciones = document.createElement("section");
nuevasEquipaciones.id = "nuevasEquipaciones";

//Creamos el vídeo para escritorio

const videoDesktop = document.createElement("video");
videoDesktop.classList = "video-desktop";
videoDesktop.controls = true;
videoDesktop.autoplay = true;
videoDesktop.muted = true;
videoDesktop.loop = true;
videoDesktop.playsInline = true;
videoDesktop.src =
  "https://res.cloudinary.com/darvwfw0u/video/upload/v1727866512/vi%CC%81deo-escritorio_kfujbf.mp4";
videoDesktop.type = "video/mp4";

//Creamos el vídeo para móvil

const videoMobile = document.createElement("video");
videoMobile.classList = "video-mobile";
videoMobile.controls = true;
videoMobile.autoplay = true;
videoMobile.muted = true;
videoMobile.loop = true;
videoMobile.playsInline = true;
videoMobile.src =
  "https://res.cloudinary.com/darvwfw0u/video/upload/v1727866197/vi%CC%81deo-mo%CC%81vil_w7dpwh.mp4";
videoMobile.type = "video/mp4";

//Creamos el div con el h1 y su enlace

const divInfo = document.createElement("div");
divInfo.classList = "info";

const h1 = document.createElement("h1");
h1.textContent = "Nuevas equipaciones 24/25";

const infoAnchor = document.createElement("a");
infoAnchor.href = "#null";
infoAnchor.target = "_self";
infoAnchor.classList = "shop";
infoAnchor.textContent = "Comprar";

//Adjuntamos todo

divInfo.appendChild(h1);
divInfo.appendChild(infoAnchor);

nuevasEquipaciones.appendChild(videoDesktop);
nuevasEquipaciones.appendChild(videoMobile);
nuevasEquipaciones.appendChild(divInfo);

main.appendChild(nuevasEquipaciones);

//SECTION #JUGADORES

const players = document.createElement("section");
players.id = "jugadores";

const playersH2 = document.createElement("h2");
playersH2.textContent = "Comprar por jugador/a";

const divBotones = document.createElement("div");
divBotones.classList = "botonesEquipos";

const equipoMasculinoBtn = document.createElement("button");
equipoMasculinoBtn.id = "masculino";
equipoMasculinoBtn.textContent = "Equipo masculino";

const equipoFemeninoBtn = document.createElement("button");
equipoFemeninoBtn.id = "femenino";
equipoFemeninoBtn.textContent = "Equipo femenino";

const ulEquipoMasculino = document.createElement("ul");
ulEquipoMasculino.id = "equipoMasculino";

const ulEquipoFemenino = document.createElement("ul");
ulEquipoFemenino.id = "equipoFemenino";

divBotones.appendChild(equipoMasculinoBtn);
divBotones.appendChild(equipoFemeninoBtn);

players.appendChild(playersH2);
players.appendChild(divBotones);
players.appendChild(ulEquipoMasculino);
players.appendChild(ulEquipoFemenino);

main.appendChild(players);

//Arrays de lxs futbolistas

const jugadores = [
  {
    number: 1,
    name: "Ter Stegen",
    position: "Portero",
    image:
      "https://res.cloudinary.com/darvwfw0u/image/upload/v1727870749/stegen_cslrck.webp",
  },
  {
    number: 3,
    name: "Alejandro Balde",
    position: "Defensa",
    image:
      "https://res.cloudinary.com/darvwfw0u/image/upload/v1727870748/balde_xg6syt.webp",
  },
  {
    number: 4,
    name: "Ronald Araújo",
    position: "Defensa",
    image:
      "https://res.cloudinary.com/darvwfw0u/image/upload/v1727870749/araujo_xijndg.webp",
  },
  {
    number: 8,
    name: "Pedri",
    position: "Centrocampista",
    image:
      "https://res.cloudinary.com/darvwfw0u/image/upload/v1727870748/pedri_kfh5ah.webp",
  },
  {
    number: 16,
    name: "Fermín López",
    position: "Centrocampista",
    image:
      "https://res.cloudinary.com/darvwfw0u/image/upload/v1727870749/fermin_uxpeyg.webp",
  },
  {
    number: 21,
    name: "Frenkie de Jong",
    position: "Centrocampista",
    image:
      "https://res.cloudinary.com/darvwfw0u/image/upload/v1727870749/frenkie_sivtsq.webp",
  },
  {
    number: 9,
    name: "Robert Lewandowski",
    position: "Delantero",
    image:
      "https://res.cloudinary.com/darvwfw0u/image/upload/v1727870748/robert_og4rt9.webp",
  },
  {
    number: 10,
    name: "Lamine Yamal",
    position: "Delantero",
    image:
      "https://res.cloudinary.com/darvwfw0u/image/upload/v1727870749/lamine_pn2why.webp",
  },
];

const jugadoras = [
  {
    number: 1,
    name: "Gemma",
    position: "Portera",
    image:
      "https://res.cloudinary.com/darvwfw0u/image/upload/v1727871116/gemma_gre3ok.webp",
  },
  {
    number: 4,
    name: "María León",
    position: "Defensa",
    image:
      "https://res.cloudinary.com/darvwfw0u/image/upload/v1727871115/mapi_pish7w.webp",
  },
  {
    number: 22,
    name: "Ona Batlle",
    position: "Defensa",
    image:
      "https://res.cloudinary.com/darvwfw0u/image/upload/v1727871113/ona_frrmgt.webp",
  },
  {
    number: 11,
    name: "Alexia",
    position: "Centrocampista",
    image:
      "https://res.cloudinary.com/darvwfw0u/image/upload/v1727871114/alexia_ouo0us.webp",
  },
  {
    number: 12,
    name: "Patri",
    position: "Centrocampista",
    image:
      "https://res.cloudinary.com/darvwfw0u/image/upload/v1727871114/patri_u485zn.webp",
  },
  {
    number: 23,
    name: "Engen",
    position: "Centrocampista",
    image:
      "https://res.cloudinary.com/darvwfw0u/image/upload/v1727871112/engen_fuqxom.webp",
  },
  {
    number: 7,
    name: "Paralluelo",
    position: "Delantera",
    image:
      "https://res.cloudinary.com/darvwfw0u/image/upload/v1727871112/salma_g8xh2q.webp",
  },
  {
    number: 16,
    name: "Rolfö",
    position: "Delantera",
    image:
      "https://res.cloudinary.com/darvwfw0u/image/upload/v1727871112/frido_v0mkfw.webp",
  },
];

//Funciones para mostrar lxs jugadorxs por pantalla

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

//Para que al cargar la página salga por defecto la plantilla del equipo masculino y al pulsar cada botón aparezca su contenido correspondiente

window.onload = mostrarJugadores;

document
  .getElementById("masculino")
  .addEventListener("click", mostrarJugadores);

document.getElementById("femenino").addEventListener("click", mostrarJugadoras);

// Función para añadir la clase active cada vez que se clicka un botón

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});

//SECTION #MODA

const fashion = document.createElement("section");
fashion.id = "moda";

const fashionH2 = document.createElement("h2");
fashionH2.textContent = "Moda";

const ulNovedades = document.createElement("ul");
ulNovedades.id = "novedades";

const ulProductos = document.createElement("ul");
ulProductos.id = "productos";

fashion.appendChild(fashionH2);
fashion.appendChild(ulNovedades);
fashion.appendChild(ulProductos);

main.appendChild(fashion);

//Array de novedades

const novedades = [
  {
    title: "Novedades hombre",
    image:
      "https://res.cloudinary.com/darvwfw0u/image/upload/v1727354236/novedades-hombre_tzsbhg.webp",
    alt: "Alejandro Balde con la tercera equipación del Barça",
  },
  {
    title: "Novedades mujer",
    image:
      "https://res.cloudinary.com/darvwfw0u/image/upload/v1727354233/novedades-mujer_vuhxrj.webp",
    alt: "Salma Paralluelo con la tercera equipación del Barça",
  },
  {
    title: "Novedades niños/as",
    image:
      "https://res.cloudinary.com/darvwfw0u/image/upload/v1727354227/novedades-nin%CC%83os_dwvsgh.webp",
    alt: "Tercera equipación del Barça",
  },
];

//Array de productos

const productos = [
  {
    name: "Camiseta negra Barça",
    price: 34.99,
    image:
      "https://res.cloudinary.com/darvwfw0u/image/upload/v1727621655/camiseta-negra-barc%CC%A7a_r5nmql.webp",
  },
  {
    name: "Camiseta azul Barça",
    price: 34.99,
    image:
      "https://res.cloudinary.com/darvwfw0u/image/upload/v1727621735/camiseta-azul-barc%CC%A7a_zlupyo.webp",
  },
  {
    name: "Camiseta azul Barça - Mujer",
    price: 34.99,
    image:
      "https://res.cloudinary.com/darvwfw0u/image/upload/v1727621815/camiseta-azul-barc%CC%A7a-mujer_gdsy0i.webp",
  },
  {
    name: "Camisa blanca The Club",
    price: 149.99,
    image:
      "https://res.cloudinary.com/darvwfw0u/image/upload/v1727621988/camisa-blanca-the-club_fkuvtm.webp",
  },
  {
    name: "Sudadera azul marino Barça - Mujer",
    price: 64.99,
    image:
      "https://res.cloudinary.com/darvwfw0u/image/upload/v1727622352/sudadera-azul-marino-barc%CC%A7a-mujer_x6akba.webp",
  },
  {
    name: "Camiseta retro blaugrana Barça Cruyff",
    price: 49.99,
    image:
      "https://res.cloudinary.com/darvwfw0u/image/upload/v1727622487/camiseta-retro-blaugrana-barc%CC%A7a-cruyff_a8gfqb.webp",
  },
  {
    name: "Camiseta crop Barça - Mujer",
    price: 34.99,
    image:
      "https://res.cloudinary.com/darvwfw0u/image/upload/v1727622605/camiseta-crop-azulgrana-barc%CC%A7a-mujer_iets8i.webp",
  },
  {
    name: "Sudadera Força Barça",
    price: 64.99,
    image:
      "https://res.cloudinary.com/darvwfw0u/image/upload/v1727622717/sudadera-forc%CC%A7a-barc%CC%A7a_klbplp.webp",
  },
  {
    name: "Camiseta Equipación 1995-97",
    price: 69.99,
    image:
      "https://res.cloudinary.com/darvwfw0u/image/upload/v1727622889/camiseta-equipacion-1995-97_f6x40r.webp",
  },
  {
    name: "Camiseta estampada roja escudo Barça",
    price: 39.99,
    image:
      "https://res.cloudinary.com/darvwfw0u/image/upload/v1727623366/camiseta-estampada-roja-escudo-barc%CC%A7a_ub5kyd.webp",
  },
  {
    name: "Polo grana Barça",
    price: 44.99,
    image:
      "https://res.cloudinary.com/darvwfw0u/image/upload/v1727623425/polo-grana-barc%CC%A7a_lce12k.webp",
  },
  {
    name: "Chaqueta con botones FC Barcelona - Mujer",
    price: 94.99,
    image:
      "https://res.cloudinary.com/darvwfw0u/image/upload/v1727623487/chaqueta-con-botones-fc-barcelona-mujer_qxiubv.webp",
  },
];

//Mostramos por pantalla cada una de las novedades

const novedadesContenedor = document.querySelector("#novedades");

for (const novedad of novedades) {
  const li = document.createElement("li");
  li.innerHTML = `
    <a href="#null" target="_self">
    <h3>${novedad.title}</h3>
  </a>
  <img src="${novedad.image}" alt="${novedad.alt}"  />
  `;
  novedadesContenedor.appendChild(li);
}

//Mostramos por pantalla cada uno de los productos

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

//SECTION #COLABORACION

const nuevaColeccion = document.createElement("section");
nuevaColeccion.id = "colaboracion";

const nuevaColeccionH2 = document.createElement("h2");
nuevaColeccionH2.textContent = "Barça x Karol G";

const ulNuevaColeccion = document.createElement("ul");
ulNuevaColeccion.id = "karolGCollection";

nuevaColeccion.appendChild(nuevaColeccionH2);
nuevaColeccion.appendChild(ulNuevaColeccion);

main.appendChild(nuevaColeccion);

//Array de productos de la nueva colaboración

const fotos = [
  {
    image:
      "https://res.cloudinary.com/darvwfw0u/image/upload/v1728487233/camiseta-karol-hombre_bw7d2b.webp",
    title: "Camiseta masculina de la colección especial con Karol G",
  },
  {
    image:
      "https://res.cloudinary.com/darvwfw0u/image/upload/v1728487234/camiseta-karol-alexia_fieefh.webp",
    title:
      "Alexia Putellas con la camiseta de la colección especial con Karol G",
  },
  {
    image:
      "https://res.cloudinary.com/darvwfw0u/image/upload/v1728487233/camiseta-karol-torres_vyynps.webp",
    title: "Ferrán Torres con la camiseta de la colección especial con Karol G",
  },
  {
    image:
      "https://res.cloudinary.com/darvwfw0u/image/upload/v1728487233/camiseta-karol-robert_gempnp.webp",
    title:
      "Robert Lewandowski con la camiseta de la colección especial con Karol G",
  },
  {
    image:
      "https://res.cloudinary.com/darvwfw0u/image/upload/v1728487399/camisetas-karol_a8zwit.webp",
    title: "Camisetas de la colección especial con Karol G",
  },
  {
    image:
      "https://res.cloudinary.com/darvwfw0u/image/upload/v1728487233/camiseta-karol-salma_uava7a.webp",
    title:
      "Salma Paralluelo con la camiseta de la colección especial con Karol G",
  },
  {
    image:
      "https://res.cloudinary.com/darvwfw0u/image/upload/v1728487232/camiseta-karol-araujo_dzxzxi.webp",
    title: "Ronald Araújo con la camiseta de la colección especial con Karol G",
  },
  {
    image:
      "https://res.cloudinary.com/darvwfw0u/image/upload/v1728487232/camiseta-karol-mujer_yn6oov.webp",
    title: "Camiseta femenina de la colección especial con Karol G",
  },
  {
    image:
      "https://res.cloudinary.com/darvwfw0u/image/upload/v1728487232/camiseta-karol-lamine_uiszw1.webp",
    title: "Lamine Yamal con la camiseta de la colección especial con Karol G",
  },
];

//Mostramos por pantalla cada una de las imágenes

const karolContenedor = document.querySelector("#karolGCollection");

for (const foto of fotos) {
  const li = document.createElement("li");
  li.innerHTML = `
   <a href="#null" target="_self">
      <img src="${foto.image}" alt="${foto.title}"  />
    </a>
  `;
  karolContenedor.appendChild(li);
}

//FOOTER

const footer = document.querySelector("footer");

//Sección del formulario con sus elementos

const seccionFormulario = document.createElement("section");
seccionFormulario.classList = "form-information";

const seccionFormularioH3 = document.createElement("h3");
seccionFormularioH3.textContent = "Suscríbete a nuestros correos electrónicos";

const seccionFormularioParrafo = document.createElement("p");
seccionFormularioParrafo.textContent =
  "Sé el primero en enterarte de nuevas colecciones y ofertas exclusivas.";

const formulario = document.createElement("form");
formulario.action = "/";
formulario.method = "post";
formulario.enctype = "application/x-www-form-urlencoded";
formulario.target = "_self";
formulario.autocomplete = "off";
formulario.novalidate = true;

const label = document.createElement("label");
label.for = "email";
label.textContent = "Correo electrónico:";

const input = document.createElement("input");
input.type = "email";
input.name = "email";
input.id = "email";
input.placeholder = "Correo electrónico";
input.required = true;

const submitBtn = document.createElement("button");
submitBtn.type = "input";
submitBtn.textContent = "Enviar";

formulario.appendChild(label);
formulario.appendChild(input);
formulario.appendChild(submitBtn);

seccionFormulario.appendChild(seccionFormularioH3);
seccionFormulario.appendChild(seccionFormularioParrafo);
seccionFormulario.appendChild(formulario);

const ulEnlacesAyuda = document.createElement("ul");
ulEnlacesAyuda.id = "enlacesAyuda";

const ulIconosPago = document.createElement("ul");
ulIconosPago.id = "iconosPago";

const ulIconosRedes = document.createElement("ul");
ulIconosRedes.id = "iconosRedes";

const parrafo = document.createElement("p");
parrafo.textContent =
  "©FC Barcelona - Non-official Store - Spotify Camp Nou. Powered by ";

const githubAnchor = document.createElement("a");
githubAnchor.href = "https://github.com/marinalsz";
githubAnchor.rel = "noopener";
githubAnchor.target = "_blank";
githubAnchor.textContent = "Marina López";

parrafo.appendChild(githubAnchor);

footer.appendChild(seccionFormulario);
footer.appendChild(ulEnlacesAyuda);
footer.appendChild(ulIconosPago);
footer.appendChild(ulIconosRedes);
footer.appendChild(parrafo);

//Enlaces de ayuda

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

const enlacesContainer = document.querySelector("#enlacesAyuda");

for (const enlace of enlaces) {
  const li = document.createElement("li");
  li.innerHTML = `
  <a href="#null" target="_self">
  ${enlace}
  </a>
  `;
  enlacesContainer.appendChild(li);
}

//Array de métodos de pago

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

const pagoContainer = document.querySelector("#iconosPago");

for (const tarjeta of tarjetas) {
  const li = document.createElement("li");
  li.innerHTML = `
    <img src="${tarjeta.logo}" alt="${tarjeta.name}"  />
  `;
  pagoContainer.appendChild(li);
}

//Array de iconos de redes sociales

const redesSociales = [
  {
    logo: "https://res.cloudinary.com/darvwfw0u/image/upload/v1728481955/twitter_yuxnpt.png",
    name: "Twitter",
    link: "https://x.com/fcbarcelona_es",
  },
  {
    logo: "https://res.cloudinary.com/darvwfw0u/image/upload/v1728481955/facebook_dmlask.png",
    name: "Facebook",
    link: "https://www.facebook.com/fcbarcelona/",
  },
  {
    logo: "https://res.cloudinary.com/darvwfw0u/image/upload/v1728481955/instagram_av73fl.png",
    name: "Instagram",
    link: "https://www.instagram.com/fcbarcelona/",
  },
  {
    logo: "https://res.cloudinary.com/darvwfw0u/image/upload/v1728481955/tik-tok_w1ne5w.png",
    name: "TikTok",
    link: "https://www.tiktok.com/@fcbarcelona",
  },
  {
    logo: "https://res.cloudinary.com/darvwfw0u/image/upload/v1728481955/youtube_imvwz1.png",
    name: "Youtube",
    link: "https://www.youtube.com/user/fcbarcelona",
  },
  {
    logo: "https://res.cloudinary.com/darvwfw0u/image/upload/v1728481955/spotify_jzkan8.png",
    name: "Spotify",
    link: "https://open.spotify.com/user/31gorrj76f2m3wczoifm6f6tbn3q?si=a20bf0c076684729&nd=1",
  },
];

const socialContainer = document.querySelector("#iconosRedes");

for (const red of redesSociales) {
  const li = document.createElement("li");
  li.innerHTML = `
  <a href="${red.link}" target="_self">
    <img src="${red.logo}" alt="${red.name}"  />
  </a>
  `;
  socialContainer.appendChild(li);
}
