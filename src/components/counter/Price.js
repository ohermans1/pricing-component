import "./Price.scss";

const Price = props => {
  let price = props.input;
  let time = "month";

  const priceCalcs = () => {
    if (props.toggle === true) {
      price = Math.round(price * 0.75 * 12);
      time = "year";
    }
  };

  priceCalcs();

  return (
    <p className="price">
      ${price}.00 <span className="price__label">&nbsp; / {time}</span>
    </p>
  );
};

export default Price;
