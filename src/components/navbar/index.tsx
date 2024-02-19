import { useState } from "react";
import LogoImg from "../../assets/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";
const Navbar = () => {
  let Links = [
    { name: "BERANDA", link: "/" },
    { name: "TENTANG", link: "/tentang" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="md:p-6 p-8 bg-black flex items-center justify-center w-full fixed top-0 left-0 z-50">
      <div className="md:flex items-center">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center 
      text-gray-800"
        >
          <div className="fixed left-3 md:w-36 w-24">
            <img src={LogoImg} alt="logo" />
          </div>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl text-yellow-500 absolute right-8 top-4 cursor-pointer md:hidden"
        >
          {open ? <MdOutlineClose /> : <RxHamburgerMenu />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 bg-black pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-16" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-yellow-500 hover:text-white duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
