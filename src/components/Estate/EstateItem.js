import { Link } from "react-router-dom";
import { timeSince } from "../../lib/timeSince";
import { ImLocation2 } from "react-icons/im";

const EstateItem = ({ data }) => {
  return (
    <Link to={`/estate/${data.id}`} className="bg-[#000000] pb-3 rounded-b-lg">
      <div>
        <img src={data.photo} className="max-w-full rounded-lg" alt="تصویر ملک"/>
      </div>
      <div className="px-6 py-2 flex flex-col gap-2">
        <h1 className="font-kalameh text-4xl text-blue">{data.title}</h1>
        <p className="font-alibaba text-gray">{timeSince(data.created_at)}</p>
      </div>
      <div className="flex items-center gap-1 px-6">
        <ImLocation2 />
        <p>{data.address}</p>
      </div>
    </Link>
  );
};

export default EstateItem;
