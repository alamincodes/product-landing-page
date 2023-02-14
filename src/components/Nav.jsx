import React from "react";
import { navigationData } from "../data";

const Nav = () => {
  return (
    <div>
       <ul className="flex gap-x-8">
        {navigationData.map((data, index) => {
          return (
            <li key={index}>
              <a className="" href={data.href}>{data.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Nav;
