import Link from "next/link";

//STYLES
export default function Navigation() {
  return (
    <ul className="flex gap-16 item-center z-10">
      <Li>
        <Link href="/cabins">Cabins</Link>
      </Li>
      <Li>
        <Link href="/about">About</Link>
      </Li>
      <Li>
        <Link href="/account">Guest Area</Link>
      </Li>
    </ul>
  );
}

function Li({children}) {
  return (
    <li className="hover:text-accent-400 transition-colors text-xl">
      {children}
    </li>
  );
}
