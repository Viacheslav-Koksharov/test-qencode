import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const useTogglePassword = () => {
  const [passwordType, setPasswordType] = useState("password");

  const togglePassword = () => {
    setPasswordType((prevType) =>
      prevType === "password" ? "text" : "password"
    );
  };

  const PasswordButton = () => (
    <button className="shown-password" onClick={togglePassword}>
      {passwordType === "password" ? (
        <BsEye className="password-icon" />
      ) : (
        <BsEyeSlash className="password-icon" />
      )}
    </button>
  );

  return { passwordType, PasswordButton };
};

export default useTogglePassword;
