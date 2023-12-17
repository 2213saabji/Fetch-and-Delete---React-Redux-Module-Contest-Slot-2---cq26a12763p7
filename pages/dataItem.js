import React, { useContext } from "react";
import { AuthContext } from "./_app";

function DataItem({ id, busName, ticketPrice, source, destination, onDelete }) {
  const { isDeleting } = useContext(AuthContext);

  const handleDelete = () => {
    // Check if deletion is allowed
    if (!isDeleting) {
      onDelete();
    }
  };

  return (
    <div className="data">
      <div>{id}</div>
      <div>Bus Name: {busName}</div>
      <div>Ticket Price: {ticketPrice}</div>
      <div>From: {source}</div>
      <div>To: {destination}</div>
      <button onClick={handleDelete} disabled={isDeleting}>
        Delete
      </button>
    </div>
  );
}

export default DataItem;
