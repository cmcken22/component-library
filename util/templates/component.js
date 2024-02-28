module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
import React from "react";

interface ${componentName}Props {
  foo: string;
}

const ${componentName} = ({ foo }: ${componentName}Props) => {
  return ();
};

export default ${componentName};
`,
  extension: `.tsx`
});
