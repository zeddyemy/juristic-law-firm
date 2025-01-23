import React, { useState, useEffect, useRef } from "react";

// layout components
import Header from "./Header";

// import bootstrap components
import Container from "react-bootstrap/Container";

const MainLayout = ({ children }) => {

    return (
        <>
            <div className="App">
                <Header />
                <div className="wrapper">{children}</div>
            </div>
        </>
    );
};

export default MainLayout;
