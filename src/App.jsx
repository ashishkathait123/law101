import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Admin, BenefitsCard, Feedbacks, Footer, HomeHero, LawFirms, LawyerPortfolio, Lawyers, Navbar, Testimonails } from './components'

import "./App.css";
import Root from "./Root";
import { GetUpdates } from "./components/elements";
import Docter from "./components/Lawyer/docter";
import ProfilePage from "./components/Lawyer/ProfilePage";
import DocumentaryLawyer from "./components/Lawyer/DocumentaryLawyer";
import AboutUs from "./components/elements/AboutUs";
import AllotLawyerCard from "./components/Lawyer/AllotedLawyer";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Homepage />} />
        <Route path="/lawyer" element={<Lawyers />} />
        <Route path="/lawyer/:personid" element={<LawyerPortfolio />} />
        <Route path="/admin" element={<Admin />} />
        {/* <Route index element={<Homepage />} />
        <Route path="/products" element={<ProductCatalogue />} />
        <Route path="/login" element={<Login />} >
          <Route index element={<LoginPage />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
        </Route> */}
        <Route path="/chat" element={<Docter />} />
         <Route path="/profile" element={<ProfilePage />} />
         <Route path="/document" element={<DocumentaryLawyer />} />
         <Route path="/about" element={<AboutUs />} />
         <Route path="/hire-lawyer" element={<AllotLawyerCard />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
const Homepage = () => {
  return (<>
    <HomeHero />
    {/* <BenefitsCard /> */}
    <Docter/>
    {/* <LawFirms /> */}
    {/* <Testimonails /> */}
   
    <Feedbacks />
     <GetUpdates />
  </>
  )
}

export default App;
