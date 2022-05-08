import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function saveUsers() {
    if (!mail || !password) return;
    else if (password.length < 6)
      return alert("Password must have at least 6 characters");
    setUser({ mail: mail, password: password });

    navigate("/weather");
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const newUser = {
      mail: mail,
      password: password,
    };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
  }
  window.onbeforeunload = function() {
    localStorage.clear();
  };
  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <h3 className="display-6 fw-bold ls-tight">Weather App </h3>
            <h4 className="text-primary">Best forecast Application</h4>
            <img
              src="https://images.unsplash.com/photo-1534794048419-48e110dca88e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1652&q=80"
              className="img-fluid"
              alt="s"
            />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 mt-5 offset-xl-1">
            <form>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                  ref={inputRef}
                  value={mail}
                  onChange={(e) => {
                    setMail(e.target.value);
                  }}
                  required
                />
                <label className="form-label" for="form3Example3"></label>
              </div>
              <div className="form-outline mb-3">
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                  required
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <label className="form-label" for="form3Example4"></label>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block "
                onClick={saveUsers}
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
