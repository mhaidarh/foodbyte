const Controller = {
  // ---------------------------------------------------------------------------
  addMenuItemToSelectedCollection: id => {
    const selectedMenuItem = Model.menuList.data.find(menuItem => {
      return menuItem.id === id
    })
    Model.selectedCollection.data = Model.selectedCollection.data.concat(
      selectedMenuItem
    )
    View.displayCollectionMenu()
  },

  // ---------------------------------------------------------------------------
  saveCollection: () => {
    const selectedCollection = Model.selectedCollection
  }
}
