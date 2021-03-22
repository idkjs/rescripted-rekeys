open Dom_utils

CSS_utils.requireCSS("./Index.css")

let init = _ =>
  Document.addEventListener("keydown", evt => ReactDOMRe.renderToElementWithId(<App evt />, "root"))

init()

open ReactDomExperimental
switch createRootWithId("root") {
| Some(root) => root->render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
| None => ()
}
