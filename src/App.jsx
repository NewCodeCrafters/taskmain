import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import MembersSetttings from "./pages/MembersSetttings";
import Favourites from "./pages/Favourites";
import Messages from "./pages/Messages";

function App() {
  return (
    <main>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/memberssettings" element={<MembersSetttings />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/messages" element={<Messages />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
