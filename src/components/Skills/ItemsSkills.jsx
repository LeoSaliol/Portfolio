/* eslint-disable react/prop-types */
export const ItemsSkills = ({ skill }) => {
  return (
    <div className=" ml-3 flex flex-wrap items-center gap-x-6 gap-y-3 sm:ml-4 sm:gap-x-9 sm:gap-y-4">
      {skill.map((sk, i) => (
        <div
          key={i}
          className="shadow-drop-br flex h-12 w-28 items-center justify-center gap-2 rounded-xl bg-bgGray sm:h-14 sm:w-40"
        >
          <img
            src={sk.img}
            alt={sk.name + "logo"}
            className={` h-4 w-4 sm:h-5 sm:w-5 `}
          />
          <p className="text-sm sm:text-base">{sk.name}</p>
        </div>
      ))}
    </div>
  );
};
