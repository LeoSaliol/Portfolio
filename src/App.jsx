import { useState } from 'react';
import { MenuIcon } from './Icons';

function App() {
    const [modal, setModal] = useState(false);
    const listItem = ['Proyecto', 'Contacto', 'Education', 'Nose'];
    return (
        <div className="px-7">
            <nav className="bg-[#ffffff11] backdrop-blur-[35px] w-[90%] md:max-w-[460px]  top-4 md:top-5 left-0 right-0 mx-auto px-4 rounded-2xl fixed text-[#ffffffc2] ">
                <div className="flex justify-between gap-2 items-center py-2 font-black">
                    <h2>LG</h2>
                    <button
                        onClick={() => setModal(!modal)}
                        className="md:hidden block"
                    >
                        <MenuIcon className="w-[40px]" />
                    </button>

                    <ul className="md:flex hidden   items-center gap-2 md:gap-4 ">
                        {listItem.map((item, index) => (
                            <a
                                key={index}
                                href="#"
                                className="hover:bg-[#0c0c0c] w-full rounded-md px-2 py-2 "
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
                                className="hover:bg-[#0c0c0c91] w-full rounded-2xl py-2 text-center tracking-[1px]"
                            >
                                {item}
                            </a>
                        ))}
                    </ul>
                )}
            </nav>
            <main className="pt-20">
                <h1
                    className="text-[40px] tracking-[0.01
                  rem]  text-center font-black "
                >
                    The most advanced Design System for Figma
                </h1>
            </main>
        </div>
    );
}

export default App;
