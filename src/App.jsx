import Button from "./components/button/Button";
import "./App.css";
import Toggle from "./components/toggle/Toggle";
import { useState } from "react";
import Clock from "./components/clock/Clock";
import clockImg from "./assets/clock.jpg";
import UserList from "./components/userList/UserList";
import List from "./components/list/List";

function App() {
  const [bluetoothOn, setBluetoothOn] = useState(false);

  const fruits = ["Apple", "Banana", "Orange", "Mango"];

  const handleClick = (btnLabel) => {
    alert(`${btnLabel} button clicked!`);
  };

  const handleDarkMode = (isOn) => {
    document.body.className = isOn ? "bg-dark" : "bg-light";
  };

  const handleBluetooth = (isOn) => {
    setBluetoothOn(isOn);
  };

  const handleWifi = (isOn) => {
    alert(`Wifi turned ${isOn ? "On" : "Off"}`);
  };

  return (
    <>
      <div className="toggles">
        <Toggle label="Dark mode" defaultOn={false} onToggle={handleDarkMode} />
        <Toggle
          label="Bluetooth"
          defaultOn={false}
          onToggle={handleBluetooth}
          className={bluetoothOn ? "bt-on" : ""}
        />
        <Toggle label="Wifi" onToggle={handleWifi} />
      </div>

      <div className="clockContainer">
        <img className="clockImg" src={clockImg} />
        <Clock />
      </div>

      <UserList />

      <List title="Fruits" items={fruits}>
        {(item) => item.toUpperCase()}
      </List>

      <div className="buttons">
        <Button
          mode="primary"
          label="Submit"
          onClick={() => handleClick("Submit")}
        />
        <Button
          mode="secondary"
          label="Cancel"
          onClick={() => handleClick("Cancel")}
        />
      </div>
    </>
  );
}

export default App;
