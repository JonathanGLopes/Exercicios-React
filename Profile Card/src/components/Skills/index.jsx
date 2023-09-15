/* eslint-disable react/prop-types */
export default function Skills(props) {
  return (
    <span className="skill" style={{ backgroundColor: props.color }}>
      {props.tech} {props.emoji}
    </span>
  );
}
