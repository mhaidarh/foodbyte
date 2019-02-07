const Data = {
  // ---------------------------------------------------------------------------
  set: (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value))
  },

  // ---------------------------------------------------------------------------
  get: key => {
    const value = JSON.parse(window.localStorage.getItem(key))
    if (value) {
      return value
    }
  }
}
