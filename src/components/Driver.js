import "./Driver.css";
import PropTypes from "prop-types";
// one to one mapping between functions and components; needs to return jsx

const Driver = (props) => {
  // const tsunoda = {
  //   name: "Yuki Tsunoda",
  //   team: "Alpha Tauri",
  //   country: "Japan",
  //   handsome: true,
  // };

  return (
    <div>
      <h2 className="driver__name"> {props.name}</h2>
      <ul>
        <li>Team: {props.team}</li>
        <li>Country: {props.country}</li>
        <li>Handsome: {props.handsome.toString()}</li>
      </ul>
    </div>
  );
};

Driver.propTypes = {
  name: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  handsome: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default Driver;
