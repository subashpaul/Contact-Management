import React, { useState } from "react";

import { Link } from "react-router-dom";
import { Contacticon, Mapicon } from "./icons";

const Home = () => {
  const menus = [
    {
      name: "Contacts",
      link: "/",
      icon: Contacticon,
    },
    {
      name: "Charts & Map",
      link: "/dashboard",
      icon: Mapicon,
    },
  ];
  const [open, setOpen] = useState(true);

  const [active, setActive] = useState<any>(
    window.location.pathname === "/dashboard" ? 1 : 0
  );

  return (
    <section className="flex gap-6">
      <div
        className={`bg-[#0e0e0e] min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-3`}>
        <div className="py-3 flex justify-end">
          <p className="cursor-pointer" onClick={() => setOpen(!open)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-align-justify">
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
          </p>

          <p />
        </div>
        <div className="mt-4 flex flex-col gap-1 relative space-y-5">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              onClick={() => setActive(i)}
              className={` ${
                active === i ? "bg-gray-500 hover:bg-gray-500" : ""
              } group flex items-center gap-3.5 font-bold p-2 hover:bg-gray-800 rounded-md uppercase text-md `}>
              <div
                className="flex justify-center"
                dangerouslySetInnerHTML={{ __html: menu?.icon }}></div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}>
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}>
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
