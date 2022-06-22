// import Driver from "./components/Driver";
import DriverList from "./components/DriverList";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [drivers, setDrivers] = useState([
    // {
    //   id: 0,
    //   name: "Yuki Tsunoda",
    //   team: "Alpha Tauri",
    //   country: "Japan",
    //   handsome: true,
    //   cars: [],
    // },
    // {
    //   id: 1,
    //   name: "Carlos Sainz",
    //   team: "Ferrari",
    //   country: "Spain",
    //   handsome: true,
    //   cars: [],
    // },
  ]);

  const URL = "http://localhost:5000/drivers";

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        const newDrivers = res.data.map((driver) => {
          return {
            id: driver.id,
            name: driver.name,
            country: driver.country,
            team: driver.team,
            cars: driver.cars,
            handsome: driver.handsome,
          };
        });
        setDrivers(newDrivers);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const flipHandsome = (id) => {
    // console.log("Flip handsome called");
    // const newDrivers = [];
    // NEED TO MAKE A NEW ARRAY HERE OR MAKE A COPY OF THE ARRAY OTHERWISE REACT WONT RERENDER
    //   const newDrivers = [];
    //   for (const driver of drivers) {
    //     const newDriver = { ...driver };
    //     if (newDriver.id === id) {
    //       newDriver.handsome = !newDriver.handsome;
    //     }
    //     newDrivers.push(newDriver);
    //   }
    //   setDrivers(newDrivers);
    // };
    axios
      .patch(`${URL}/${id}/fliphandsome`)
      .then(() => {
        const newDrivers = [];
        for (const driver of drivers) {
          const newDriver = { ...driver };
          if (newDriver.id === id) {
            newDriver.handsome = !newDriver.handsome;
          }
          newDrivers.push(newDriver);
        }
        setDrivers(newDrivers);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteDriver = (id) => {
    // // console.log("delete called");
    // const newDrivers = [];
    // for (const driver of drivers) {
    //   if (driver.id !== id) {
    //     newDrivers.push(driver);
    //   }
    //   setDrivers(newDrivers);
    axios
      .delete(`${URL}/${id}`)
      .then(() => {
        const newDrivers = [];
        for (const driver of drivers) {
          if (driver.id !== id) {
            newDrivers.push(driver);
          }
        }
        setDrivers(newDrivers);
      })
      .catch((err) => {
        console.log(err);
      });
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
