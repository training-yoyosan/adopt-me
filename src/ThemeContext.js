import { createContext } from "react";

// the parameter is a default value we aren't going to call
// but it's useful to signify the type for Typescript
const ThemeContext = createContext(["green", () => {}]);

export default ThemeContext;
