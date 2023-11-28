import ImgCommerce from "../src/assets/Ecommerce.jpg";
import ImgCard from "../src/assets/interactivecard.jpg";
import ImgPokeApi from "../src/assets/pokeapi.jpg";
import ImgEshop from "../src/assets/eshop.png";
import JobListing from "../src/assets/joblisting.png";
import {
  bootstrap,
  html,
  js,
  nextJS,
  reactJs,
  sass,
  tailwind,
  typeScript,
  vite,
} from "./SkillsData";

const proyect1 = {
  title: "E-shop Page",
  img: ImgEshop,
  urlProyect: "https://e-shop-saliol.vercel.app/",
  urlRepo: "https://github.com/LeoSaliol/E-Shop-Next13",
  skills: [
    { name: nextJS.name, img: nextJS.img },
    { name: reactJs.name, img: reactJs.img },
    { name: typeScript.name, img: typeScript.img },
    { name: tailwind.name, img: tailwind.img },
  ],
  descriptionEn: "E-Shop page with NextJS, Frame Motion and Tailwinds",
  descriptionEs: "Página E-Shop con NextJS, Frame Motion y Tailwinds",
};

const proyect2 = {
  title: "Todo App",
  img: "https://res.cloudinary.com/dz209s6jk/image/upload/v1606414078/Challenges/vjbu8raudheodagmjfz2.jpg",
  urlProyect: "https://todoapp-saliol.vercel.app/ ",
  urlRepo: "https://github.com/LeoSaliol/TODO-App-TS/tree/master",
  skills: [
    { name: tailwind.name, img: tailwind.img },
    { name: reactJs.name, img: reactJs.img },
    { name: typeScript.name, img: typeScript.img },
  ],
  descriptionEn:
    "TODO app with dark/light mode. You can add, delete, filter and reorder tasks.",
  descriptionEs:
    "Aplicación TODO con modo oscuro/claro. Puedes agregar, eliminar, filtrar y reorganizar tareas.",
};

const proyect6 = {
  title: "Search Pokemon",
  img: ImgPokeApi,
  urlProyect: "https://listadopokemon.netlify.app/",
  urlRepo: "https://github.com/LeoSaliol/pokeapi-react",
  skills: [
    { name: bootstrap.name, img: bootstrap.img },
    { name: sass.name, img: sass.img },
    { name: reactJs.name, img: reactJs.img },
  ],
  descriptionEn:
    "Page in which by using the 'PokeApi' you can search for pokemon and see their statistics.",
  descriptionEs:
    "Pagina en la cual mediante el uso de la 'PokeApi' podes buscar pokemones y ver sus estadísticas.",
};
const proyect4 = {
  title: "Intercative Card",
  img: ImgCard,
  urlProyect: "https://card-interactive.netlify.app/",
  urlRepo: "https://github.com/LeoSaliol/interactive-card",
  skills: [
    { name: html.name, img: html.img },
    { name: sass.name, img: sass.img },
    { name: js.name, img: js.img },
  ],
  descriptionEn: "Interactive card page, inspired by Frontend Mentor",
  descriptionEs: "Pagina interactiva de tarjeta, inspirado en Frontend Mentor",
};
const proyect5 = {
  title: "E-commerce Page",
  img: ImgCommerce,
  urlProyect: "https://page-e-commerce-product.netlify.app/",
  urlRepo: "https://github.com/LeoSaliol/e-commerce-react",
  skills: [
    { name: vite.name, img: vite.img },
    { name: reactJs.name, img: reactJs.img },
    { name: tailwind.name, img: tailwind.img },
  ],
  descriptionEn: "E-commerce product page by Frontend Mentor.",
  descriptionEs: "Página de comercio electrónico",
};

const proyect3 = {
  title: "Job Listings",
  img: JobListing,
  urlProyect: "https://jobslist-saliol.vercel.app/",
  urlRepo: "https://github.com/LeoSaliol/jobs-list",
  skills: [
    { name: reactJs.name, img: reactJs.img },
    { name: tailwind.name, img: tailwind.img },
    { name: typeScript.name, img: typeScript.img },
  ],
  descriptionEn:
    "App for work application with filters. You can filter by skill, level or role.",
  descriptionEs:
    "Aplicación sobre listado de trabajos con filtros. Puede filtrar por habilidad, nivel o rol.",
};

export const projects = [
  proyect1,
  proyect2,
  proyect3,
  proyect4,
  proyect5,
  proyect6,
];
