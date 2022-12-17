import { useNavigate } from "react-router-dom";
import { postSignup } from "../core/api/login/queries";
import { useInput } from "../core/utils/useInput";

const Signup = () => {
  const [nickname, setNickName] = useInput();
  const [password, setPassword] = useInput();
  const navigation = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    postSignup({
      nickname,
      password,
    }).then((res) => {
      localStorage.setItem("id", res.headers.authorization);
      navigation("/login");
    });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="nickname">nickname : </label>
        <input
          type="text"
          id="nickname"
          value={nickname}
          onChange={setNickName}
        />
        <label htmlFor="password">password : </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={setPassword}
          autoComplete="off"
        />
        <button>회원가입</button>
      </form>
      <button onClick={() => navigation("/login")}>로그인</button>
    </>
  );
};

export default Signup;
