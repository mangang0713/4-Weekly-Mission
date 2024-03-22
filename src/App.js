import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shared from "./pages/Shared";
import Folder from "./pages/Folder";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/shared">
          <Route index element={<Shared />} />
        </Route>
        <Route path="/folder">
          <Route index element={<Folder />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;