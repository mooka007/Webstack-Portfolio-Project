import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const LoginForm = () => {
    // authentication

    const navigate = useNavigate();
    // implementing state and hooks
    const [inputs, setInputs] = useState({
        password: "",
        email: "",
    });

    const handleSubmit = async (event) => {
        if (event) {
        event.preventDefault();
        }
    };

    const handleInputChange = async (event) => {
        event.persist();
        const { name, value } = event.target;

        setInputs((prevInputs) => ({
        ...prevInputs,
        [name]: value,
        }));
    };

    return (
    <div className="Property">
        <Header />
        {/* login form */}

        <form onSubmit={handleSubmit}>
            <div className="flex  text-left py-20 bg-zinc-700 h-[500px] mb-10 justify-center align-middle text-xl ">
            <div className="w-[400px] ">
                <div className="grid grid-cols-2  mb-4 align-middle">
                <div
                    className="bg-zinc-900 flex justify-center align-middle py-4"
                    onClick={() => navigate("/SignupForm")}
                >
                    Sign up
                </div>
                <div
                    className="bg-zinc-800 flex justify-center align-middle py-4"
                    onClick={() => navigate("/loginForm")}
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
                    onChange={handleInputChange}
                    value={inputs.email}
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
                    onChange={handleInputChange}
                    placeholder="Enter Password"
                    value={inputs.password}
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
