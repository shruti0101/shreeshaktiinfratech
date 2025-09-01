import React from "react";
import Link from "next/link";

const Adminpanel = () => {
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
      </nav>
    </aside>
  );
};

export default Adminpanel;
