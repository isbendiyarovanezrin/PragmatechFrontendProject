import React, { useState, useEffect, useRef } from "react";

const Login = () => {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [text, setText] = useState("");
  const inputEl = useRef(null);
  const count = useRef(0);

  function nameChange(e) {
    setNickname({ nickname: e.target.value });
  }

  function passwordChange(e) {
    setPassword({ password: e.target.value });
  }

  function submit(e) {
    inputEl.current.focus();
    e.preventDefault();
  }

  useEffect(() => {
    alert("Salam, sən!🎈");
  }, []);

  useEffect(() => {
    count.current += 1;
  });

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
        ref={inputEl}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={passwordChange}
      />
      <button type="submit" className="btn btn-danger ms-2" onClick={submit}>
        Click me
      </button>
      <p>Component rerender: {count.current}</p>
      <p>{text}</p>
    </div>
  );
};

export default Login;
