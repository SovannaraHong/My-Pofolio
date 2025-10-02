import { Link } from "react-router-dom";
import "./Card.css";
import { useState } from "react";
const CardProject = ({ imags, name, title, langues, path, link, complete }) => {
  const [extend, setExtend] = useState(false);
  const [showLang, setShowLang] = useState(true);
  return (
    <>
      <main className="transform transition-transform duration-300 hover:scale-[1.03] appBlock font-popinse">
        <div className="bg-[#2c2c2c]  w-fit p-[20px] rounded-[12px] ">
          <div className="bg-[#070707] p-[20px] rounded-[12px]">
            <div className="flex gap-4 ">
              <img
                className="xl:w-[400px] lg:w-[250px] sm:w-[400px] md:w-[400px] w-[150px]"
                src={imags[0]}
                alt=""
              />
              <div className="flex justify-center items-center flex-col gap-3">
                <img src={imags[1]} alt="" />
                <img src={imags[2]} alt="" />
              </div>
            </div>

            <div className="pt-[12px]">
              <h1 className="xl:text-[20px] lg:text-[20px] md:text-[14px] sm:text-[12px] text-[10px] font-semibold font-Roboto ">
                {name}
              </h1>
              <p
                className={`xl:text-[12px] lg:text-[12px] md:text-[10px] sm:text-[9px] text-[9px]   ${
                  extend ? "" : " line-clamp-2 "
                }`}
              >
                {title}
              </p>
              <button
                className="text-blue-300 xl:text-[14px] lg:text-[14px] md:text-[12px] sm:text-[10px] text-[9px]"
                onClick={() => setExtend(!extend)}
              >
                {extend ? "See Less" : "See More"}
              </button>
            </div>

            <div className="flex justify-between items-center">
              <div className="pt-[12px] flex xl:gap-4 lg:gap-4 md:gap-4 sm:gap-4 gap-2">
                <button className=" xl:text-[12px] lg:text-[12px] md:text-[10px]  sm:text-[8px]  text-[9px]      border-2 border-gray-400 px-[10px]  hover:border-gray-300  transition-all duration-300 ease-in-out  font-semibold rounded-[12px]">
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    View Code
                  </a>
                </button>
                <button className=" xl:text-[12px] lg:text-[12px] md:text-[10px]  sm:text-[8px]  text-[9px]  border-2 border-gray-400 px-[10px] hover:border-gray-300  transition-all duration-300 ease-in-out py-[10px] font-semibold rounded-[12px]">
                  <a href={path} target="_blank" rel="noopener noreferrer">
                    <span className="button-text">View Website</span>
                  </a>
                </button>
                {complete === "building" ? (
                  <>
                    <button className=" xl:text-[12px] lg:text-[12px] md:text-[10px]  sm:text-[8px]  text-[9px]  border-2 border-red-400 px-[10px] hover:border-gray-300  transition-all duration-300 ease-in-out py-[10px] font-semibold rounded-[12px]">
                      <span className="button-text">{complete}...</span>
                    </button>
                  </>
                ) : (
                  <></>
                )}
              </div>
              <div>
                {showLang ? (
                  <button
                    className="font-semibold xl:text-[14px] lg:text-[14px] md:text-[14px] text-[12px] "
                    onClick={() => setShowLang(!showLang)}
                  >
                    {showLang ? "Show" : "Hide"}
                  </button>
                ) : (
                  <>
                    <div className="flex justify-center items-center gap-3 cursor-pointer">
                      {langues.map((i) => (
                        <p className="text-[20px] hover:scale-[1.3] transition-all duration-300 ease-in-out border-1 w-[30px] h-[30px] flex justify-center items-center rounded-full">
                          {" "}
                          {i}
                        </p>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CardProject;
