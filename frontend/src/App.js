import React from 'react';

import { Routes, Route } from 'react-router-dom';


import MasterLayout from './layouts/admin/MasterLayout';

function App() {
  return (
    <div className="App">
      {
        
      <Routes>
        

        <Route exact path="/admin" name="Admin" render={(props) => <MasterLayout {...props}/>} />
    </Routes>
    }
    </div>
  );
}

export default App;
