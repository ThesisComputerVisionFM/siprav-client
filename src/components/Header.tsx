import useModal from "../hooks/useModal";
import EventModal from "./EventModal";

const Header = () => {
  const { isOpen, open, close } = useModal();

  return (
    <header className="z-10 h-20 px-12 flex items-center border-b bg-bg-dark">
      <div className="flex items-center gap-12">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2132/2132763.png"
          alt="Logo"
          className="h-14 cursor-pointer"
        />
        <h1 className="text-3xl font-bold text-center text-white">
          Monitoring Screen
        </h1>
      </div>
      <div className="flex items-center gap-3 ml-auto">
        <button className="text-white px-12 py-2 transition-colors duration-300 ease-in-out bg-interactive-blue hover:bg-blue-600 rounded shadow-md">
          History
        </button>
        <button
          className="text-white px-12 py-2 transition-colors duration-300 ease-in-out bg-interactive-blue hover:bg-blue-600 rounded shadow-md"
          onClick={open}
        >
          Table
        </button>
        <EventModal isOpen={isOpen} close={close} />
      </div>
    </header>
  );
};

export default Header;
