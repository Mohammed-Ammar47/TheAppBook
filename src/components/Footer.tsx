import {} from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex justify-center items-center h-20 bg-[#FFF8F0] text-lg">
      &copy; {currentYear} The App Book. All rights reserved.
    </div>
  );
}
