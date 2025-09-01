import { useState } from "react";
import r1 from "../../assets/images/r1.png";
import "./Edu.css";
import s1 from "../../assets/images/Software/vs.png";
import s2 from "../../assets/images/Software/ai.png";
import s3 from "../../assets/images/Software/phs.png";
import s4 from "../../assets/images/Software/fig.png";
import s5 from "../../assets/images/Software/pre.png";
import s6 from "../../assets/images/Software/xd.png";
import st1 from "../../assets/styleImg/1.png";

const Education = () => {
  const software = [s1, s2, s3, s4, s5, s6];

  // Array of education/experience items
  const leftItems = [
    {
      year: "2023-2027",
      title: "Education",
      text: "I started my studies at SETEC Institute in 2023 and I am expected to graduate in 2027. During this period, I am pursuing my bachelor’s degree and working to gain both knowledge and experience that will help me build a strong foundation for my future career.",
      school: "SETEC INSTITUTE",
    },
    {
      year: "2017-2023",
      title: "Education",
      text: "From 2017 to 2023, I studied at Deydos High School, where I successfully completed my studies and passed the Baccalaureate (BAC II) examination in 2023. After that, I continued my education at SETEC Institute, starting in 2023, and I am expected to graduate in 2027 with a bachelor’s degree.",
      school: "DEYDOS HIGHSCHOOL",
    },
    {
      year: "2024-2025",
      title: "Experience",
      text: "In 2024, I worked as a freelance graphic designer, gaining practical experience in visual design. I also worked as an assistant at my university for one month and collaborated on several frontend development projects, which allowed me to strengthen my skills in creating responsive and interactive web applications.",
      school: "UNIVERSITY ASSISTANT / FREELANCE",
    },
    {
      year: "2025-2026",
      title: "Experience",
      text: "Finding internship opportunities and preparing for practical work experience as a Frontend Developer.",
      school: "FRONTEND DEVELOPER",
    },
  ];

  const skillItem = [
    "Fronted Developer",
    "Graphic Design",
    "UI/UX Design",
    "Motion Graphic",
  ];

  // State to track expanded paragraphs dynamically
  const [expanded, setExpanded] = useState(leftItems.map(() => false));

  const toggleExpand = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return (
    <>
      <div className=" flade-up flex justify-center items-center py-[70px] pt-[50px]">
        <h1 className=" font-Style uppercase xl:text-[30px] lg:text-[28px] md:text-[25px] sm:text-[25px] text-[20px] border-b-8  border-b-amber-500 rounded-[15px]">
          about <span className="text-[#ff4800]">me!</span>
        </h1>
      </div>
      <div className="relative ">
        <img
          className="absolute w-[200px]  blocks  xl:left-[200px] lg:left-[50px] md:left-[0px] sm:left-[-60px]"
          src={st1}
          alt=""
        />
      </div>
      <section className="py-[50px] font-popinse px-[20px] ">
        <main className="flex justify-center xl:flex-row  lg:flex-row md:flex-row sm:flex-row flex-col lg:gap-[200px] xl:gap-[200px] md:gap-[140px]  sm:gap-[50px] ">
          {/* left */}
          <section className="xl:max-w-[400px] lg:max-w-[400px] md:max-w-[400px] sm:max-w-[350px]">
            <div className="blocks flex justify-center items-center">
              {" "}
              <img
                className="xl:w-[250px] lg:w-[250px] md:w-[250px] sm:w-[200px] w-[250px] rounded-t-[30px] "
                src={r1}
                alt=""
              />
            </div>
            <div className="py-[12px] pt-[30px] ">
              {leftItems.map((item, i) => (
                <div key={i} className="py-[12px] blocks">
                  <p className="text-[#ff4800] font-semibold font-Roboto xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[11px]">
                    {item.year}
                  </p>
                  <p
                    className={`font-semibold xl:w-[290px] lg:w-[290px] md:w-[290px] sm:w-[220px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[11px] ${
                      expanded[i] ? "" : "line-clamp-3"
                    }`}
                  >
                    {item.text}
                  </p>
                  <button
                    className="text-blue-500 text-[14px] mt-2"
                    onClick={() => toggleExpand(i)}
                  >
                    {expanded[i] ? "See Less" : "See More"}
                  </button>
                  <p className="text-[12px] text-gray-600">{item.school}</p>
                </div>
              ))}
            </div>
          </section>

          {/* right */}
          <section className="xl:max-w-[400px] lg:max-w-[400px] md:max-w-[400px] sm:max-w-[350px]">
            <div>
              <button className=" blocks border-1 px-[30px] rounded-full font-semibold xl:text-[26px] lg:text-[26px] md:text-[26px] sm:text-[19px] italic py-[5px]">
                hi here!
              </button>
            </div>
            <div className="py-[15px] blocks">
              <p className="xl:w-[400px] md:w-[400px] sm:w-[400px] lg:w-[400px] w-[300px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[12px] text-[11px]">
                Hi, my name is{" "}
                <span className="text-[#ff4800]">Hong Sovannara</span>. I’m a
                passionate Frontend Developer with a strong interest in creating
                modern, user-friendly, and responsive web applications.
              </p>
              <hr className="border-b-1 my-[10px]" />
              <div className="flex flex-col gap-2 py-[12px]">
                <p className="flex gap-4">
                  <i className="fa-brands fa-facebook text-[#a593c3]"></i> hong
                  sovannara
                </p>
                <p className="flex gap-4">
                  <i className="fa-solid fa-phone text-[#a593c3]"></i>{" "}
                  855+92379121
                </p>
                <p className="flex gap-4">
                  <i className="fa-solid fa-envelope text-[#a593c3]"></i>{" "}
                  rapewpew372@gmail.com
                </p>
              </div>
            </div>
            <div className="blocks">
              <button className="font-extrabold font-Roboto xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[15px] uppercase bg-[#cfe472] rounded-full px-[30px] py-[5px]">
                SKILLS
              </button>
              <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 gap-2 py-[20px]">
                {skillItem.map((i) => (
                  <button className="border-3 border-blue-100 px-[20px] py-[2px] bg-[#f5f5f5] hover:scale-[1.2] transition-all duration-300 ease-in-out  text-[12px] font-semibold rounded-[10px]">
                    {i}
                  </button>
                ))}
              </div>
            </div>
            <div className="pt-[20px] blocks ">
              <button className=" blocks font-extrabold font-Roboto xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[15px] text-[13px] uppercase bg-[#ffb8ff] rounded-full px-[30px] py-[9px]">
                Software
              </button>
              <div className="flex justify-start items-center gap-[15px] pt-[20px] py-[10px] ">
                {software.map((s, i) => (
                  <img
                    className="border-1 xl:px-[10px] xl:py-[8px] xl:w-[50px] lg:px-[10px] lg:py-[8px] lg:w-[50px] md:px-[10px] md:py-[8px] md:w-[50px] sm:px-[6px] sm:py-[6px] sm:w-[30px] w-[40px] px-[6px] py-[6px] rounded-[5px] "
                    src={s}
                    alt={i}
                    key={i}
                  />
                ))}
              </div>
            </div>
            <div className=" blocks">
              {leftItems
                .filter((e) => e.title == "Experience")
                .map((item, i) => (
                  <div key={i} className="py-[12px]">
                    <p className="text-[#ff4800] font-semibold font-Roboto">
                      {item.year}
                    </p>
                    <p
                      className={`font-semibold w-[290px] text-[14px] ${
                        expanded[i] ? "" : "line-clamp-3"
                      }`}
                    >
                      {item.text}
                    </p>
                    <button
                      className="text-blue-500 text-[14px] mt-2"
                      onClick={() => toggleExpand(i)}
                    >
                      {expanded[i] ? "See Less" : "See More"}
                    </button>
                    <p className="text-[12px] text-gray-600">{item.school}</p>
                  </div>
                ))}
            </div>
          </section>
        </main>
      </section>
    </>
  );
};

export default Education;
