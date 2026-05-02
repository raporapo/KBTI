const KeyboardBtn = ({ handleClick, id }) => {
  const option: string[] = [
    "そう思う",
    "ややそう思う",
    "どちらでもない",
    "あまり思わない",
    "そう思わない",
  ];

  return (
    <div className="flex gap-2 items-center justify-center mt-6 h-16">
      {option.map((opt, index) => (
        <label
          className="h-full flex flex-col justify-between items-center min-w-21"
          key={index}
        >
          <input
            type="radio"
            name={`radio-${id}`}
            className="radio"
            defaultChecked={index === 0}
            onChange={() => handleClick(id, index)}
          />
          <span className="text-xs inline-block">{opt}</span>
        </label>
      ))}
    </div>
  );
};

export default KeyboardBtn;
