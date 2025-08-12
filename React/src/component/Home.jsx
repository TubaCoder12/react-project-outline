import React, { useEffect } from "react";

const Home = ({ count, setCount }) => {
  useEffect(() => {
    console.log("Count change hua:", count);
    document.title = `Count: ${count}`; // Browser tab ka title change karega
  }, [count]); // Jab count change hoga tab chalega

  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
};

export default Home;
