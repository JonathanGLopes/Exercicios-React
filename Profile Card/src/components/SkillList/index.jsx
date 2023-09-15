import Skills from "../Skills";
import "../../index.css";

export default function SkillList() {
  return (
    <div className="skill-list">
      <Skills tech="HTML + CSS" emoji="🌈" color="red" />
      <Skills tech="JavaScript" emoji="✈" color="yellow" />
      <Skills tech="React" emoji="🚀" color="lightblue" />
      <Skills tech="Git and GitHub" emoji="🛸" color="orange" />
    </div>
  );
}
