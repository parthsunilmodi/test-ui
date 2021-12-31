import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

const NoMatchPage = React.lazy(() => import('pages/NoMatchPage'));
const TestPage = React.lazy(() => import('pages/Test'));
const TestPage2 = React.lazy(() => import('pages/Test2'));


const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading</div>}>
        <Switch>
          <Route path="/" exact component={TestPage} />
          <Route path="/two" exact component={TestPage2} />
          <Route path="*" exact component={NoMatchPage}  />
        </Switch>
      </Suspense>
    </Router>
  )
};

export default App
