import React from "react";

export default ({ stroke, fill }: { stroke: string, fill: string }) => (
<svg width="24" height="24" viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M13 6L19 12L13 18" stroke={stroke} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 6L11 12L5 18" stroke={stroke} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
);
