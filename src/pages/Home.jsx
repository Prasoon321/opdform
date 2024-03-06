import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hospital, setHospital] = useState("");
  const navigate = useNavigate();
  const handleLogin = () => {
    // For simplicity, consider any email/password combination as valid
    if (email == "admin@gmail.com" || password == "admin123") {
      navigate("/opdform");
    } else {
      // Handle incorrect credentials if needed
      alert("Invalid credentials. Please try again.");
    }
  };
  return (
    <>
      <div className="container">
        <div className="login-box">
          <p>Login</p>
          <form>
            <div className="user-box">
              <input
                required=""
                name=""
                type="text"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Email</label>
            </div>
            <div className="user-box">
              <input
                required=""
                name=""
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Password</label>
            </div>

            <a href="#" onClick={handleLogin}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Login
            </a>
          </form>
        </div>
      </div>
    </>
  );
};
export default Home;
