import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/components/Login";
import Index from "../pages/components/Index";
import RequestDemo from "../pages/request-demo";
import SalesOverview from "../pages/components/SalesOverview";
import GlobalSideNav from "../pages/components/GlobalSideNav";
import Integrations from "../pages/components/integrations";
import ClinchJsIndex from "../pages/components/clinchjs";
import PlaysList from "../pages/components/Plays/PlayList";
import PlaysIndexRoute from "../pages/components/Plays/PlaysConfig";
import CustomerDetailMain from "../pages/components/salesDealCoach";
import FeatureMain from "../pages/components/FeatureMainChurn";
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path='/request-demo' element={<RequestDemo />} />
        <Route path='/sales/overview' element={<GlobalSideNav><SalesOverview data={[]} /> </GlobalSideNav>} />
        <Route path='/integrations' element={<Integrations/> } />
        <Route path='/integrations/clinchjs' element={<GlobalSideNav><ClinchJsIndex/></GlobalSideNav> } />
        <Route path='/plays' element={<GlobalSideNav><PlaysList /> </GlobalSideNav>} />
        <Route path='/plays/config' element={<PlaysIndexRoute />} />
        <Route path='/sales/dealcoach' element={<GlobalSideNav><CustomerDetailMain /></GlobalSideNav>} />
        <Route path="/churn/feature" element={<GlobalSideNav><FeatureMain /></GlobalSideNav>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
