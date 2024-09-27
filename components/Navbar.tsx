import Image from "next/image";
import Topbar from "./Topbar";
import Searchbar from "@/components/Searchbar";

const Navbar = () => {
  return (
    <nav>
      <Topbar />
      <div className="lg:max-w-[1200px] lg:mx-auto mx-8">
        <div className="mx-8 mt-6 lg:max-w-[1200px] lg:mx-auto">
          <div className="flex items-center justify-between gap-10">
            <Image src="/logo.png" width="170" height="40" alt="Logo" />
            <Searchbar />
            Checkout
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
