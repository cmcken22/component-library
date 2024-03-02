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
      d="M17.1213 21.364L19.2426 19.2427M21.364 17.1214L19.2426 19.2427M19.2426 19.2427L17.1213 17.1214M19.2426 19.2427L21.364 21.364"
      stroke={stroke}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4 6V12C4 12 4 15 11 15C18 15 18 12 18 12V6"
      stroke={stroke}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11 3C18 3 18 6 18 6C18 6 18 9 11 9C4 9 4 6 4 6C4 6 4 3 11 3Z"
      stroke={stroke}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11 21C4 21 4 18 4 18V12"
      stroke={stroke}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
