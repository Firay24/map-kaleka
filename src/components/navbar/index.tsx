import LogoImg from "../../assets/logo.png";
const Navbar = () => {
  return (
    <div className="p-8 bg-black flex items-center justify-center">
      <div className="fixed left-3">
        <img src={LogoImg} alt="logo" />
      </div>
      <div className="flex gap-x-10">
        <a href="5" className="text-yellow-500 font-bold hover:text-white">
          BERANDA
        </a>
        <a
          href="tentang"
          className="text-yellow-500 font-bold hover:text-white"
        >
          TENTANG
        </a>
      </div>
    </div>
  );
};

export default Navbar;
