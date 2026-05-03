const KeyboardBtn = ({ handleClick, id }) => {
  const option: string[] = [
    "そう思う",
    "ややそう思う",
    "どちらでもない",
    "あまり思わない",
    "そう思わない",
  ];

  return (
    <div className="flex gap-1 sm:gap-2 items-stretch justify-center mt-4 sm:mt-6 h-auto sm:h-16">
      {option.map((opt, index) => (
        <label
          className="flex-1 sm:flex-initial sm:min-w-21 sm:h-full flex flex-col items-center justify-between gap-2 sm:gap-0"
          key={index}
        >
          <input
            type="radio"
            name={`radio-${id}`}
            className="radio radio-sm sm:radio-md"
            onChange={() => handleClick(id, index)}
          />
          <span className="text-[10px] sm:text-xs inline-block text-center break-keep leading-tight">
            {opt}
          </span>
        </label>
      ))}
    </div>
  );
};

export default KeyboardBtn;
