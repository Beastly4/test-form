import React from "react";
import Form from "./components/Form";

import UsersList from "./components/UsersList";

function App() {
  return (
    <div className="container pt-4">
      <div className="row">
        <div className="col">
          <Form />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <UsersList />
        </div>
      </div>
    </div>
  );
}

export default App;
