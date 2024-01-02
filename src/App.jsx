import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import { useSelector } from "react-redux";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const admin = useSelector((state) => state.admin.admin);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
