import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="nickname">nickname : </label>
        <input
          type="text"
          id="nickname"
          value={nickName}
          onChange={(e) => setNickName(e.target.value)}
        />
        <label htmlFor="password">password : </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>로그인</button>
      </form>
      <button onClick={() => navigation("/signup")}>회원가입</button>
    </>
  );
};

export default Login;
