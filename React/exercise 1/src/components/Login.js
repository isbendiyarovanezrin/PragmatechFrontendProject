import React, { useState, useEffect } from "react";

const Login = () => {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [text, setText] = useState("");

  function nameChange(e) {
    setNickname({ nickname: e.target.value });
  }

  function passwordChange(e) {
    setPassword({ password: e.target.value });
  }

  function submit(e) {
    e.preventDefault();
  }

  useEffect(() => {
    if (nickname.nickname === "Nebuchadnezzar") {
      setText("Username tapıldı!");
    }

    if (password.password === "12345") {
      setText("Şifrə tapıldı!");
    }

    if (
      nickname.nickname === "Nebuchadnezzar" &&
      password.password === "12345"
    ) {
      setText("Hesab hack olundu!");
    }
  }, [nickname, password]);

  return (
    <div className="container mt-4">
      <input
        type="text"
        name="nickname"
        className="me-2"
        placeholder="nickname"
        onChange={nameChange}
      ></input>
      <input
        name="password"
        type="password"
        placeholder="password"
        onChange={passwordChange}
      ></input>
      <button type="submit" className="btn btn-danger ms-2" onClick={submit}>
        Click me
      </button>
      <p>{text}</p>
    </div>
  );
};

export default Login;
