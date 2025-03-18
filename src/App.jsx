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

function App() {
  return (
    <main>
      <Toaster />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/membersettings" element={<MembersSetttings />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/messages" element={<Messages />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/forgotpassword" element={<ForgetPassword />} />
          <Route path="/confirmotp" element={<OtpPage />} />
          {/* <Route path="/confirmotp" element={<OtpPage />} /> */}
        </Route>
      </Routes>
    </main>
  );
}

export default App;
