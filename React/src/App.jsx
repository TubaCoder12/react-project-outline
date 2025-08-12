import React, { useState } from "react";
import Home from "./component/Home";
import Practice from "./component/Practice";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <div className="bg-red-600">{count}</div>
      <Home count={count} setCount={setCount} />
      <Practice />
    </React.Fragment>
  );
};

export default App;
