import { createStore } from "redux";

import { colorReducer }  from "../src/reducers/color";

export const store = createStore(colorReducer);
