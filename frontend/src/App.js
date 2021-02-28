import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import * as sessionActions from './store/session';
import {restoreUser} from './store/session';
import Login from './components/loginComponents/Login';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch])

  return (
    <Switch>
      <Route path='/login' component={Login} />
    </Switch>
  );
}

export default App;
