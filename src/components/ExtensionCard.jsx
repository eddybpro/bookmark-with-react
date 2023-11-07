import "./ExtensionCard.css";
import PropTypes from "prop-types";

function ExtensionCard({ data }) {
  return (
    <div className="ExtensionBox">
      <img src={data.img} alt="" className="ExtensionBox-Img" />
      <h2 className="ExtensionBox-Title">{data.title}</h2>
      <p className="ExtensionBox-Desc">{data.desc}</p>
      <div className="ExtensionBox-Dotes"></div>
      <button className="ExtensionBox-Btn">{data.btn}</button>
    </div>
  );
}

ExtensionCard.propTypes = {
  data: PropTypes.object,
};

export default ExtensionCard;
