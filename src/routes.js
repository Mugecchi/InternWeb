import Home from "./components/Home";
import CompanyProfile from "./components/CompanyProfile";
import Faqs from "./components/Faqs";
import ContactUs from "./components/ContactUs";
<<<<<<< HEAD
=======
// import Contributions from ./components/Contributions";
>>>>>>> dc8e181550031d2eb38ae424229e565e6e4ba12e
import Team from "./components/Teams/Testimonials/Team";
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
        path: "about",
        element: CompanyProfile,
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
        path: "Team",
        element: Team,
      },
    ],
  },
];

export default routes;
