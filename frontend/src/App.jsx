import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import {Toaster} from "sonner"
function App() {
  return (
    <BrowserRouter>
    <Toaster position="top-right" richColors />
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
