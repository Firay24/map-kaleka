import { Outlet } from "react-router-dom";
import Navbar from "../navbar";
import BgImg from "../../assets/bg.png";

const Layout = () => {
  return (
    <div>
      <div className="z-50">
        <Navbar />
      </div>
      <div className="z-0">
        <div className="w-full mt-16 md:mt-6">
          <img
            src={BgImg}
            alt="hero image"
            style={{
              width: "100%",
              height: "100%",
              maxHeight: "300px",
              objectFit: "cover",
            }}
          />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
