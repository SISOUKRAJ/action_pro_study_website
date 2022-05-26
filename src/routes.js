import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";

// import Navigators from "./Navigators";
// import Footer from "./Footer";
import Home from "./views/Home/index";
import LoginPage from "./views/login/index";
// import Errors from "./views/Errors_page/index";
import SingleMovie from "./views/single-movie/index";
// import MultiMovies from "./views/multi-movies/index";

const Header = () => {

    return (
        <div>
            {/* <Navigators /> */}

            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/home" element={<Home />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/name=:id" element={<SingleMovie />} />
                {/* <Route path="/:category/:id" element={<SingleMovie />} /> */}
            </Routes>

            {/* <Footer /> */}
        </div>

    );
};

export default Header;