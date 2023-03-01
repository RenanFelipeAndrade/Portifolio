import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="flex py-4 px-6 bg-stone-800 text-white justify-between">
      <div>
        <Link href={"/"}>
          <h3>Logo</h3>
        </Link>
      </div>
      <ul className="flex gap-6 transition-colors">
        <li className="hover:text-slate-200">
          <Link href={"#about"}>About me</Link>
        </li>
        <li className="hover:text-slate-200">
          <Link href={"#contact"}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};
