import { MdKeyboardArrowDown } from "react-icons/md";

const Searchbar = () => {
  return (
    <div className="w-full h-10 flex gap-6">
      <div className="border border-[3px] border-secondary flex-grow flex">
        <select
          id="category"
          name="category"
          className="pl-6 pr-12 bg-gray-100 appearance-none text-gray-500 text-sm"
        >
          <option value="all">All</option>
          <option value="fiction">Fiction</option>
          <option value="nonfiction">Nonfiction</option>
          <option value="fantasy">Fantasy</option>
          <option value="action">Action</option>
        </select>
        <MdKeyboardArrowDown
          className="relative pointer-events-none text-gray-500 top-[7px] right-10"
          size={16}
        />
        <input
          id="search"
          name="search"
          type="text"
          placeholder="Search for a book"
          className="w-full -ml-4 pl-4 pb-0.5"
        />
      </div>
      <button className="bg-primary text-white px-12">Search</button>
    </div>
  );
};

export default Searchbar;
