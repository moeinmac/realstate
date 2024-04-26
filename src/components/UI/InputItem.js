const InputItem = ({ children, dValue, name, second ,pHolder }) => {
  return (
    <div
      className={`${
        second
          ? "bg-transparent border-2 border-blue"
          : dValue
          ? "bg-[#97b2eb]"
          : "bg-[#658364]"
      } flex gap-3 items-center px-4 py-2 rounded-lg`}
    >
      {children}
      <input
        dir="auto"
        className={`bg-transparent ${second ? "" : "text-black"} w-full font-alibaba outline-none`}
        type="text"
        defaultValue={dValue}
        name={name ? name : ""}
        readOnly={!name ? !name : false}
        placeholder={pHolder ? pHolder : ""}
      />
    </div>
  );
};

export default InputItem;
