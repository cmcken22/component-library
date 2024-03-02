import React from "react";

export default ({ stroke, fill }: { stroke: string, fill: string }) => (
<svg width="24" height="24" viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M6 9L12 15L18 9" stroke={stroke} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
);
