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
    Data.set('selectedCollection', Model.selectedCollection)
    View.displaySelectedCollection()
  },

  // ---------------------------------------------------------------------------
  deleteMenuItem: id => {
    const newData = Model.menuList.data.filter(menuItem => {
      return menuItem.id !== id
    })
    Model.menuList.data = newData
    Data.set('menuList', Model.menuList)
    View.displayMenu()
  },

  // ---------------------------------------------------------------------------
  deleteMenuItemInSelectedCollection: id => {
    const newData = Model.selectedCollection.data.filter(menuItem => {
      return menuItem.id !== id
    })
    Model.selectedCollection.data = newData
    Data.set('selectedCollection', Model.selectedCollection)
    View.displaySelectedCollection()
  },

  // ---------------------------------------------------------------------------
  changeCollectionName: () => {
    // Get input-collection-name when onkeyup
    Model.selectedCollection.name = document.getElementById(
      'input-collection-name'
    ).value
  },

  // ---------------------------------------------------------------------------
  saveCollection: () => {
    const selectedCollection = Model.selectedCollection
    Data.set('selectedCollection', Model.selectedCollection)
  },

  // ---------------------------------------------------------------------------
  submitSelectedCollection: () => {
    event.preventDefault()

    // Concat selectedCollection into collectionList.data
    Model.collectionList.data = Model.collectionList.data.concat(
      Model.selectedCollection
    )
    Model.collectionList.nextId += 1
    View.displayCollectionList()
    View.emptySelectedCollection()
  }
}

Controller.initSelectedCollection()
