import axios from "axios";
import { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function AdminProductPage() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(import.meta.env.VITE_API_URL + "/api/products").then(
            (response) => {
                console.log(response.data);
                setProducts(response.data);
            }
        )
    }, []);

    return (
        <div className="w-full min-h-screen p-6 bg-[var(--color-primary)]">
            <Link to="/admin/add-product" className="fixed right-[50px] bottom-[50px] text-5xl hover:text-accent " >
                <CiCirclePlus />
            </Link>

            {/* Header */}
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-[var(--color-secondary)]">
                    Product Management
                </h1>
                <p className="text-sm text-gray-500">
                    Manage your products, prices and categories
                </p>
            </div>

            {/* Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

                <table className="w-full text-sm">

                    {/* Table Header */}
                    <thead className="bg-[var(--color-secondary)] text-white">
                        <tr>
                            <th className="p-4 text-center">Image</th>
                            <th className="p-4 text-center">Product ID</th>
                            <th className="p-4 text-left">Name</th>
                            <th className="p-4 text-center">Price</th>
                            <th className="p-4 text-center">Labelled</th>
                            <th className="p-4 text-center">Category</th>
                            <th className="p-4 text-center">Actions</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                        {products.map((item) => {
                            return (
                                <tr
                                    key={item.productID}
                                    className="border-b hover:bg-[var(--color-primary)] transition duration-200"
                                >
                                    {/* Image */}
                                    <td className="p-4 text-center">
                                        <img
                                            src={item.image}
                                            className="h-[70px] w-[70px] object-cover rounded-xl border"
                                        />
                                    </td>

                                    {/* ID */}
                                    <td className="p-4 text-center text-gray-600 font-medium">
                                        {item.productID}
                                    </td>

                                    {/* Name */}
                                    <td className="p-4 font-semibold text-gray-800">
                                        {item.name}
                                    </td>

                                    {/* Price */}
                                    <td className="p-4 text-center">
                                        <span className="text-green-600 font-semibold">
                                            Rs. {item.price}
                                        </span>
                                    </td>

                                    {/* Labelled Price */}
                                    <td className="p-4 text-center">
                                        <span className="text-gray-400 line-through">
                                            Rs. {item.labelledPrice}
                                        </span>
                                    </td>

                                    {/* Category */}
                                    <td className="p-4 text-center">
                                        <span className="px-3 py-1 text-xs rounded-full bg-[var(--color-primary)] text-[var(--color-secondary)] font-medium">
                                            {item.category}
                                        </span>
                                    </td>

                                    {/* Actions */}
                                    <td className="p-4">
                                        <div className="flex gap-3 justify-center items-center">

                                            {/* Delete */}
                                            <button className="p-2 rounded-lg bg-red-100 hover:bg-red-200 transition">
                                                <FaRegTrashAlt className="text-red-600 text-lg" />
                                            </button>

                                            {/* Edit */}
                                            <button className="p-2 rounded-lg bg-[var(--color-accent)]/20 hover:bg-[var(--color-accent)]/40 transition">
                                                <FaRegEdit className="text-[var(--color-accent)] text-lg" />
                                            </button>

                                        </div>
                                    </td>

                                </tr>
                            );
                        })}
                    </tbody>

                </table>

            </div>

        </div>
    );
}