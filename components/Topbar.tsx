const Topbar = () => {
  const menuButtons = ["Bestsellers", "Deals", "Gift Cards", "Membership"];

  return (
    <div className="bg-secondary">
      <div className="container">
        {menuButtons.map((item, index) => (
          <button
            key={index}
            className="py-4 px-8 text-xs text-white font-bold"
          >
            {item.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Topbar;
