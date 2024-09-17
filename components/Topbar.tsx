const Topbar = () => {
  const menuButtons = ["Bestsellers", "Deals", "Gift Cards", "Membership"];

  return (
    <div className="bg-secondary">
      <div className="container flex justify-between">
        <div>
          {menuButtons.map((item, index) => (
            <button
              key={index}
              className={`py-4 px-8 text-xs text-white font-bold tracking-wider ${
                index === menuButtons.length - 1 ? "bg-primary" : ""
              }`}
            >
              {item.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
