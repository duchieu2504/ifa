import Home from "./component/Page/Home";
import React from "react";
import {
    BrowserRouter,
    Navigate,
    Route,
    Router,
    Routes,
} from "react-router-dom";
import Header from "./component/Header";
import Footer from "component/Footer";
function App() {
    return (
        <BrowserRouter>
            <Header />
            <main>
                <Routes>
                    <Route extra path="/home" element={<Home />} />
                    <Route path="/" element={<Navigate replace to="/home" />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
