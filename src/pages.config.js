import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import Pricing from './pages/Pricing';
import HowItWorks from './pages/HowItWorks';
import About from './pages/About';
import Contact from './pages/Contact';
import Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "Marketplace": Marketplace,
    "Pricing": Pricing,
    "HowItWorks": HowItWorks,
    "About": About,
    "Contact": Contact,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: Layout,
};