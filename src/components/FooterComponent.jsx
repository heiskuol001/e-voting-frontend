import React from "react";

const FooterComponent = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 w-full mt-auto border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400">

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

        {/* Logo + Links */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-xl font-black mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">E-VOTING</h1>
          <ul className="space-y-2 text-sm font-medium">
            <li className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors">Home</li>
            <li className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors">About</li>
            <li className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-lg font-bold mb-4 text-slate-800 dark:text-slate-200">Contact Us</h2>
          <ul className="space-y-2 text-sm font-medium">
            <li>Email: heiskuol001@gmail.com</li>
            <li>Phone: +256 705 834 443</li>
            <li>Address: Kampala, Uganda</li>
          </ul>
        </div>

        {/* Socials */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-lg font-bold mb-4 text-slate-800 dark:text-slate-200">Follow Us</h2>
          <ul className="space-y-2 text-sm font-medium">
            <li className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors">Facebook</li>
            <li className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors">Twitter</li>
            <li className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors">Instagram</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-100 dark:border-slate-800/50 bg-slate-50 dark:bg-slate-900/50 text-center text-xs font-medium py-4">
        © {new Date().getFullYear()} E-Voting System. All rights reserved.
      </div>

    </footer>
  );
};

export default FooterComponent;