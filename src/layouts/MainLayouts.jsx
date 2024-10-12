import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const MainLayouts = () => {
  const navigation = useNavigation();

  return (
    <div className="">
      <Navbar></Navbar>
      <div className="min-h-screen">
        {
          navigation.state === "loading" ? <span className="loading loading-ring loading-lg flex flex-row justify-center items-center "></span>
          : <Outlet />
        }
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
