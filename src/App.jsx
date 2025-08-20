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
import ProfileSettings from "./components/ProfileSettings";
import Space from "./pages/Space";

function App() {
  return (
    <main>
      <Toaster />
      <Routes>
        {/* <Route element={<ProtectedRoute />}> */}
        <Route element={<Layout />}>
          <Route path="/*" element={<Home />} />

          <Route path={routes.favourites} element={<Favourites />} />
          <Route path={routes.messages} element={<Messages />} />
          <Route path="/profileSettings" element={<ProfileSettings />} />
          <Route path="/space">
            <Route path=":spaceId/teamdailytask" element={<Space />} />
            <Route
              path=":spaceId/memberssetting"
              element={<MembersSetttings />}
            />
          </Route>
        </Route>
        {/* </Route> */}
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
