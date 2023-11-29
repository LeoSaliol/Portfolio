export function description(partes) {
  return partes.map((parte, index) => {
    return (
      <span
        key={index}
        className={`${
          parte === "Full" || parte === "Stack" ? "text-[#57cc99]" : ""
        } `}
      >
        {parte}{" "}
      </span>
    );
  });
}
