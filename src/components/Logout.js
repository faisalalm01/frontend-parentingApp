import React from "react";
import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import axios from "axios";
import { logoutRoute } from "../utils/APIRoutes";
export default function Logout() {
  const navigate = useNavigate();
  const handleClick = async () => {
    const id = await JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    )._id;
    const data = await axios.get(`${logoutRoute}/${id}`);
    if (data.status === 200) {
      localStorage.clear();
      navigate("/login");
    }
  };
  return (
    <button
      onClick={handleClick}
      className="font-bold hover:bg-red-400 inline-flex items-center bg-blue-400 border-0 py-3 px-4 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
    >
      <FiLogOut />
    </button>
  );
}
