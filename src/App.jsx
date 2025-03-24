import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import MembersSetttings from "./pages/MembersSetttings";
import Favourites from "./pages/Favourites";
import Messages from "./pages/Messages";
import AuthLayout from "./components/AuthLayout";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ForgetPassword from "./pages/Forgetpassword";
import OtpPage from "./pages/OtpPage";
import { Toaster } from "react-hot-toast";
import { routes } from "./utils/constant";
import ProtectedRoute from "./components/ProtectedRoute";
import BoardView from "./components/BoardView";
import ListView from "./components/ListView";
import Calendar from "./components/Calendar";

function App() {
  return (
    <main>
      <Toaster />
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path="" element={<Home />}>
              <Route path="/" element={<BoardView />} />
              <Route path="/listview" element={<ListView />} />
              <Route path="/calendar" element={<Calendar />} />
            </Route>
            <Route
              path={routes.membersettings}
              element={<MembersSetttings />}
            />
            <Route path={routes.favourites} element={<Favourites />} />
            <Route path={routes.messages} element={<Messages />} />
          </Route>
        </Route>
        <Route element={<AuthLayout />}>
          <Route path={routes.login} element={<LoginPage />} />
          <Route path={routes.signup} element={<SignUpPage />} />
          <Route path={routes.forgotpassword} element={<ForgetPassword />} />
          <Route path={routes.confirmotp} element={<OtpPage />} />
          {/* <Route path={routes.Checkbox} element={<Checkbox />} /> */}
        </Route>
      </Routes>
    </main>
  );
}

export default App;
