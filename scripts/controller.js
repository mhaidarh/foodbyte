const Controller = {
  // ---------------------------------------------------------------------------
  initSelectedCollection: () => {
    Model.selectedCollection.id = Model.collectionList.nextId
  },

  // ---------------------------------------------------------------------------
  addMenuItemToSelectedCollection: id => {
    const selectedMenuItem = Model.menuList.data.find(menuItem => {
      return menuItem.id === id
    })
    Model.selectedCollection.data = Model.selectedCollection.data.concat(
      selectedMenuItem
    )
    Model.selectedCollection.nextId += 1
    View.displaySelectedCollection()
  },

  // ---------------------------------------------------------------------------
  deleteMenuItem: id => {
    const newData = Model.menuList.data.filter(menuItem => {
      return menuItem.id !== id
    })
    Model.menuList.data = newData
    View.displayMenu()
  },

  // ---------------------------------------------------------------------------
  saveCollection: () => {
    const selectedCollection = Model.selectedCollection
  }
}

Controller.initSelectedCollection()
