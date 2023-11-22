import ImgCommerce from '@/assets/Ecommerce.jpg';
import ImgCard from '@/assets/interactivecard.jpg';
import ImgPokeApi from '@/assets/pokeapi.jpg';
import ImgEshop from '@/assets/eshop.png';
import JobListing from '@/assets/joblisting.png';
const proyect1 = {
    title: 'E-shop Page',
    img: ImgEshop,
    urlProyect: 'https://e-shop-saliol.vercel.app/',
    urlRepo: 'https://github.com/LeoSaliol/E-Shop-Next13',
    skills: ['NextJS', 'TypeScript', 'Tailwinds'],
    descriptionEn: 'E-Shop page with NextJS, Frame Motion and Tailwinds',
    descriptionEs: 'Página E-Shop con NextJS, Frame Motion y Tailwinds',
};

const proyect2 = {
    title: 'Todo App',
    img: 'https://res.cloudinary.com/dz209s6jk/image/upload/v1606414078/Challenges/vjbu8raudheodagmjfz2.jpg',
    urlProyect: 'https://todoapp-saliol.vercel.app/ ',
    urlRepo: 'https://github.com/LeoSaliol/TODO-App-TS/tree/master',
    skills: ['TypeScript', 'React', 'Tailwinds'],
    descriptionEn:
        'TODO app with dark/light mode. You can add, delete, filter and reorder tasks.',
    descriptionEs:
        'TODO app con modo oscuro/claro. Puede agregar, borrar, filtrar y reordenar tareas.',
};

const proyect3 = {
    title: 'Search Pokemon',
    img: ImgPokeApi,
    urlProyect: 'https://listadopokemon.netlify.app/',
    urlRepo: 'https://github.com/LeoSaliol/pokeapi-react',
    skills: ['Bootstrap', 'Sass', 'React'],
    descriptionEn:
        "Page in which by using the 'PokeApi' you can search for pokemon and see their statistics.",
    descriptionEs:
        "Pagina en la cual mediante el uso de la 'PokeApi' podes buscar pokemones y ver sus estadísticas.",
};
const proyect4 = {
    title: 'Intercative Card',
    img: ImgCard,
    urlProyect: 'https://card-interactive.netlify.app/',
    urlRepo: 'https://github.com/LeoSaliol/interactive-card',
    skills: ['HTML', 'SCSS', 'JavaScript'],
    descriptionEn: 'Interactive card page, inspired by Frontend Mentor',
    descriptionEs:
        'Pagina interactiva de tarjeta, inspirado en Frontend Mentor',
};
const proyect5 = {
    title: 'E-commerce Page',
    img: ImgCommerce,
    urlProyect: 'https://page-e-commerce-product.netlify.app/',
    urlRepo: 'https://github.com/LeoSaliol/e-commerce-react',
    skills: ['Vite', 'React', 'Tailwinds'],
    descriptionEn: 'E-commerce product page by Frontend Mentor.',
    descriptionEs: 'Página de comercio electrónico',
};

const proyect6 = {
    title: 'Job Listings',
    img: JobListing,
    urlProyect: 'https://jobslist-saliol.vercel.app/',
    urlRepo: 'https://github.com/LeoSaliol/jobs-list',
    skills: ['React', 'Tailwinds', 'TypeScript'],
    descriptionEn:
        'App for work application with filters. You can filter by skill, level or role.',
    descriptionEs:
        'Aplicación sobre listado de trabajos con filtros. Puede filtrar por habilidad, nivel o rol.',
};

export const proyects = [
    proyect1,
    proyect2,
    proyect3,
    proyect4,
    proyect5,
    proyect6,
];
