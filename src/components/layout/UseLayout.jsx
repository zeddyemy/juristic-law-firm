import React from "react";

import MainLayout from "./MainLayout";

const UseLayout = ({ page, ...rest }) => {
    return (
        <>
            <MainLayout>{page}</MainLayout>
        </>
    );
};

export default UseLayout;
