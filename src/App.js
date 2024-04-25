import { Provider } from "react-redux";
import Header from "./components/Header/Header";
import Main from "./components/Main";
import store from "./store";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Main />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
