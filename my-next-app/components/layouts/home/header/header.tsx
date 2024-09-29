"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Header = () => {
  const router = useRouter();
  return (
    <header>
      header
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
