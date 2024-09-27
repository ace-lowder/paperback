const Searchbar = () => {
  return (
    <div className="w-full h-10 flex gap-6">
      <div className="border border-[3px] border-secondary flex-grow flex">
        <select id="category" name="category" className="px-6 appearance-none">
          <option value="all">All</option>
          <option value="fiction">Fiction</option>
          <option value="nonfiction">Nonfiction</option>
          <option value="fantasy">Fantasy</option>
          <option value="action">Action</option>
        </select>
      </div>
      <button className="bg-primary text-white px-12">Search</button>
    </div>
  );
};

export default Searchbar;
