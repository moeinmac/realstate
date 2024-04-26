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
import Home, { loadAllEstates } from "./pages/Home";
import User from "./pages/User";

import AddEstate from "./pages/Estate/AddEstate";
import EstateLayout from "./pages/Estate/EstateLayout";
import Estate from "./pages/Estate/Estate";
import EstateItem, { fetchEstate } from "./pages/Estate/EstateItem";
import EditEstate from "./pages/Estate/EditEstate";

import { editEstateAction, newEstateAction } from "./components/Estate/AddEstateForm";
import { updateFormAction } from "./components/User/UserForm";
import { formAction } from "./components/Auth/AuthForm";

import PRoute from "./pages/PRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} loader={loadAllEstates} />
      <Route
        path="auth"
        element={
          <PRoute reverse>
            <Auth />
          </PRoute>
        }
        action={formAction}
      />
      <Route
        path="user"
        element={
          <PRoute>
            <User />
          </PRoute>
        }
        action={updateFormAction}
      />
      <Route path="estate" element={<EstateLayout />}>
        <Route index element={<Estate />} />
        <Route
          path="add"
          element={
            <PRoute>
              <AddEstate />
            </PRoute>
          }
          action={newEstateAction}
        />
        <Route
          path=":id"
          element={<EstateItem />}
          loader={async ({ params }) => {
            return await fetchEstate(params.id);
          }}
        />
        <Route
          path=":id/edit"
          element={
            <PRoute>
              <EditEstate />
            </PRoute>
          }
          action={editEstateAction}
          loader={async ({ params }) => {
            return await fetchEstate(params.id);
          }}
        />
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
