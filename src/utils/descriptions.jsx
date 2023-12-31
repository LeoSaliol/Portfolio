export function description(partes) {
  return partes.map((parte, index) => {
    return (
      <span
        key={index}
        className={`${
          parte === "Full" || parte === "Stack"
            ? "text-v2violet font-semibold"
            : ""
        } `}
      >
        {parte}{" "}
      </span>
    );
  });
}
