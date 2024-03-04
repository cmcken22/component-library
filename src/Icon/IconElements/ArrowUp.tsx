import React from "react";

export default ({ stroke, fill }: { stroke: string, fill: string }) => (
<svg width="24" height="24" viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path d="M12.25 18.5V6M12.25 6L18.25 12M12.25 6L6.25 12" stroke={stroke} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
);