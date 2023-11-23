import { useContext } from 'react';
import { mainData } from '../../data/mainData';
import { ContextLenguage } from '../context/LenguageContext';

export const Intro = () => {
    const { lenguageES } = useContext(ContextLenguage);
    const partes = mainData.descriptionEn.split(' ');

    const contenidosConEstilos = partes.map((parte, index) => {
        return (
            <span
                key={index}
                className={`${
                    parte === 'Full' || parte === 'Stack' ? 'text-v2yellow' : ''
                } `}
            >
                {parte}{' '}
            </span>
        );
    });
    return (
        <>
            <section className="mt-6 text-center">
                <h1 className="text-5xl font-black tracking-wider ">
                    {mainData.name}
                </h1>
                <p className="mt-5 text-2xl tracking-wide font-medium color-change-4x">
                    {mainData.title}
                </p>
            </section>
            <section className="text-center">
                <p className=" mt-7 text-justify text-textGray px-1">
                    {lenguageES ? contenidosConEstilos : mainData.descriptionEn}
                </p>
                <a
                    href={mainData.resume}
                    download
                    className=" inline-block  text-center mt-8 px-5 py-3 bg-bgGray  hover:border-[1px] border-v2green  rounded-full text-lg font-medium  uppercase transition-all ease-linear duration-600 hover:scale-105 hover:text-v2green hover:bg-[#000000f1] hover:font-bold tracking-[3px] "
                >
                    Download CV
                </a>
            </section>
        </>
    );
};
