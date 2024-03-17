import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../store/operations/authOpps";
import useTogglePassword from "../../hooks/useTogglePassword";
import useRefreshUser from "../../hooks/useRefreshUser";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { passwordType, PasswordButton } = useTogglePassword();
  const dispatch = useDispatch();

  useRefreshUser();

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ password, email }));
    setEmail("");
    setPassword("");
  };

  return (
    <main className="sign-in-page" onSubmit={handleSubmit}>
      <form className="sign-in-form" autoComplete="off">
        <h2 className="sign-in-form__title">Log in to your account</h2>
        <div className="sign-in-form__auth-social">
          <button className="social-button">
            <FcGoogle />
            Google
          </button>
          <button className="social-button">
            <FaGithub />
            Github
          </button>
        </div>
        <div className="separator">
          <div className="line"></div>
          <span className="separator-text">OR</span>
          <div className="line"></div>
        </div>
        <label className="input">
          <input
            data-test-id="auth-email"
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="Work email"
            required
          />
        </label>
        {email && (
          <>
            <label className="input">
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
            </label>
            <Link
              data-test-id="auth-sign-up-link"
              className="sign-in-form__link"
              to="/forgot-password"
            >
              Forgot your password?
            </Link>
          </>
        )}
        <button data-test-id="auth-submit" className="button">
          Log in to Qencode
        </button>
      </form>
      <span className="sign-in-form__sign-up">
        Is your company new to Qencode?
        <Link data-test-id="auth-sign-up-link" className="sign-in-form__link">
          Sign up
        </Link>
      </span>
    </main>
  );
};

export default LoginPage;
