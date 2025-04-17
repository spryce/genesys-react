import { useLocation } from "react-router-dom";
import SideNav from "./components/SideNav";
import Navbar from "./components/Navbar";
import ScrollingImageCarousel from "./components/ScrollingImageCarousel";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import './Layout.css';

const Layout = ({ categories, onCategorySelect, selectedCategory }) => {
  const location = useLocation(); // Get the current route

  // Define pages where SideNav should be hidden
  const hideSideNavRoutes = ["/product"];
  const shouldHideSideNav = hideSideNavRoutes.some(route => location.pathname.startsWith(route));

  return (
    <div id="container">
      <header className="app-header">
        <img src={'./assets/images/genesys_logo2.gif'} alt="Genesys Logo" className="app-logo" />
      </header>
      <main id="main-content">
        <Navbar />
        {!shouldHideSideNav && (
          <SideNav categories={categories} onCategorySelect={onCategorySelect} selectedCategory={selectedCategory} />
        )}
        <Outlet />
      </main>
      <ScrollingImageCarousel />
      <Footer />
    </div>
  );
};

export default Layout;