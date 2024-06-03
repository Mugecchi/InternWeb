import Home from "./components/Web";
import Faqs from "./components/Faqs/Faqs";

const routes = [
  {
    path: "/",

    children: [
      {
        path: "/",
        element: Home,
      },
      {
        path: "faqs",
        element: Faqs,
      },
    ],
  },
];

export default routes;
