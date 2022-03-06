import "./Slider.scss";
import Pageview from "./Pageview";
import Price from "./Price";
import Input from "./Input";
import Toggle from "./Toggle";
import { useState } from "react";

const Slider = () => {
  const [input, setInput] = useState(20);
  const getInput = input => {
    setInput(input);
  };

  const [toggle, setToggle] = useState(false);
  const getToggle = inputToggle => {
    setToggle(inputToggle);
  };

  return (
    <div className="slider">
      <div className="variables">
        <Pageview input={input} />
        <Price input={input} toggle={toggle} />
        <Input retrieveInput={getInput} input={input} />
        <Toggle retrieveToggle={getToggle} />
      </div>
    </div>
  );
};

export default Slider;
