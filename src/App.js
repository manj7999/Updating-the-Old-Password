import { Link } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Product";
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div>
      <header>
      
      </header>
      <main>
      <Link to="/welcome">
        <Welcome />
      </Link>
      <Link to="/products">
        <Products />
      </Link>
      </main>
    </div>
  );
}

export default App;

// our-domain.com/welcome Component
// our-domian.com/products Component
