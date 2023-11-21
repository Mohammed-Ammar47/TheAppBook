import { useNavigate } from "react-router-dom";

export default function AppCard({ app }: any) {
  const navigate = useNavigate();
  return (
    <li className="bg-[#f2f2f2] w-[300]  flex flex-col justify-between items-center shadow-md hover:shadow-xl rounded-xl overflow-hidden transition-shadow duration-150">
      <div className="flex flex-col justify-start">
        <p className="text-xl sm:text-2xl font-semibold text-center p-2 h-20">
          {app.appName}{" "}
        </p>
        <div>
          <img className="aspect-[3/2] rounded-xl" src={app.appImg} />
        </div>
        <div>
          <p className="text-base sm:text-lg  p-2"> {app.appDescription}</p>
        </div>
      </div>
      <button
        onClick={() => {
          navigate(app.appLink);
        }}
        className="text-xl sm:text-2xl text-white uppercase font-semibold bg-[#10647dc8] hover:bg-[#10637d] focus:bg-[#10637d] p-2 h-12 w-full"
      >
        open app
      </button>
    </li>
  );
}
