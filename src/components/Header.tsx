import { useNavigate } from "react-router-dom";
// const logo = require("../assets/the-app-book-high-resolution-logo-transparent (2).png");
import logo from "../assets/the-app-book-logo.png";
export default function Header() {
  const navigate = useNavigate();
  return (
    <header className='flex justify-center p-2 bg-[#FFF8F0] shadow-sm  w-full top-0 z-20"'>
      <img
        onClick={() => {
          navigate("/");
        }}
        src={logo}
        className="h-14 sm:h-28 cursor-pointer
    "
      />
    </header>
  );
}
