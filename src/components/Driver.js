import "./Driver.css";
import PropTypes from "prop-types";
// one to one mapping between functions and components; needs to return jsx
// import { useState } from "react";

const Driver = (props) => {
  // const [handsome, setHandsome] = useState(props.handsome);
  // // defining a function that will correspond to button
  // const flipHandsomeness = () => {
  //   if (handsome) {
  //     setHandsome(false);
  //     // do NOT say handsome = false // NO
  //   } else {
  //     setHandsome(true);
  //   }
  // };

  // const [country, setCountry] = useState(props.country);

  // const tsunoda = {
  //   name: "Yuki Tsunoda",
  //   team: "Alpha Tauri",
  //   country: "Japan",
  //   handsome: true,
  // };

  // const changeCountryName = (event) => {
  //   setCountry(event.target.value);
  // };

  // we now have access to props.handsomeCallback
  const flipMyHandsome = () => {
    props.handsomeCallback(props.id);
  };

  const deleteMe = () => {
    props.deleteCallback(props.id);
  };

  return (
    <div>
      <h2 className="driver__name"> {props.name}</h2>
      <ul>
        <li>Team: {props.team}</li>
        <li>Country: {props.country}</li>
        <li>Handsome: {props.handsome.toString()}</li>
        <li>Cars: {props.cars}</li>
        {/* // using variable from line 7 because if you use props.handsome here it will always be whats in the array */}
        <button onClick={flipMyHandsome}>change handsomeness</button>
        <button onClick={deleteMe}>delete</button>
        {/* <button onClick={flipHandsomeness}>change handsomeness</button> */}
        {/* Set Country
        <input type="text" value={country} onChange={changeCountryName}></input> */}
      </ul>
    </div>
  );
};

Driver.propTypes = {
  name: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
  cars: PropTypes.array.isRequired,
  country: PropTypes.string.isRequired,
  handsome: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default Driver;
