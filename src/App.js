import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Header } from "./components/Header";
import { Album } from "./pages/Album";
import { Envelopes } from "./pages/Envelopes";
import { SeriesInformation } from "./pages/SeriesInformation";
import { NotFound } from "./pages/NotFound";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Album />} />
          <Route exact path="/envelopes" element={<Envelopes />} />
          <Route
            exact
            path="/series-information"
            element={<SeriesInformation />}
          />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
