import i1 from "../../assets/Icon/html.png";
import i2 from "../../assets/Icon/css.png";
import i3 from "../../assets/Icon/js.png";
import i4 from "../../assets/Icon/tw.png";
import i5 from "../../assets/Icon/bs.png";
import i6 from "../../assets/Icon/ts.png";
import i7 from "../../assets/Icon/rj.png";
import i8 from "../../assets/Icon/vue.png";
import i9 from "../../assets/Icon/gitt.png";
import i10 from "../../assets/Icon/github.png";
import i11 from "../../assets/Icon/py1.png";
import i12 from "../../assets/Icon/java1.png";
import CardSkill from "./CardSkill";

import "./Myskill.css";

const MySkill = () => {
  let IconArr = [
    { img: i1, title: "Html", num: 90, color: "#e34c26" }, // Orange
    { img: i2, title: "Css", num: 90, color: "#264de4" }, // Blue
    { img: i3, title: "Javascript", num: 85, color: "#f7df1e" }, // Yellow
    { img: i4, title: "Tailwind", num: 88, color: "#38bdf8" }, // Sky Blue
    { img: i5, title: "Bootstrap", num: 30, color: "#7952b3" }, // Purple
    { img: i6, title: "Typescript", num: 30, color: "#3178c6" }, // TS Blue
    { img: i7, title: "React js", num: 83, color: "#61dafb" }, // React Cyan
    { img: i8, title: "Vue js", num: 20, color: "#42b883" }, // Vue Green
    { img: i9, title: "Git", num: 92, color: "#fd8787" }, // Vue Green
    { img: i10, title: "GitHub", num: 92, color: "#585858" }, // Vue Green
    { img: i11, title: "Python", num: 32, color: "#585858" }, // Vue Green
    { img: i12, title: "Java", num: 22, color: "#585858" }, // Vue Green
  ];

  return (
    <div className="font-popinse pt-[50px]">
      <div className="flex justify-center items-center py-[20px] autoShow">
        <h1 className=" font-Style uppercase xl:text-[26px] lg:text-[26px] md:text-[22px] sm:text-[26px] text-[12px] border-b-5  border-b-[#00ff51] rounded-[15px]">
          My Skill <span className="text-[#00ff51]">& Technology</span>
        </h1>
      </div>
      <div className="flex justify-center items-center py-[40px] flade-up">
        <div className="grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-9">
          {IconArr.map((icon, ind) => (
            <CardSkill key={ind} {...icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MySkill;
