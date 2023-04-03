import { Link } from "@remix-run/react";
import React from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Transition } from "@headlessui/react";


function HamburguerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main >
      <div className="relative">
      <div className="flex items-center">
        <button
          onClick={toggleMenu}
          className="p-2 text-gray-500 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          <FaBars />
        </button>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-in-out duration-500 transform"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-500 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <div className="fixed inset-0 z-10 bg-white">
          <div className="absolute left-0 top-0 h-full bg-white w-64 shadow-lg">
            <div className="p-4">
              <h1 className="text-2xl font-bold">Menu</h1>
            </div>
            <ul className="py-4">
              <li className="px-4 py-2 text-lg hover:bg-gray-100">Home</li>
              <li className="px-4 py-2 text-lg hover:bg-gray-100">About</li>
              <li className="px-4 py-2 text-lg hover:bg-gray-100">Contact</li>
            </ul>
          </div>
        </div>
      </Transition>
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
        ></div>
      )}
    </div>

       
    </main>
  );
}


export default HamburguerMenu;
