const Controller = {
  // ---------------------------------------------------------------------------
  openAddNewMenu: () => {
    const newMenuName = prompt('Food name?')
    const newMenuImageURL = prompt('Food image URL?')

    if (newMenuName && newMenuImageURL) {
      const newMenuItem = {
        name: newMenuName,
        imageURL: newMenuImageURL
      }
      Storage.menuList.data = Storage.menuList.data.concat(newMenuItem)
      View.displayMenu()
    }
  },

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
