import React from "react";
import { navigationData } from "../data";
export default function NavMobile() {
  return (
    <div>
      <ul className="flex flex-col px-6 py-8 gap-y-4">
        {navigationData.map((data, index) => {
          return (
            <li key={index}>
              <a className="text-white" href={data.href}>{data.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
