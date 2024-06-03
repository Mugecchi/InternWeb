import Home from "./components/Web";
import Faqs from "./components/Faqs/Faqs";
import InternData from "./components/Teams/Testimonials/InternData";
import Accordion from "./components/InternTeam/Accordion";
import YoutubePlayer from "./components/VideoStream/youtube";
import Purpose from "./components/Purpose";
import Message from "./components/Messagees";

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
        path: "accordion",
        element: Accordion,
      },
      {
        path: "youtube",
        element: YoutubePlayer,
      },
      {
        path: "Purpose",
        element: Purpose,
      },
      {
        path: "Message",
        element: Message,
      },
    ],
  },
];

export default routes;
