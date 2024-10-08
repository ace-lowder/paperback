import { FaRegUserCircle, FaRegHeart } from "react-icons/fa";

const Topbar = () => {
  const menuButtons = ["Bestsellers", "Deals", "Gift Cards", "Membership"];

  return (
    <div className="bg-secondary text-xs text-white font-bold tracking-wider">
      <div className="lg:max-w-[1200px] lg:mx-auto flex justify-between">
        <div className="-ml-8">
          {menuButtons.map((item, index) => (
            <button
              key={index}
              className={`py-4 px-8 hover:underline ${
                index === menuButtons.length - 1 ? "bg-primary" : ""
              }`}
            >
              {item.toUpperCase()}
            </button>
          ))}
        </div>
        <div className="flex -mr-6">
          <button className="flex px-6 gap-2 items-center hover:underline">
            <FaRegUserCircle size={16} /> SIGN IN
          </button>
          <button className="flex px-6 gap-2 items-center hover:underline">
            <FaRegHeart size={16} className="mb-0.5" /> WISHLIST
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
