import { Provider } from 'react-redux';
import Header from './components/Header/Header';
import Main from './components/Main';
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <Header />
    <Main />
    </Provider>
  );
}

export default App;
