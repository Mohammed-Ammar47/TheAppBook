import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className='flex justify-center p-2 bg-[#f2f2f2] shadow-sm  w-full top-0 z-20"'>
      <img
        onClick={() => {
          navigate("/");
        }}
        src="https://api.logo.com/api/v2/images?logo=logo_5374923c-250e-4702-bd21-fea96ac30228&format=webp&margins=0&quality=60&width=500&background=transparent&u=1691161851"
        className="h-10 sm:h-20 cursor-pointer
    "
      />
    </header>
  );
}
