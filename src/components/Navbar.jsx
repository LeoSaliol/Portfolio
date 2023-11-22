import { useState } from 'react';
import { MenuIcon } from '../Icons/index';
import { useContext } from 'react';
import { ContextLenguage } from '../context/LenguageContext';
export const Navbar = () => {
    const [modal, setModal] = useState(false);
    const listItem = ['Proyecto', 'Contacto', 'Education', 'Nose'];
    const { lenguageES, setLenguageES } = useContext(ContextLenguage);
    return (
        <nav className="bg-bgGray backdrop-blur-[35px] w-[90%] md:max-w-[460px]  top-4 md:top-5 left-0 right-0 mx-auto px-4 rounded-2xl fixed text-textSecondary shadow-lg ">
            <div className="flex justify-between gap-2 items-center py-2 font-black">
                <h2 className="mr-auto">LG</h2>
                <button
                    onClick={() => setLenguageES(!lenguageES)}
                    className={`  rounded-xl px-3 py-2 tracking-[3px] font-black shadow-lg text-center ${
                        lenguageES
                            ? 'bg-bgGray text-textPrimary'
                            : ' bg-bgGray text-textPrimary'
                    } `}
                >
                    {lenguageES ? 'ES' : 'EN'}
                </button>
                <button
                    onClick={() => setModal(!modal)}
                    className="md:hidden block pl-2"
                >
                    <MenuIcon className="w-[40px] text-textSecondary" />
                </button>

                <ul className="md:flex hidden   items-center gap-2 md:gap-4 ">
                    {listItem.map((item, index) => (
                        <a
                            key={index}
                            href="#"
                            className="hover:bg-hoverBlack w-full rounded-md  px-2 py-2 hover:text-v2green transition duration-500 ease-in-out scale-100 hover:scale-105 "
                        >
                            {item}
                        </a>
                    ))}
                </ul>
            </div>
            {modal && (
                <ul className="flex flex-col items-center gap-2 pb-4 slide-in-blurred-top ">
                    {listItem.map((item, index) => (
                        <a
                            key={index}
                            href="#"
                            className="hover:bg-hoverBlack w-full rounded-2xl py-2 text-center tracking-[1px] hover:text-v2green transition duration-500 ease-in-out scale-100 hover:scale-105"
                        >
                            {item}
                        </a>
                    ))}
                </ul>
            )}
        </nav>
    );
};
