import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { refreshUser } from "../store/operations/authOpps";

function useRefreshUser() {
  const dispatch = useDispatch();

  useCallback(() => {
    try {
      dispatch(refreshUser());
    } catch (error) {
      throw new Error("Error refreshing user");
    }
  }, [dispatch]);
}

export default useRefreshUser;
