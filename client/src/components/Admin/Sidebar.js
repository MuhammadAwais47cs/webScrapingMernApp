import React from "react";
// import "./sidebar.css";
import { Link } from "react-router-dom";

import { IonIcon } from "@ionic/react";
import "./Navigation.css";
import { navigationItems } from "./data";

const Sidebar = () => {
  return (
    <div className="navigation">
      <ul>
        {navigationItems.map((item) => (
          <li key={item.id}>
            <Link href="#">
              <span className="icon">
                <IonIcon name={item.icon} />
              </span>
              <span className="title">{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
