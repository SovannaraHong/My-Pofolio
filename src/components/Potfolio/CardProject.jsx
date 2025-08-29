import { Link } from "react-router-dom";
import "./Card.css";
const CardProject = ({ imags, name, title, langues, path, link }) => {
  return (
    <>
      <main className="transform transition-transform duration-300 hover:scale-[1.03] flade-up">
        <div className="bg-white  w-fit p-[20px] rounded-[12px] ">
          <div className="bg-[#e2e2e2] p-[20px] rounded-[12px]">
            <div className="flex gap-4 ">
              <img className="w-[400px]" src={imags[0]} alt="" />
              <div className="flex justify-center items-center flex-col gap-3">
                <img className="w-[300px]" src={imags[1]} alt="" />
                <img className="w-[300px]" src={imags[2]} alt="" />
              </div>
            </div>
            <div className="pt-[12px]">
              <h1 className="text-[20px] font-semibold font-Roboto ">{name}</h1>
              <p>{title}</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="pt-[12px] flex gap-4">
                <button className="custom-learn-more-btn rounded-[12px]">
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <span className="button-text">View Code</span>
                  </a>
                </button>
                <button className="custom-learn-more-btn rounded-[12px]">
                  <a href={path} target="_blank" rel="noopener noreferrer">
                    <span className="button-text">View Website</span>
                  </a>
                </button>
              </div>

              <div>
                <div className="flex justify-center items-center gap-3 cursor-pointer">
                  <p className="text-[20px] border-1 w-[30px] h-[30px] flex justify-center items-center rounded-full">
                    {" "}
                    {langues[0]}
                  </p>
                  <p className="text-[20px] border-1 w-[30px] h-[30px] flex justify-center items-center rounded-full">
                    {langues[1]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CardProject;
