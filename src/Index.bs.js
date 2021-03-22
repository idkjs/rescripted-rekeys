

import * as App from "./App.bs.js";
import * as React from "react";
import * as ReactDOMRe from "reason-react/src/legacy/ReactDOMRe.js";

require("./Index.css");

function init(param) {
  document.addEventListener("keydown", (function (evt) {
          return ReactDOMRe.renderToElementWithId(React.createElement(App.make, {
                          evt: evt
                        }), "root");
        }));
  
}

init(undefined);

ReactDOMRe.renderToElementWithId(React.createElement(App.make, {}), "root");

export {
  init ,
  
}
/*  Not a pure module */
