import resumeOpen from '../../public/OpenBotcamp.pdf';
import resumeYoProgramo from '../../public/Certificado_YoProgramo.pdf';

const edu1 = {
    year: '2022',
    title: 'Open Bootcamp',
    resume: resumeOpen,
    descriptionEn:
        'Bootcamp, The technologies acquired were HTML, CSS and ReactJs. ',
    descriptionEs:
        'Bootcamp, Las tecnologías adquiridas fueron HTML, CSS y ReactJs. ',
};

const edu2 = {
    year: '2022',
    title: 'Argentina Programa',
    resume: resumeYoProgramo,
    descriptionEn:
        'Full stack developer course. During the course I learned the work of a full stack and what tools to use. I learned about GIT, SCRUM methodology, Boostrap, Angular, MySQL and Java with Spring Boot.',
    descriptionEs:
        'Curso desarrollador full stack. Durante el  curso aprendí el trabajo de un full stack y que herramientas utilizar. Aprendí sobre GIT, metodología SCRUM, Boostrap, Angular, MySQL y Java con Spring Boot.',
};

const edu3 = {
    year: '2021',
    title: 'Universidad Nacional de La Plata',
    resume: '',
    descriptionEn:
        "At the moment I am a student of the university career 'Programmer Analyst' which consists of 3 years and I am in the 2nd year.",
    descriptionEs:
        "Actualmente me encuentro siendo alumno de la carrera universitario 'Analista Programador' que consta de 3 años y me encuentro en el 2°.",
};

export const educations = [edu1, edu2, edu3];
