

import * as App from "./App.bs.js";
import * as React from "react";
import * as ReactDOMRe from "reason-react/src/legacy/ReactDOMRe.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as ReactDomExperimental from "./bindings/ReactDomExperimental.bs.js";

require("./Index.css");

function init(param) {
  document.addEventListener("keydown", (function (evt) {
          return ReactDOMRe.renderToElementWithId(React.createElement(App.make, {
                          evt: evt
                        }), "root");
        }));
  
}

init(undefined);

var root = ReactDomExperimental.createRootWithId("root");

if (root !== undefined) {
  Caml_option.valFromOption(root).render(React.createElement(React.StrictMode, {
            children: React.createElement(App.make, {})
          }));
}

export {
  init ,
  
}
/*  Not a pure module */
