import logo from "../../img/logo.png";
import s from "./Header.module.css";

const Header = () => {
  return (
    <div className={s.logo}>
      <img src={logo} alt="logo"></img>
    </div>
  );
};

export default Header;
