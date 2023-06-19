import Link from "next/link";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav className="sticky top-0 flex flex-col justify-between bg-slate-600 p-4 text-white drop-shadow-xl md:flex-row">
      <h1 className="mb-2 grid place-content-center text-2xl font-bold md:mb-0">
        <Link href={"/"}>{process.env.NEXT_PUBLIC_TITLE_PAGE}</Link>
      </h1>
      <Search />
    </nav>
  );
};

export default Navbar;
