import React, { useState } from 'react';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`flex ${isOpen ? 'w-60' : 'w-20'} flex-col h-screen p-3 bg-gray-800 shadow transition-width duration-300`}>
            <button 
                onClick={toggleSidebar} 
                className="text-white focus:outline-none">
                {isOpen ? 'Close' : 'Open'}
            </button>
            {isOpen && (
                <div className="space-y-3 mt-4">
                    <div className="flex items-center">
                        <h2 className="text-xl font-bold text-white">Menu</h2>
                    </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className="rounded-sm">
                                <a href="#user" className="flex items-center p-2 space-x-3 rounded-md text-gray-100">
                                    <span>User</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a href="#dashboard" className="flex items-center p-2 space-x-3 rounded-md text-gray-100">
                                    <span>Dashboard</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a href="#client" className="flex items-center p-2 space-x-3 rounded-md text-gray-100">
                                    <span>Client</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a href="#accounts" className="flex items-center p-2 space-x-3 rounded-md text-gray-100">
                                    <span>Accounts</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a href="#project" className="flex items-center p-2 space-x-3 rounded-md text-gray-100">
                                    <span>Project</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a href="#employee" className="flex items-center p-2 space-x-3 rounded-md text-gray-100">
                                    <span>Employee</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sidebar;
