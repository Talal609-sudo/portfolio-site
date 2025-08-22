import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav() {
  const { pathname } = useRouter();
  const Item = ({ href, label }) => (
    <Link
      href={href}
      className={`px-3 py-2 rounded-xl text-sm md:text-base transition-colors ${pathname === href ? "bg-gray-900 text-white" : "hover:bg-gray-100"}`}
    >
      {label}
    </Link>
  );

  return (
    <header className="w-full border-b bg-white sticky top-0 z-10">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="font-semibold">Talal Shabib</div>
        <div className="flex gap-2 sm:gap-3">
          <Item href="/" label="Home" />
          <Item href="/work" label="Work" />
          <Item href="/about" label="About" />
          <Item href="/contact" label="Contact" />
        </div>
      </nav>
    </header>
  );
}
