import Searchbar from "@/components/Searchbar";

export default function Home() {
  return (
    <div className="mx-8 mt-6 lg:max-w-[1200px] lg:mx-auto">
      <div className="flex items-center justify-between gap-10">
        <img src="/logo.png" width="170" alt="Logo" />
        <Searchbar />
        Checkout
      </div>
    </div>
  );
}
