import "./Pageview.scss";

const Pageview = props => {
  let pageViews = props.input * 5000;

  return <p className="pageview">{pageViews}K Pageviews</p>;
};

export default Pageview;
