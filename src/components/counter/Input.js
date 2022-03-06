import "./Input.scss";

const Input = props => {
  const Input = e => {
    return props.retrieveInput(e.target.value);
  };

  return (
    <form className="input">
      <input type="range" className="input__range" onChange={Input} max="30" min="10" value={props.input} step="1" />
    </form>
  );
};

export default Input;
