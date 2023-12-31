import { useState } from "react";
import { MenuIcon } from "../Icons/index";
import { useContext } from "react";
import { ContextLenguage } from "../context/LenguageContext";
import ImgEs from "../assets/español.png";
import ImgEn from "../assets/english-flag.png";
import { Link } from "react-scroll";
export const Navbar = () => {
  const [modal, setModal] = useState(false);
  const listItem = ["Proyecto", "Skills", "Education", "Contacto"];
  const { lenguageES, setLenguageES } = useContext(ContextLenguage);
  return (
    <nav
      className={`fixed left-0 right-0 top-4 z-40 mx-auto w-[85%] rounded-2xl bg-bgGray px-4   text-textSecondary md:top-5 md:max-w-[480px] ${
        modal ? "backdrop-blur-[50px]" : "backdrop-blur-[5px]"
      } `}
    >
      <div className="flex  items-center justify-between gap-2 py-2 font-black md:flex-row-reverse">
        <button
          onClick={() => setLenguageES(!lenguageES)}
          className="opacity-60"
        >
          {lenguageES ? (
            <img src={ImgEs} alt="" className="h6 w-6 " />
          ) : (
            <img src={ImgEn} alt="" className="h6 w-6" />
          )}
        </button>
        <button
          onClick={() => setModal(!modal)}
          className="block pl-2 md:hidden"
        >
          <MenuIcon className="w-[40px] text-textSecondary" />
        </button>

        <ul className=" hidden items-center  gap-2 md:flex md:gap-4 ">
          {listItem.map((item, index) => (
            <Link
              key={index}
              to={item}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={80}
              duration={800}
              className="w-full scale-100 cursor-pointer  rounded-md px-2 py-2 transition duration-500 ease-in-out hover:scale-105 hover:bg-hoverBlack hover:text-v2green"
            >
              {item}
            </Link>
          ))}
        </ul>
      </div>
      {modal && (
        <ul className=" scale-in-ver-top flex flex-col items-center gap-2 pb-4 md:hidden ">
          {listItem.map((item, index) => (
            <a
              key={index}
              href="#"
              className="w-full scale-100 rounded-2xl py-2 text-center font-bold tracking-[1px] transition duration-500 ease-in-out hover:scale-105 hover:bg-hoverBlack hover:text-v2green"
            >
              {item}
            </a>
          ))}
        </ul>
      )}
    </nav>
  );
};
