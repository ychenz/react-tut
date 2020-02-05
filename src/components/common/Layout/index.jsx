import React from "react";
import NavigationSimple from "../NavigationSimple";
import "./style.scss";

const Layout = (props) => (
        <div>
            <div>
                <NavigationSimple/>
            </div>

            <div className="Layout-body">
                {props.children}
            </div>
        </div>
);

export default Layout;
