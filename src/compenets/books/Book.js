import React from "react";
import { useParams, useOutletContext } from "react-router-dom";

function Book() {
  const { id } = useParams();
  const { address } = useOutletContext();
  return (
    <h1>
      Book:{id} FROM:{address}
    </h1>
  );
}

export default Book;
