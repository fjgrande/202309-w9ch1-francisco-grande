import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import AppStyled from "./AppStyled";
import Navigation from "../Navigation/Navigation";

const App = (): React.ReactElement => {
  return (
    <AppStyled>
      <h2 className="page-title">Gangster Movies List</h2>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/movies" />} />
        <Route path="/movies" element={<HomePage />} />
      </Routes>
    </AppStyled>
  );
};

export default App;
