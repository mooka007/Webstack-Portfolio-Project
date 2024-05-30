import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Error from "./components/Error/Error";
import About from "./components/About/About.js"
import Property from "./components/Property/Property.js";
import AgentDashboard from "./components/Agent/AgentDashboard";
import Contact from "./components/Contact/Contact.js";
import LoginForm from "./components/Forms/LoginForm.js";
import SignupForm from "./components/Forms/SignupForm.js";
import RegisterAgent from "./components/Forms/RegisterAgent.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="property" element={<Property />} />
        <Route path="agentDashboard" element={<AgentDashboard />} />
        <Route path="contact" element={<Contact />} />
        <Route path="loginForm" element={<LoginForm />} />
        <Route path="SignupForm" element={<SignupForm />} />
        <Route path="AgentForm" element={<RegisterAgent />} />
        <Route path="*" element={<Error />} /> 
      </Routes>
    </>
  );
}

export default App;
