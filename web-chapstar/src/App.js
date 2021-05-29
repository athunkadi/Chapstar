import React from 'react';
import { Navbar } from './component';
import {
  ListAppInfo,
  AddListAppInfo,
  EditListAppInfo,
  Check
} from './page';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Navbar /> 
          <Switch>
              <Route exact path="/">
                <ListAppInfo />
              </Route>

              <Route path="/addPage">
                <AddListAppInfo />
              </Route>

              <Route path="/editPage/:id">
                <EditListAppInfo />
              </Route>

              <Route path="/viewDoc">
                <Check />
              </Route>

          </Switch>
      </Router>
      
    </div>
  );
}

export default App;
