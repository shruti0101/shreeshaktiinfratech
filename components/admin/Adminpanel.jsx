
"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Adminpanel = () => {


   const router = useRouter();


    const handleLogout = () => {
    document.cookie =
      "admin-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    router.push("/admin/login");
  };

  return (
    <aside className="w-64 bg-white shadow-md hidden md:block">
      <div className="p-6 text-2xl font-bold border-b">Admin Panel 👨‍💻</div>
      <nav className="p-4 space-y-3 flex flex-col">
        <Link
          href="/admin"
          className="bg-blue-600 text-lg text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
        >
          📄 All Blogs
        </Link>
        {/* Future menu items */}

        
         <Link
              href="/admin/new"
              className="bg-blue-600 text-lg text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
            >
              + New Blog
            </Link>


             <div className="p-6 ">
      
      <button
        onClick={handleLogout}
        className="mt-4 px-4 cursor-pointer py-2 bg-red-600 text-white rounded-md"
      >
        Logout
      </button>
    </div>
      </nav>
    </aside>
  );
};

export default Adminpanel;
