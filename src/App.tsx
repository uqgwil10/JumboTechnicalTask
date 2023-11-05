import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./fontawesome-free-5.11.2-web/css/all.min.css";
import { useMovieStore } from "./store/store";
import { queryDiscover, queryConfiguration } from "./store/queries";
import { Store } from "./types";
import { Routes, Route, Outlet, Link } from "react-router-dom";

import SearchView from "./components/SearchView";
import DetailsView from "./components/DetailsView";
const app = () => {
  const state: Store = useMovieStore() as Store;
  const fetchInitialData = async () => {
    await queryConfiguration(state.setConfig);
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SearchView />} />

        <Route path="details/:showId" element={<DetailsView />} />
        <Route path="*" element={<SearchView />} />
      </Routes>
    </div>
  );
};

export default app;
