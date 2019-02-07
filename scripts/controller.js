const Controller = {
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
    View.displayCollectionMenu()
  },

  // ---------------------------------------------------------------------------
  saveCollection: () => {
    const selectedCollection = Model.selectedCollection
  }
}

Controller.initSelectedCollection()
