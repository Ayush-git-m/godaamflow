import { createBrowserRouter } from "react-router";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import AddEditProduct from "./pages/AddEditProduct";
import Inventory from "./pages/Inventory";
import LowStockAlerts from "./pages/LowStockAlerts";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

export const router = createBrowserRouter([
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: "products", Component: Products },
      { path: "products/add", Component: AddEditProduct },
      { path: "products/edit/:id", Component: AddEditProduct },
      { path: "inventory", Component: Inventory },
      { path: "alerts", Component: LowStockAlerts },
      { path: "reports", Component: Reports },
      { path: "settings", Component: Settings },
    ],
  },
]);