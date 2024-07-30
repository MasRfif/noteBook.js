"use client";

import Logo from "./logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function SideNav() {
  const dashboardMenu = [
    { name: "Home", href: "/dashbord" },
    { name: "Introduction", href: "/dashbord/First-list" },
    { name: "Product List", href: "/dashbord/Second-list" },
    { name: "team", href: "/dashbord/Agents" },
  ];

  const pathname = usePathname();

  console.log(pathname);

  return (
    <aside className="bg-slate-300 p-4 flex flex-col space-y-4 rounded-lg h-5/6 w-52">
      <Logo className="w-auto h-full" />
      <nav>
        <ul className="flex flex-col space-y-2">
          {dashboardMenu.map((menu, index) => (
            <li key={index}>
              <Link
                href={menu.href}
                className={`p-2 rounded-lg block ${
                  pathname === menu.href ? "bg-slate-400" : "bg-slate-200"
                }`}
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
