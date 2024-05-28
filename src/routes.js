import Home from "./components/Home";
import CompanyProfile from "./components/CompanyProfile";
import Faqs from "./components/Faqs";
import ContactUs from "./components/ContactUs";
import InternData from "./components/Teams/Testimonials/InternData";
import Accordion from "./components/InternTeam/Accordion";
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
      {
        path: "accordion",
        element: Accordion,
      },
    ],
  },
];

export default routes;
