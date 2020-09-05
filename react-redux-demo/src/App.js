import React from 'react';
import { Provider } from 'react-redux'

import store from './redux/store'
import CakeContainer from './Components/CakeContainer'
import HooksCakeContainer from './Components/HooksCakeContainer'


function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <p>Cake Container</p>
        <CakeContainer />

        <p>Hooks Cake Container</p>
        <HooksCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
