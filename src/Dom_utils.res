module Event = {
  type mouseDownEventType
  @get external code: mouseDownEventType => string = "code"
  @get external keyCode: mouseDownEventType => int = "keyCode"
}

module Document = {
  /* hardcoded since we're only using this one */
  @val @scope("document")
  external addEventListener: (string, Event.mouseDownEventType => unit) => unit = "addEventListener"
}
