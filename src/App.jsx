import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Layout from "./components/Layout";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Layout" element={<Layout />} />
      </Routes>
    </main>
  );
}

export default App;
