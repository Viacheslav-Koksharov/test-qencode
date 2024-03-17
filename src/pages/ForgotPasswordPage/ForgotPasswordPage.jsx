import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "../../store/operations/authOpps";
import useRefreshUser from "../../hooks/useRefreshUser";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useRefreshUser();
  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPassword({ email }));
    setEmail("");
    navigate("/reset-password");
  };

  const goBack = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <main className="sign-in-page" onSubmit={handleSubmit}>
      <form className="sign-in-form" autoComplete="off">
        <h2 className="sign-in-form__title">Forgot Password?</h2>
        <label className="input">
          <input
            data-test-id="auth-email"
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </label>

        <button data-test-id="auth-submit" className="button" type="submit">
          Send
        </button>
        <button
          data-test-id="auth-submit"
          className="button-cansel"
          onClick={goBack}
        >
          Cancel
        </button>
      </form>
    </main>
  );
};

export default ForgotPasswordPage;
