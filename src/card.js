import React from "react";

export default function Card({ title, body, id }) {
  return (
    <div>
      <h1>{title}</h1>
      <h1>{body}</h1>
    </div>
  );
}
