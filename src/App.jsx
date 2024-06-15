import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Landing from "./pages/landing/Landing";
import About from "./pages/about/About";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import How from "./pages/howitworks/How"
import Profile from './pages/profile/Profile';
import Success from './pages/success/Success';
import TransitionWrapper from "./components/transition/TransitionWrapper";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <TransitionWrapper>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/HowItWorks" element={<How />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Success" element={<Success />} />
        </Routes>
      </TransitionWrapper>
      <Footer />
    </Router>
  );
};

export default App;