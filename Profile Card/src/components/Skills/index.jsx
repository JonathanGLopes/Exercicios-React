/* eslint-disable react/prop-types */
export default function Skills({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "Intermediate" && "🥈"}
        {level === "Advanced" && "🥇"}
      </span>
    </div>
  );
}
