import { createContext } from "react";

// the parameter is a default value we aren't going to call
// but it's useful to signify the type for Typescript
// the second element in the array is the setState method of the state hook.
const ThemeContext = createContext(["green", () => {}]);

export default ThemeContext;
