import { useState } from "react";
import Opdform from "./Opdform";
function Navbar() {
  const [isFormVisible, setFormVisibility] = useState(false);

  const toggleForm = () => {
    setFormVisibility(!isFormVisible);
  };
  return (
    <div>
      <div className="w3-bar w3-black">
        <a href="#" className="w3-bar-item w3-button w3-mobile">
          Home
        </a>
        <a
          href="#"
          className="w3-bar-item w3-button w3-mobile"
          onClick={toggleForm}
        >
          OPD
        </a>
        <a href="#" className="w3-bar-item w3-button w3-mobile">
          USER
        </a>
        <a href="#" className="w3-bar-item w3-button w3-mobile">
          HISTORY
        </a>
      </div>
      {isFormVisible && <Opdform />}
    </div>
  );
}

export default Navbar;
