import "./InputDiv.css";
const InputDiv = (props) => {
  return (
    <div className={`input__div ${props.className}`}>
      <label htmlFor={props.label}>
        {props.label}
        {props.required ? <span>*</span> : ""}
      </label>
      <input
        type={props.type}
        id={props.label}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
      ></input>
    </div>
  );
};
export default InputDiv;
