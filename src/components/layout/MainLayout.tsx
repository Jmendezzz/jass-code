import { Outlet } from "react-router-dom";
import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-26">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
