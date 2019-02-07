const Controller = {
  // ---------------------------------------------------------------------------
  addMenuItemToSelectedCollection: id => {
    const selectedMenuItem = Model.menuList.data.find(menuItem => {
      return menuItem.id === id
    })
    Model.collectionMenuList.data = Model.collectionMenuList.data.concat(
      selectedMenuItem
    )
    View.displayCollectionMenu()
  },

  // ---------------------------------------------------------------------------
  saveCollection: () => {
    const collectionMenuList = Model.collectionMenuList
  }
}
