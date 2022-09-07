import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import ConnectPage from "pages/ConnectPage";
import RouteChecker from "./routeChecker";
import NftListPage from "pages/NftListPage";
import NotFound from "pages/NotFoundPage";

function MainRoute() {
  return (
    <RouteChecker>
      <Routes>
        <Route path="/" element={<ConnectPage />} />
        <Route path="/nftpage" element={<NftListPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </RouteChecker>
  );
}

export default MainRoute;
