import React from "react";
import Global from "./styles/global";
import Header from "./components/Header";
import Resume from "./components/Resume";

const App = () => {
    return (
        <>
            <Header />
            <Resume />
            <Global />
        </>
    );
};

export default App;