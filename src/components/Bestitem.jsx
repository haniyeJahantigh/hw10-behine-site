import React from "react";

const Bestitem = ({ icon, title }) => {
  return (
    <a className="bestItem">
      <div className="bestIcon">{icon}</div>
      <div className="bestTitle">{title}</div>
    </a>
  );
};
export default Bestitem;
