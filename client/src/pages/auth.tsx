import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Auth: React.FC = () => {
    const [isLogin, setIsLogin] = useState<boolean>(true);
    const [email, setEmail] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isSuccessful, setIsSuccessful] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const endpoint = `${import.meta.env.VITE_SERVER}/auth/${isLogin ? "login" : "signup"}`;

        try {
            const response = await axios.post(endpoint, {
                email: isLogin ? undefined : email,
                username,
                password,
            });

            // Save the token in sessionStorage
            sessionStorage.setItem("token", response.data.token);
            sessionStorage.setItem("username", username);
            setIsSuccessful(true);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error("Axios error response data:", error.response?.data);
                console.error("Axios error response status:", error.response?.status);
                console.error("Axios error message:", error.message);
            } else {
                console.error("Unexpected error:", error);
            }
        }
    };

    useEffect(() => {
        if (isSuccessful) {
            if (isLogin) {
                navigate("/");
            } else {
                navigate("/auth");
            }
            setIsSuccessful(false);
        }
    }, [isSuccessful, isLogin, navigate]);

    return (
        <div className='auth-container'>
            <form className='auth-form' onSubmit={handleSubmit}>
                <h1>{isLogin ? "Log In" : "Sign Up"}</h1>
                {!isLogin && (
                    <div>
                        <label>
                            Email:
                            <input
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required={!isLogin}
                            />
                        </label>
                    </div>
                )}
                <div>
                    <label>
                        Username:
                        <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} required />
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <button type='submit'>{isLogin ? "Log In" : "Sign Up"}</button>
            </form>
            <div className='switch-button' onClick={() => setIsLogin(!isLogin)}>
                Switch to {isLogin ? "Sign Up" : "Log In"}
            </div>
        </div>
    );
};

export default Auth;
