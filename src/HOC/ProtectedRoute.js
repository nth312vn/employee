import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { setLastPathName } from "../actions/usersAction";

export const ProtectedRoute = ({ children, isAuthenticated }) => {
  const { pathname } = useLocation();
  const user = useSelector((state) => state.users);
  const dispatch = useDispatch();
  if (!isAuthenticated && !user.lastPathName) {
    dispatch(setLastPathName(pathname));
  }
  return <>{isAuthenticated ? children : <Navigate to="/login" />}</>;
};
