import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCard } from "../../Feature/Slice/userSlice"; // ✅ correct name

const AddCard = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault(); // ✅ correct syntax
    if (text.trim()) {
      dispatch(addCard(text)); // ✅ correct action name
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Enter card text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          marginRight: "8px",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "8px 12px",
          backgroundColor: "#ff6600",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Add Card
      </button>
    </form>
  );
};

export default AddCard;
