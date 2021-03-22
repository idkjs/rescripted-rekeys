

import * as Logo from "./Logo.bs.js";
import * as $$Array from "bs-platform/lib/es6/array.js";
import * as React from "react";
import * as $$String from "bs-platform/lib/es6/string.js";
import * as Belt_List from "bs-platform/lib/es6/belt_List.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";

require("./App.css");

function keyInfoOfEvent(e) {
  var arr = e.code.split(/(?=[A-Z0-9])/);
  var len = arr.length;
  var code;
  if (len >= 3) {
    code = "Unknown";
  } else {
    switch (len) {
      case 0 :
          code = "Unknown";
          break;
      case 1 :
          var x = arr[0];
          code = x !== undefined ? x : "Unknown";
          break;
      case 2 :
          var x$1 = arr[0];
          var exit = 0;
          if (x$1 !== undefined) {
            var exit$1 = 0;
            switch (x$1) {
              case "F" :
                  var y = arr[1];
                  if (y !== undefined) {
                    code = x$1 + y;
                  } else {
                    exit = 1;
                  }
                  break;
              case "Digit" :
              case "Key" :
                  exit$1 = 2;
                  break;
              default:
                exit = 1;
            }
            if (exit$1 === 2) {
              var x$2 = arr[1];
              if (x$2 !== undefined) {
                code = x$2;
              } else {
                exit = 1;
              }
            }
            
          } else {
            exit = 1;
          }
          if (exit === 1) {
            code = $$String.concat(" ", Belt_List.keepMap($$Array.to_list(arr), (function (x) {
                        return x;
                      })));
          }
          break;
      
    }
  }
  return {
          code: e.keyCode,
          name: code
        };
}

function App$KeyInfo(Props) {
  var evt = Props.evt;
  var tmp;
  if (evt !== undefined) {
    var match = keyInfoOfEvent(Caml_option.valFromOption(evt));
    tmp = [
      React.createElement("div", {
            key: "1",
            className: "key-code"
          }, String(match.code)),
      React.createElement("div", {
            key: "2",
            className: "key"
          }, React.createElement("div", {
                className: "keycap"
              }, match.name))
    ];
  } else {
    tmp = React.createElement("div", {
          className: "hint"
        }, "C'mon, press a key!");
  }
  return React.createElement("div", {
              className: "key-info"
            }, tmp);
}

var KeyInfo = {
  keyInfoOfEvent: keyInfoOfEvent,
  make: App$KeyInfo
};

function App(Props) {
  var evt = Props.evt;
  var tmp = {};
  if (evt !== undefined) {
    tmp.evt = Caml_option.valFromOption(evt);
  }
  return React.createElement("div", {
              className: "App"
            }, React.createElement("div", {
                  className: "App-header"
                }, React.createElement("h2", undefined, "ReKeys"), React.createElement("h3", undefined, "Find out JavaScript event keycodes by pressing keys")), React.createElement("div", {
                  className: "App-content"
                }, React.createElement(App$KeyInfo, tmp)), React.createElement("div", {
                  className: "App-footer"
                }, React.createElement("p", undefined, "Made with ", React.createElement("a", {
                          className: "reimg",
                          href: "https://reasonml.github.io/"
                        }, React.createElement("img", {
                              src: Logo.logo
                            })), " by ", React.createElement("a", {
                          href: "https://twitter.com/_anmonteiro"
                        }, "@_anmonteiro"))));
}

var make = App;

export {
  KeyInfo ,
  make ,
  
}
/*  Not a pure module */
