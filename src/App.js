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
import User from "./pages/User";

import { updateFormAction } from "./components/User/UserForm";
import { formAction } from "./components/Auth/AuthForm";
import AddEstate from "./pages/Estate/AddEstate";
import EstateLayout from "./pages/Estate/EstateLayout";
import Estate from "./pages/Estate/Estate";
import { newEstateAction } from "./components/Estate/AddEstateForm";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="auth" element={<Auth />} action={formAction} />
      <Route path="user" element={<User />} action={updateFormAction} />
      <Route path="estate" element={<EstateLayout />}>
        <Route index element={<Estate />} />
        <Route path="add" element={<AddEstate />} action={newEstateAction}/>
      </Route>
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
