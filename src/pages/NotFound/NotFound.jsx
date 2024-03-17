import { useNavigate } from "react-router-dom";
import s from "./NotFound.module.css";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className={s.wrapper}>
      <div className={s.title} title="404">
        404
        <div className={s.msg}>
          <p style={{ margin: " 0 10px 0 0" }}>
            {" "}
            Someone messed up. I sure hope that it was't me.{" "}
          </p>
          <button className={s.button_back} onClick={() => navigate(-1)}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
