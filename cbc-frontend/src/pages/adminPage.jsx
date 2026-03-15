
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function AdminPage() {
    return (
        <div className="w-full h-[100vh] bg-primary flex p-2">
            <div className="w-[300px] h-full bg-prmary">

            </div>
            <div className="w-[calc(100%-300px)] h-full border-[2px] border-accent rounded-[20px]" >
                <Routes>
                    <Route path="/" element={<h1>Admin Home</h1>} />
                    <Route path="/products" element={<h1>Manage Products</h1>} />
                </Routes>

            </div>

        </div>
    )
}