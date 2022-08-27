import { Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import ViewUser from "./components/users/ViewUser";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/users/add" element={<AddUser />} />
        <Route exact path="/user/edit/:id" element={<EditUser />} />
        <Route exact path="/users/:id" element={<ViewUser />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
