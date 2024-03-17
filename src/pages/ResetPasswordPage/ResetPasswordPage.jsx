import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setNewPassword } from "../../store/operations/authOpps";
import useTogglePassword from "../../hooks/useTogglePassword";
import useRefreshUser from "../../hooks/useRefreshUser";

const ResetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const { passwordType, PasswordButton } = useTogglePassword();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useRefreshUser();

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (password === confirmPassword) {
        dispatch(setNewPassword({ password, confirmPassword }));
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        setPasswordMismatch(true);
      }
      setPassword("");
      setConfirmPassword("");
    },
    [password, confirmPassword, dispatch, navigate]
  );

  return (
    <main className="sign-in-page" onSubmit={handleSubmit}>
      <form className="sign-in-form" autoComplete="off">
        <h2 className="sign-in-form__title">Create new Password?</h2>
        <label className="input">
          <span className="input__heading">Password</span>
          <div className="input__wrapper">
            <input
              data-test-id="auth-password"
              name="password"
              type={passwordType}
              minLength={8}
              autoComplete="new-password"
              value={password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
            <PasswordButton />
          </div>
        </label>
        <label className="input">
          <span className="input__heading">Confirm Password</span>
          <div className="input__wrapper">
            <input
              data-test-id="confirm-password"
              name="confirmPassword"
              type={passwordType}
              minLength={8}
              autoComplete="new-password"
              value={confirmPassword}
              onChange={handleChange}
              placeholder="Password"
              required
            />
            <PasswordButton />
          </div>
        </label>
        {passwordMismatch && (
          <p className="error-message">
            Passwords do not match. Please try again.
          </p>
        )}
        <button data-test-id="auth-submit" className="button">
          Reset Password
        </button>
      </form>
    </main>
  );
};

export default ResetPasswordPage;
