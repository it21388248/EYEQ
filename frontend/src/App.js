import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useSelector } from "react-redux"; // Correct import
import Spinner from "./components/Spinner";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import ApplyDoctor from "./pages/ApplyDoctor";
import { Appointments } from "./functions/reservationFun/pages/Appointments";
import Doctors from "./pages/admin/Doctors";
import Prescription from "./functions/prescriptionFun/pages/Prescription";
import { Aform } from "./functions/reservationFun/pages/Aform";
import { Payment } from "./functions/reservationFun/pages/Payment";

function App() {
  const { loading } = useSelector((state) => state.alerts); // Correct useSelector usage

  return (
    <BrowserRouter>
      {loading ? (
        <Spinner />
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                {" "}
                <HomePage />{" "}
              </ProtectedRoute>
            }
          />

          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />

          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />

          {/* <Route path="/notification" element={<ProtectedRoute> <NotificationPage /> </ProtectedRoute>}/> */}

          <Route
            path="/appointments"
            element={
              <ProtectedRoute>
                <Appointments />
              </ProtectedRoute>
            }
          />

          <Route
            path="/payment"
            element={
              <ProtectedRoute>
                <Payment />
              </ProtectedRoute>
            }
          />

          <Route
            path="/apply-doctor"
            element={
              <ProtectedRoute>
                <ApplyDoctor />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/doctors"
            element={
              <ProtectedRoute>
                <Doctors />
              </ProtectedRoute>
            }
          />
          <Route
            path="/prescription"
            element={
              <ProtectedRoute>
                <Prescription />
              </ProtectedRoute>
            }
          />

          <Route
            path="/Aform"
            element={
              <ProtectedRoute>
                <Aform />
              </ProtectedRoute>
            }
          />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
