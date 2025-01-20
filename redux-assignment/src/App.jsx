import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import "./App.scss";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="main-el">
        <Navbar />
        <Cart />
        <ProductList />
      </div>
    </Provider>
  );
}

export default App;
