import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("guest@example.com");
  const [password, setPassword] = useState("123456");

  const navigate = useNavigate();

  const submitHandler = async () => {
    const data = { email, password };
    // Store user info in localStorage

    localStorage.setItem("userInfo", JSON.stringify(data));
    // Navigate to home page
    navigate("/");
  };

  return (
    <>
      <form action="">
        <input
          value={email}
          type="email"
          placeholder="Enter Your Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
      </form>

      <button width="100%" style={{ marginTop: 15 }} onClick={submitHandler}>
        Login
      </button>
      <h4>OR</h4>
      <Link to="/">go to home page</Link>
    </>
  );
};

export default Login;
