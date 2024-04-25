const Home = () => {

  return (
    <>
      <div className="flex gap-1 flex-col px-6 py-4">
        <h1 className="font-kalameh text-4xl text-blue">مــــتراژ</h1>
        <p className="font-alibaba">آگهی فروش مسکن</p>
      </div>
      <div className="px-6">
        <input
          className="bg-gray placeholder:text-[#dddeeb] text-black font-alibaba text-2xl outline-none px-4 py-2 rounded-lg w-full"
          type="text"
          placeholder="به دنبال چه میگردی؟"
        />
      </div>
    </>
  );
};

export default Home;
