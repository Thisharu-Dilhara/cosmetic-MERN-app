
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FaChartLine } from "react-icons/fa";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { BsBox2Heart } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import AdminProductPage from "./admin/adminProductPage";
import AddProductPage from "./admin/adminAddNewProduct";

export default function AdminPage() {
    return (
        <div className="w-full h-[100vh] bg-primary flex p-2 text-secondary">
            <div className="w-[300px] h-full bg-prmary flex flex-col items-center gap-[10px]">
                <div className="flex flex-row w-[90%] h-[70px] bg-accent items-center rounded-2xl mb-[20px]">
                    <img src="/logo.png" alt="CBC - crystal beauti Clear " className="h-[70px]" />
                    <span className=" text-white text-xl">Admin panel </span>
                </div>
                <Link to="/admin/dashboard" className="w-[90%] flex items-center gap-2 px-4 rounded-lg" >
                    <FaChartLine />
                    Dashboard
                </Link>
                <Link to="/admin/orders" className="w-[90%] flex items-center gap-2 px-4 rounded-lg" >
                    <MdOutlineShoppingCartCheckout className="text-xl" />
                    Orders
                </Link>
                <Link to="/admin/products" className="w-[90%] flex items-center gap-2 px-4 rounded-lg" >
                    <BsBox2Heart />
                    Products
                </Link>
                <Link to="/admin/users" className="w-[90%] flex items-center gap-2 px-4 rounded-lg" >
                    <FiUsers />
                    Users
                </Link>

            </div>
            <div className="w-[calc(100%-300px)] h-full border-[4px] border-accent rounded-[20px] overflow-hidden" >
                <div className=" h-full w-full max-w-full max-h-full overflow-scroll text-secondary">
                    <Routes>
                        <Route path="/" element={<h1>dashboard</h1>} />
                        <Route path="/products" element={<AdminProductPage />} />
                        <Route path="/add-product" element={<AddProductPage />} />
                    </Routes>


                </div>

            </div>

        </div>
    )
}