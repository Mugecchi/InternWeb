import Home from "./components/Home";
import CompanyProfile from "./components/CompanyProfile";
import Faqs from "./components/Faqs";
// import Purpose from "./components/Purpose";
import Teams from "./components/Teams/Testimonials/Randy";
// import Testimonials from "./components/Testimonials";
// import Message from "./components/Message";
// import Gallery from "./components/Gallery";
import ContactUs from "./components/ContactUs";
// import Contributions from ./components/Contributions";
import Team from "./components/Teams/Testimonials/Team"

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
      // {
      //   path: "purpose",
      //   element: Purpose,
      // },
      {
        path: "teams",
        element: Teams,
      },
      // {
      //   path: "testimonials",
      //   element: Testimonials,
      // },
      // {
      //   path: "contributions",
      //   element: Contributions,
      // },
      // {
      //   path: "message",
      //   element: Message,
      // },
      // {
      //   path: "gallery",
      //   element: Gallery,
      // },
      // {
      //   path: "purpose",
      //   element: Purpose,
      // },
      {
        path: "contact-us",
        element: ContactUs,
      },
      {
        path: "Team",
        element: Team,
      }
   
    ],
  },
];

export default routes;
