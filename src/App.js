import Driver from "./components/Driver";

// one to one mapping between functions and components; needs to return jsx
function App() {
  return (
    <div>
      <h1>Drivers</h1>
      <Driver></Driver>
      <Driver></Driver>
      <Driver></Driver>
      <Driver></Driver>
    </div>
  );
}

export default App;
