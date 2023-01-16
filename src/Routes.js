import React from "react";
import Laptop1024px from "pages/Laptop1024px";
import Desktop1920px from "pages/Desktop1920px";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/desktop1920px" element={<Desktop1920px />} />
        <Route path="/laptop1024px" element={<Laptop1024px />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
