import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Collection from "./pages/Collection";
import MyOrder from "./pages/MyOrder";
// import AdminLayout from "./components/Layout/AdminLayout";
import {Toaster} from "sonner"
function App() {
  return (
    <BrowserRouter>
    <Toaster position="top-right" richColors />
      <Routes>
        {/* user layout */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="collections/:collection" element={<Collection />} />
          {/* <Route path="my-orders" element={<MyOrder />} /> */}
        </Route>

        {/* admin layout */}
        {/* <Route path="/admin" element={<AdminLayout />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
