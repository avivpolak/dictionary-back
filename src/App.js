/** @format */

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WordPage from "./WordPage";
import PosPage from "./PosPage";
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/:word" element={<WordPage />} />
                    <Route path="/:word/:pos" element={<WordPage />} />
                    <Route path="/part-of-speach/:pos" element={<PosPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
