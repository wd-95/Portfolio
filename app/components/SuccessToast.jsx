"use client";

import { FiX } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";


const SuccessToast = ({ onClose }) => {
  return (
    <div className="fixed z-50 top-6 right-6">
      <div className="flex items-start gap-3 bg-white dark:bg-gray-900 rounded-md shadow-lg border border-emerald-500/70 px-4 py-3 min-w-[260px]">

        
        <div className=" px-5 py-2">
          <div className="flex items-center gap-2 mb-1">
            <FaCheckCircle className="text-emerald-500" size={32} />
            <span className=" text-gray-900 dark:text-white">
              Successfully submitted
            </span>
          </div>
        </div>

        
        <button
          type="button"
          onClick={onClose}
          className="ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
          aria-label="Close notification"
        >
          <FiX size={14} />
        </button>
      </div>
    </div>
  );
};

export default SuccessToast;
