import Home from './Home';
import About from './About';
import Contact from "./Contact"
import {Routes,Route,BrowserRouter} from 'react-router-dom';

function Router(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    )
}

export default Router;
