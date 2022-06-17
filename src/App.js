// import Driver from "./components/Driver";
import DriverList from "./components/DriverList";
import { useState } from "react";

function App() {
  const [drivers, setDrivers] = useState([
    {
      id: 0,
      name: "Yuki Tsunoda",
      team: "Alpha Tauri",
      country: "Japan",
      handsome: true,
    },
    {
      id: 1,
      name: "Carlos Sainz",
      team: "Ferrari",
      country: "Spain",
      handsome: true,
    },
  ]);

  // instead of hardcoding, import json

  const flipHandsome = (id) => {
    // console.log("Flip handsome called");
    const newDrivers = [];
    // NEED TO MAKE A NEW ARRAY HERE OR MAKE A COPY OF THE ARRAY OTHERWISE REACT WONT RERENDER
    for (const driver of drivers) {
      if (driver.id === id) {
        driver.handsome = !driver.handsome;
      }
      newDrivers.push(driver);
    }
    setDrivers(newDrivers);
  };

  const deleteDriver = (id) => {
    // console.log("delete called");
    const newDrivers = [];
    for (const driver of drivers) {
      if (driver.id !== id) {
        newDrivers.push(driver);
      }
      setDrivers(newDrivers);
    }
  };

  return (
    <div>
      <DriverList
        drivers={drivers}
        handsomeCallback={flipHandsome}
        deleteCallback={deleteDriver}
      />
    </div>
  );
}

export default App;
