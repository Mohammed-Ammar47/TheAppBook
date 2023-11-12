import { useNavigate } from "react-router-dom";

export default function AppCard({ app }: any) {
  const navigate = useNavigate();
  return (
    <li className="bg-[#f2f2f2] w-[300]  flex flex-col justify-between items-center shadow-md hover:shadow-xl rounded-xl overflow-hidden transition-shadow duration-150">
      <p className="text-xl sm:text-3xl font-semibold p-2 h-14">
        {app.appName}{" "}
      </p>
      <div>
        <img className="aspect-[3/2] rounded-xl" src={app.appImg} />{" "}
      </div>
      <div>
        <p className="text-lg sm:text-2xl  p-2"> {app.appDescription}</p>{" "}
      </div>
      <button
        onClick={() => {
          navigate(app.appLink);
        }}
        className="text-xl sm:text-2xl text-white uppercase font-semibold bg-[#10637d] p-2 h-12 w-full"
      >
        open app
      </button>
    </li>
  );
}
