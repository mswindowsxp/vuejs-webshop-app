export const LocalStorageService = {
  checkValue (key) {
    if (localStorage.getItem(key)) {
      try {
        const now = new Date()
        const item = JSON.parse(localStorage.getItem(key))
        if (Math.ceil(now.getTime() / 1000) > item.expiry) {
          localStorage.removeItem(key)
        }
        return JSON.parse(localStorage.getItem(key))
      } catch (e) {
        localStorage.removeItem(key)
        throw e
      }
    } else {
      return null
    }
  },
  setLocalStorage (key, value) {
    this.checkValue(key)
    const now = new Date()
    const item = {
      value: value,
      expiry: Math.ceil(now.getTime() / 1000) + 900 // expires 15 minute
    }
    localStorage.setItem(key, JSON.stringify(item))
  }
}
