import { useNavigate, useLocation } from "react-router-dom";
import SideNav from "./components/SideNav";
import Navbar from "./components/Navbar";
import ScrollingImageCarousel from "./components/ScrollingImageCarousel";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import './Layout.css';

const Layout = ({ categories, onCategorySelect, selectedCategory, onSeriesSelect }) => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current route

  const handleCategoryClick = (categoryId) => {
    onCategorySelect(categoryId);
    // Redirect to product page if not already there
    if (location.pathname !== "/") {
      navigate("/");
    }
  };

  // Define pages where SideNav should be hidden
  const hideSideNavRoutes = ["/product"];
  const shouldHideSideNav = hideSideNavRoutes.some((route) => location.pathname.startsWith(route));

  return (
    <div id="container">
      <header className="app-header">
        <img src={'./assets/images/genesys_logo2.gif'} alt="Genesys Logo" className="app-logo" />
      </header>
      <main id="main-content">
      <Navbar onSeriesSelect={onSeriesSelect} onCategorySelect={onCategorySelect} />
        {!shouldHideSideNav && (
          <SideNav categories={categories} onCategorySelect={handleCategoryClick} selectedCategory={selectedCategory} />
        )}
        <Outlet />
      </main>
      <ScrollingImageCarousel />
      <Footer />
    </div>
  );
};

export default Layout;
