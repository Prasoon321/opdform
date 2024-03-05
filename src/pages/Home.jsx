const Home = () => {
  return (
    <>
      <div className="container">
        <div className="login-box">
          <p>Login</p>
          <form>
            <div className="user-box">
              <input required="" name="" type="text" />
              <label>Email</label>
            </div>
            <div className="user-box">
              <input required="" name="" type="password" />
              <label>Password</label>
            </div>
            <div className="user-box">
              <select className="dropdown">
                <option value="male">Admin</option>
                <option value="female">User</option>
              </select>
            </div>
            <a href="#">
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
