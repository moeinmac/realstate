import { useLoaderData } from "react-router-dom";
import { ImUserTie } from "react-icons/im";
import { TbRulerMeasure } from "react-icons/tb";
import { persianNumbers } from "../../lib/persianNumbers";
import { timeSince } from "../../lib/timeSince";

const EstateItem = () => {
  const response = useLoaderData();
  if (response.error) {
    return <h1>همچــنین ملکـــی وجود ندارد!</h1>;
  }
  const data = response.data;
  console.log(data);
  return (
    <>
      <header>
        <div>
          <img src={data.photo} className="max-w-full rounded-b-lg" />
        </div>
        <div className="px-6 py-4 flex flex-col gap-2">
          <h1 className="font-kalameh text-4xl">{data.title}</h1>
          <div className="flex items-center justify-between px-2 ">
            <div className="flex items-center gap-2">
              <ImUserTie className="bg-green text-white text-2xl p-1 rounded-full" />
              <p className="font-alibaba text-green">{data.user.fullname}</p>
            </div>
            <p>{timeSince(data.created_at)}</p>
          </div>
        </div>
      </header>
      <article>
        <div className="flex items-center gap-2">
          <h3 className="font-kalameh text-2xl flex items-center">
            <TbRulerMeasure />
            مــتراژ :{" "}
          </h3>
          <span className="font-alibaba">{persianNumbers(data.area)}</span>
        </div>
      </article>
    </>
  );
};

export default EstateItem;
