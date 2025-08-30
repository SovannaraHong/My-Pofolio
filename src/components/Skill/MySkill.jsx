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
import CardSkill from "./CardSkill";

import "./Myskill.css";

const MySkill = () => {
  let IconArr = [
    { img: i1, title: "Html", color: "#e34c26" }, // Orange
    { img: i2, title: "Css", color: "#264de4" }, // Blue
    { img: i3, title: "Javascript", color: "#f7df1e" }, // Yellow
    { img: i4, title: "Tailwind", color: "#38bdf8" }, // Sky Blue
    { img: i5, title: "Bootstrap", color: "#7952b3" }, // Purple
    { img: i6, title: "Typescript", color: "#3178c6" }, // TS Blue
    { img: i7, title: "React js", color: "#61dafb" }, // React Cyan
    { img: i8, title: "Vue js", color: "#42b883" }, // Vue Green
    { img: i9, title: "Git", color: "#fd8787" }, // Vue Green
    { img: i10, title: "GitHub", color: "#585858" }, // Vue Green
  ];

  return (
    <div className="font-popinse pt-[50px]">
      <div className="flex justify-center items-center py-[20px] autoShow">
        <h1 className=" font-Style uppercase text-[26px] border-b-5  border-b-amber-500 rounded-[15px]">
          My Skill <span className="text-orange-300">& Technology</span>
        </h1>
      </div>
      <div className="flex justify-center items-center py-[40px] flade-up">
        <div className="grid grid-cols-5 gap-9">
          {IconArr.map((icon, ind) => (
            <CardSkill key={ind} {...icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MySkill;
