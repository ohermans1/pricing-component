import "./Price.scss";

const Price = props => {
  let price = props.input;

  const priceCalcs = () => {
    if (props.toggle === true) {
      price = Math.round(price * 0.75);
    }
  };

  priceCalcs();

  return (
    <p className="price">
      ${price}.00 <span className="price__label">&nbsp; / month</span>
    </p>
  );
};

export default Price;
