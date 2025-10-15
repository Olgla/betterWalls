import React from "react";

export default function Container({ children }) {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1rem" }}>
      {children}
    </div>
  );
}
