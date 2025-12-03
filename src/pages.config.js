import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';
import Technology from './pages/Technology';
import FAQ from './pages/FAQ';
import HowItWorks from './pages/HowItWorks';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "Marketplace": Marketplace,
    "Pricing": Pricing,
    "About": About,
    "Contact": Contact,
    "Technology": Technology,
    "FAQ": FAQ,
    "HowItWorks": HowItWorks,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};