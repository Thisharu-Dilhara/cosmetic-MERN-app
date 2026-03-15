import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function Login() {
        try {
            const response = await axios.post(import.meta.env.VITE_API_URL + "/api/users/login", {
                email: email,
                password: password
            });
            localStorage.setItem("token", response.data.token)
            toast.success("Login successful");
            const user = response.data.user;
            if (user.role === "admin") {
                navigate("/admin");
            } else {
                navigate("/");
            }

        } catch (error) {
            console.error("Login failed", error);
            toast.error("Login failed please check your credentials");
        }
    }

    return (
        <div className="relative w-full h-screen flex items-center justify-center bg-[url('/bg.png')] bg-cover bg-center overflow-hidden">
            {/* Dark overlay to make the form pop and ensure text readability */}
            <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>

            <div className="relative z-10 w-full max-w-md p-8 mx-4 md:mx-0">
                <div className="bg-primary/80 backdrop-blur-xl shadow-2xl rounded-3xl p-10 flex flex-col items-center border border-white/20">

                    {/* Brand Identity */}
                    <img src="/logo.png" alt="CBC Logo" className="w-24 mb-2 object-contain" />
                    <h1 className="text-secondary text-2xl font-bold tracking-tight mb-1">Crystal Beauty Clear</h1>
                    <p className="text-secondary/60 text-sm mb-8">Welcome back! Please enter your details.</p>

                    <div className="w-full space-y-5">
                        {/* Email Field */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-secondary font-medium text-sm ml-1">Email Address</label>
                            <input
                                type="email"
                                placeholder="name@company.com"
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl bg-white border border-secondary/10 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-200"
                            />
                        </div>

                        {/* Password Field */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-secondary font-medium text-sm ml-1">Password</label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl bg-white border border-secondary/10 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-200"
                            />
                        </div>

                        {/* Action Button */}
                        <button
                            onClick={Login}
                            className="w-full py-3.5 mt-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-xl shadow-lg shadow-accent/30 transform transition-active:scale-95 duration-200 cursor-pointer"
                        >
                            Sign In
                        </button>
                    </div>

                    {/* Footer Links */}
                    <div className="mt-8 flex flex-col items-center gap-2">
                        <a href="#" className="text-accent text-sm font-medium hover:underline">Forgot password?</a>
                        <p className="text-secondary/50 text-xs mt-4 uppercase tracking-widest font-bold">
                            Premium Cosmetics
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}