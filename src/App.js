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
                    <Route extra path="/ifa/home" element={<Home />} />
                    <Route
                        path="/ifa"
                        element={<Navigate replace to="/ifa/home" />}
                    />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
