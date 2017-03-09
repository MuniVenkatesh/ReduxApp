import React from "react";
import {render} from "react-dom";

import {createStore} from "redux";
import {Provider} from "react-redux";
import combineData from "./reducers/combine.js";
import App from "./components/all.js";

const store=createStore(combineData);

render(<Provider store={store}>
<App />
</Provider>,document.getElementById('root')
)
