import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* user layout */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
        </Route>

        {/* admin layout */}
        {/* <Route path="/admin" element={<AdminLayout />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
