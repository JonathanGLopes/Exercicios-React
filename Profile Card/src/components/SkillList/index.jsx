import Skills from "../Skills";
import "../../index.css";

export default function SkillList() {
  return (
    <div className="skill-list">
      <Skills tech="HTML + CSS" color="red" />
      <Skills tech="JavaScript" color="yellow" />
      <Skills tech="React" color="lightblue" />
      <Skills tech="Git and GitHub" color="orange" />
    </div>
  );
}
