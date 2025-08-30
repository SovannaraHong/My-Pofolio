import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ScrollPage from "../../ScrollPage";
import { useEffect } from "react";

const RoutLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== "/") {
      navigate("/", { replace: true });
    }
  }, [navigate]);
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
