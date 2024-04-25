import { Provider } from "react-redux";
import store from "./store";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Layout from "./Layout";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import { formAction } from "./components/Auth/AuthForm";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home/>} />
      <Route path="auth" element={<Auth />} action={formAction} />
    </Route>
  )
);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
}

export default App;
