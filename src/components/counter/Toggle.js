import "./Toggle.scss";

const Toggle = props => {
  const toggleHandler = e => {
    props.retrieveToggle(e.target.checked);
  };

  return (
    <form className="toggle">
      <span className="toggle__label">Monthly Billing</span>
      <label className="toggle__switch">
        <input type="checkbox" className="toggle__switch--checkbox" onChange={toggleHandler} />
        <span className="toggle__switch--slider"></span>
      </label>
      <span className="toggle__label">Yearly Billing</span>
      <span className="toggle__discount">25% Discount</span>
    </form>
  );
};

export default Toggle;
