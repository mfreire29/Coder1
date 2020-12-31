import { red } from "@material-ui/core/colors";
import React from "react";

function ItemListContainer({ greeting }) {
  const style = {
    margin: "0.5em",
    paddingLeft: 0,
    listStyle: "none",
    color: "#a9a9a9",
  };

  return (
    <div>
      <p className="titulo-pagina" style={style}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-caret-right-fill"
          viewBox="0 0 16 16"
        >
          <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
        </svg>
        {greeting}
      </p>
    </div>
  );
}

export default ItemListContainer;
