import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { handleInit } from "./actions/handleInitAction";
import "./App.css";
import MainLayout from "./components/mainLayout/MainLayout";
import { ProtectedRoute } from "./HOC/ProtectedRoute";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  const dispatch = useDispatch();

  const store = useSelector((state) => state);
  useEffect(() => {
    dispatch(handleInit());
  }, []);
  const user = store.users.authUser;

  console.log(store);
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/*"
        element={
          <ProtectedRoute isAuthenticated={user}>
            <MainLayout />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
