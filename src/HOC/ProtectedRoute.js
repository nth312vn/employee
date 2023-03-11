import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children, isAuthenticated }) => {
  return <>{isAuthenticated ? children : <Navigate to="/login" />}</>;
};
