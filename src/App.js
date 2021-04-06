import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Page1 from "./components/page_1";
import Page2 from "./components/page_2";
import Page3 from "./components/page_3";
import Page4 from "./components/page_4";
import PageNavigation from "./components/navigationbar";
import HomePage from "./components/allnumbers";
import { pageData } from "./components/pagedata";
import Even from "./components/odd";
import Odd from "./components/even";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import SiteButtons from "./components/sitebuttons";


function App() {
  return (
    <main>
      <PageNavigation />
      <SiteButtons />
      <Switch>
        <Route
        path="/page_1"
        render={(props) => <Page1 numbersData={pageData} {...props} />}
        />
        <Route
        path="/page_2"
        render={(props) => <Page2 numbersData={pageData} {...props} />}
        />
        <Route
        path="/page_3"
        render={(props) => <Page3 numbersData={pageData} {...props} />}
        />
        <Route
        path="/page_4"
        render={(props) => <Page4 numbersData={pageData} {...props} />}
        />
        <Route
        path="/All_Numbers"
        render={(props) => <HomePage numbersData={pageData} {...props} />}
        />
        <Route
        path="/Odd_Numbers"
        render={(props) => <Odd numbersData={pageData} {...props} />}
        />
        <Route
        path="/Even_Numbers"
        render={(props) => <Even numbersData={pageData} {...props} />}
        />
      </Switch>
      </main>
      
     
    
  );
} 

export default App;
