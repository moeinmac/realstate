const AccountItem = ({ children, dValue, name }) => {
  return (
    <div
      className={`${
        dValue ? "bg-[#97b2eb]" : "bg-[#658364]"
      } flex gap-3 items-center px-4 py-2 rounded-lg`}
    >
      {children}
      <input
      dir="auto"
        className={`bg-transparent text-black w-full font-alibaba outline-none`}
        type="text"
        defaultValue={dValue}
        name={name ? name : ""}
        readOnly = {!name ? !name : false}
      />
    </div>
  );
};

export default AccountItem;
