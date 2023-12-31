import Skills from "../Skills";
import "../../index.css";

const powers = [
  {
    skill: "Super Saiyajin",
    level: "Advanced",
    color: "#FFD700",
  },
  {
    skill: "Rasengan",
    level: "Intermediate",
    color: "#00FFFF",
  },
  {
    skill: "Bankai",
    level: "Advanced",
    color: "#00BFFF",
  },
  {
    skill: "Gear Second",
    level: "Intermediate",
    color: "#DC143C",
  },
  {
    skill: "Santoryu",
    level: "Intermediate",
    color: "#7FFF00",
  },
  {
    skill: "Susano'o",
    level: "Advanced",
    color: "#8A2BE2",
  },
];

export default function SkillList() {
  return (
    <div className="skill-list">
      {powers.map((power) => (
        <Skills
          skill={power.skill}
          level={power.level}
          color={power.color}
          key={power.skill}
        />
      ))}
    </div>
  );
}
