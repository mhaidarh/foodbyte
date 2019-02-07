const Controller = {
  // ---------------------------------------------------------------------------
  addMenuItemToSelectedCollection: id => {
    const selectedMenuItem = Storage.menuList.data.find(menuItem => {
      return menuItem.id === id
    })
    Storage.collectionMenuList.data = Storage.collectionMenuList.data.concat(
      selectedMenuItem
    )
    View.displayCollectionMenu()
  }
}
