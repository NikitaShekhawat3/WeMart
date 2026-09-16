import React from "react";

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full mt-18 py-10 bg-gradient-to-b from-emerald-100/10 to-emerald-200">
        <div className="flex items-center">
        <span className="text-2xl font-bold text-primary-dull">WeMart</span>
    </div>

        {/* Copyright */}
        <p className="mt-4 text-center text-gray-700"> Copyright © 2025{" "}
            <a href="#" className="underline hover:text-emerald-900"> WeMart </a>
            . All rights reserved.
        </p>

    </footer>
  );
}

export default Footer;