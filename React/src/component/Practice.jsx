import React from "react";

export const Practice = () => {
  const students = ["tuba", "hammad", "jaweria", "jawad"];
  const items = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Orange" },
  ];

  return (
    <>
      {students.map((student, index) => (
        <li key={index}>{student}</li>
      ))}

      <h1>furit Name</h1>
      {items.map((item) => (
        <ul key={item.id}>{item.name}</ul>
      ))}
    </>
  );
};
