import Driver from "./Driver";
import PropTypes from "prop-types";

const DriverList = (props) => {
  const driverComponents = props.drivers.map((driver) => {
    // Array of components
    return (
      <Driver
        key={driver.id}
        name={driver.name}
        team={driver.team}
        country={driver.country}
        handsome={driver.handsome}
      />
    );
  });
  return (
    <div>
      <h1>Drivers</h1>
      {driverComponents}
    </div>
  );
};

DriverList.propTypes = {
  drivers: PropTypes.array.isRequired,
};

export default DriverList;
