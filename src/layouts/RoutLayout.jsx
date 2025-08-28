import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ScrollPage from "../../ScrollPage";

const RoutLayout = () => {
  return (
    <>
      <ScrollPage />
      <Navbar />

      <Outlet />
      <Footer />
    </>
  );
};

export default RoutLayout;
