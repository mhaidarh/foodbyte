const Storage = {
  // ---------------------------------------------------------------------------
  set: (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value))
  },

  // ---------------------------------------------------------------------------
  get: key => {
    return JSON.parse(window.localStorage.getItem(key))
  }
}
