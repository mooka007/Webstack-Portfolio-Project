import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useLogin } from '../../hooks/useAuthentication'


const LoginForm = () => {
    // authentication
    const { login } = useLogin();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async () => {
            await login(email, password)
            
    };
    
    const handleEmail = (e) => {
        setEmail(e.target.value);
        
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    return (
    <div className="Property">
        <Header />
        {/* login form */}

        <form onSubmit={handleSubmit}>
            <div className="flex  text-left py-20 bg-zinc-700 h-[500px] mb-10 justify-center align-middle text-xl mt-20">
            <div className="w-[400px] ">
                <div className="grid grid-cols-2  mb-4 align-middle">
                <div
                    className="bg-zinc-900 flex justify-center align-middle py-4"
                    onClick={() => navigate("/register")}
                >
                    Sign up
                </div>
                <div
                    className="bg-zinc-800 flex justify-center align-middle py-4"
                    onClick={() => navigate("/login")}
                >
                    Login
                </div>
                </div>
                <div>
                <label>Email Address</label>
                <input
                    className="formInput"
                    type="email"
                    name="email"
                    onChange={handleEmail}
                    value={email}
                    placeholder="email@email.com"
                    required
                />
                </div>

                <div>
                <label>Password</label>
                <input
                    className="formInput"
                    type="password"
                    name="password"
                    onChange={handlePassword}
                    placeholder="Enter Password"
                    value={password}
                />
                </div>

                <div className="mx-auto text-left text-xl">
                <button type="submit button" className="px-10 py-4">
                    Submit
                </button>
                </div>
            </div>
            </div>
        </form>

        <Footer />
        </div>
    );
};

export default LoginForm;
