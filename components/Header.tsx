import MoodHappy from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/mood-happy.tsx";

type Props = {
  active: string;
};

export default function Header({ active }: Props) {
  const menus = [
    { name: "Today", href: "/" },
    { name: "Previous", href: "/previous" },
    { name: "Kaihei ↗︎", href: "https://kaihei.shmn7iii.net/" },
  ];

  return (
    <header className="w-full">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <a href="/">
          <div className="flex items-center gap-1">
            <MoodHappy aria-hidden="true" />
            <div className="text-2xl ml-1 font-bold">
              Honjitsu
            </div>
          </div>
        </a>
        <ul className="flex items-center gap-6">
          {menus.map((menu) => (
            <li>
              <a
                href={menu.href}
                className={"text-gray-500 hover:text-gray-700 py-1 border-gray-500" +
                  (menu.href === active ? " font-bold border-b-2" : "")}
              >
                {menu.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
