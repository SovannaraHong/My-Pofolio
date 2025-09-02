import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-center items-center flex-col bg-white h-screen">
        <img
          onClick={() => navigate("/")}
          className="w-[1000px]"
          src="https://mygs.ir/c/img/404.gif"
          alt=""
        />
      </div>
    </>
  );
};

export default NotFoundPage;
