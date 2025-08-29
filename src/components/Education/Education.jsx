import { useState } from "react";
import r1 from "../../assets/images/r1.png";
import "./Edu.css";
import s1 from "../../assets/images/Software/vs.png";
import s2 from "../../assets/images/Software/ai.png";
import s3 from "../../assets/images/Software/phs.png";
import st1 from "../../assets/styleImg/1.png";

const Education = () => {
  const software = [s1, s2, s3];

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
        <h1 className=" font-Style uppercase text-[30px] border-b-8  border-b-amber-500 rounded-[15px]">
          about <span className="text-[#ff4800]">me!</span>
        </h1>
      </div>
      <div className="relative ">
        <img
          className="absolute w-[200px] autoAotate blocks  left-[200px]"
          src={st1}
          alt=""
        />
      </div>
      <section className="py-[50px] font-popinse">
        <main className="flex justify-center gap-[200px]">
          {/* left */}
          <section className="max-w-[400px]">
            <div className="blocks">
              <img
                className="w-[250px] rounded-t-[30px] autoAotate"
                src={r1}
                alt=""
              />
            </div>
            <div className="py-[12px] pt-[30px] ">
              {leftItems.map((item, i) => (
                <div key={i} className="py-[12px] blocks">
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

          {/* right */}
          <section className="max-w-[400px]">
            <div>
              <button className=" blocks border-1 px-[30px] rounded-full font-semibold text-[26px] italic py-[5px]">
                hi here!
              </button>
            </div>
            <div className="py-[15px] blocks">
              <p className="w-[400px]">
                Hi, my name is{" "}
                <span className="text-[#ff4800]">Hong Sovannara</span>. I’m a
                passionate Frontend Developer with a strong interest in creating
                modern, user-friendly, and responsive web applications.
                <hr className="border-b-1" />
              </p>
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
              <button className="font-extrabold font-Roboto text-[20px] uppercase bg-[#cfe472] rounded-full px-[30px] py-[5px]">
                SKILLS
              </button>
              <div className="grid grid-cols-3 gap-2 py-[20px]">
                <button className="btn-shine btns">
                  <span>Frontend Developer</span>
                </button>
                <button className="btn-shine btns">
                  <span>Graphic Design</span>
                </button>
                <button className="btn-shine btns">
                  <span>UI / UX Design</span>
                </button>
                <button className="btn-shine btns">
                  <span>Motion Graphic</span>
                </button>
              </div>
            </div>
            <div className="pt-[20px] blocks ">
              <button className=" blocks font-extrabold font-Roboto text-[20px] uppercase bg-[#ffb8ff] rounded-full px-[30px] py-[5px]">
                Software
              </button>
              <div className="flex justify-start items-center gap-[15px] py-[10px] ">
                {software.map((s, i) => (
                  <img
                    className="border-1 px-[10px] py-[8px] rounded-[5px] w-[50px]"
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
