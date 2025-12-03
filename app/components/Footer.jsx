import { FiArrowUp } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t dark:border-dark/20 pt-8 border-light/20 flex flex-wrap justify-between items-center dark:bg-gray-800">
      {" "}
      <p className="text-sm dark:text-white">
        {" "}
        &copy; {new Date().getFullYear()} — Copyright. All Rights reserved
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-light/10 hover:bg-light/20 text-light transition-colors"
      >
        <FiArrowUp size={20} />
      </a>
    </footer>
  );
};

export default Footer;