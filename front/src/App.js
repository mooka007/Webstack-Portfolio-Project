import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Error from "./components/Error/Error";
import About from "./components/About/About.js"
import Property from "./components/Property/Property.js";
import Agent from "./components/Agent/Agent.js"
import AgentDashboard from "./components/Agent/AgentDashboard";
import Contact from "./components/Contact/Contact.js";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="property" element={<Property />} />
        <Route path="agent" element={<Agent />} />
        <Route path="agentDashboard" element={<AgentDashboard />} />
        <Route path="contact" element={<Contact />} />
        {/*
        <Route path="blog" element={<Blog />} />
        
        <Route path="UserForm" element={<SignupForm />} />
        <Route path="AgentForm" element={<RegisterAgent />} />
        <Route path="loginForm" element={<LoginForm />} />*/}
        <Route path="*" element={<Error />} /> 
      </Routes>+
    </>
  );
}

export default App;
