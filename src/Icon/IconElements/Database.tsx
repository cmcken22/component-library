import React from "react";

export default ({ stroke, fill }: { stroke: string; fill: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 12V18C5 18 5 21 12 21C19 21 19 18 19 18V12"
      stroke={stroke}
      stroke-width="1.5"
    />
    <path
      d="M5 6V12C5 12 5 15 12 15C19 15 19 12 19 12V6"
      stroke={stroke}
      stroke-width="1.5"
    />
    <path
      d="M12 3C19 3 19 6 19 6C19 6 19 9 12 9C5 9 5 6 5 6C5 6 5 3 12 3Z"
      stroke={stroke}
      stroke-width="1.5"
    />
  </svg>
);
