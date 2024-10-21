import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/home/home'
import AboutUS from './pages/aboutUS/aboutUs'
import MissionVision from './pages/missionVision/missionVision'
import OurServices from './pages/ourServices/ourServices'
import ContactUS from './pages/contactUS/contactUS'
import JoinOurTeam from './pages/joinOurTeam/joinOurTeam'
import AdmPainel from './pages/admPainel/admPainel'
import ReturnTeam from './pages/returnTeam/returnTeam'
import PrivacyPolicy from './pages/privacyPolicy/privacyPolicy'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.scss'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/aboutUS",
    element: <AboutUS />,
  },
  {
    path: "/missionVision",
    element: <MissionVision />,
  },
  {
    path: "/ourServices",
    element: <OurServices />,
  },
  {
    path: "/contactUS",
    element: <ContactUS />,
  },
  {
    path: "/joinOurTeam",
    element: <JoinOurTeam />,
  },
  {
    path: "/rt",
    element: <ReturnTeam />,
  },
  {
    path: "/privacyPolicy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/1234",
    element: <AdmPainel />,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
