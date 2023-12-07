import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import { BrowserRouter } from 'react-router-dom';
import MyLayout from "./layouts/MyLayout.jsx";
import Router from "./router/Router.jsx";
import GlobalStyles from "./global-styles.js";

function App() {
  return <Provider store={store}>
    <BrowserRouter>
      <MyLayout>
        <GlobalStyles />
        <Router />
      </MyLayout>
    </BrowserRouter>
  </Provider>
}
export default App
