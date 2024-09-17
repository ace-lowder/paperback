import { FaRegUserCircle, FaRegHeart } from "react-icons/fa";

const Topbar = () => {
  const menuButtons = ["Bestsellers", "Deals", "Gift Cards", "Membership"];

  return (
    <div className="bg-secondary text-xs text-white font-bold tracking-wider">
      <div className="container flex justify-between">
        <div>
          {menuButtons.map((item, index) => (
            <button
              key={index}
              className={`py-4 px-8 ${
                index === menuButtons.length - 1 ? "bg-primary" : ""
              }`}
            >
              {item.toUpperCase()}
            </button>
          ))}
        </div>
        <div className="flex">
          <button className="flex px-6 gap-2 items-center">
            <FaRegUserCircle size={16} /> SIGN IN
          </button>
          <button className="flex px-6 gap-2 items-center">
            <FaRegHeart size={16} className="mb-0.5" /> WISHLIST
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
