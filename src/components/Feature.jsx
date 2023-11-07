import "./Feature.css";
import PropTypes from "prop-types";

function Feature({ data }) {
  return (
    <div className="FeatureBox">
      <div className="FeatureBox-ImgBox">
        <img src={data.img} alt="" />
      </div>
      <div className="FeatureBox-TxtBox">
        <h2 className="FeatureBox-TxtBox-Title">{data.title}</h2>
        <p className="FeatureBox-TxtBox-Desc">{data.desc}</p>
        <button className="FeatureBox-TxtBox-Btn desktop">more info</button>
      </div>
    </div>
  );
}

Feature.propTypes = {
  data: PropTypes.object,
};

export default Feature;
