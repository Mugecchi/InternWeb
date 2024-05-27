import Home from "./components/Home";
import Faqs from "./components/Faqs";
import ContactUs from "./components/ContactUs";
import InternData from "./components/Teams/Testimonials/InternData";
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
      {
        path: "InternData",
        element: InternData,
      },
      {
        path: "contact-us",
        element: ContactUs,
      },
    ],
  },
];

export default routes;
