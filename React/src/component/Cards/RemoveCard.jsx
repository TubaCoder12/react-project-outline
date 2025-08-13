import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCard } from "../../Feature/Slice/userSlice";

const RemoveCard = () => {
  const cards = useSelector((state) => state.cards); // ✅ correct path
  const dispatch = useDispatch(); // ✅ correct call

  return (
    <ul>
      {cards.map((card) => (
        <li key={card.id} style={{ marginBottom: "8px" }}>
          {card.text}
          <button
            style={{
              marginLeft: "10px",
              backgroundColor: "red",
              color: "white",
              border: "none",
              padding: "4px 8px",
              cursor: "pointer",
            }}
            onClick={() => dispatch(removeCard(card.id))}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default RemoveCard;
