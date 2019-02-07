const View = {
  // ---------------------------------------------------------------------------
  displayAll: () => {
    View.displayMenu()
    View.displayCollectionMenu()
    View.displayCollectionList()
  },

  // ---------------------------------------------------------------------------
  displayMenu: () => {
    const $menuList = document.getElementById('menu-list')
    $menuList.innerHTML = ''

    Storage.menuList.data.forEach((menuItem, index) => {
      const div = document.createElement('div')
      div.setAttribute('class', `menu-item animated faster fadeInUp`)
      div.innerHTML = `
        <button class="button button-green button-add-menu-to-collection"
        onclick="View.addMenuItemToSelectedCollection(${menuItem.id})">
          +
        </button>
        <img
          class="menu-image"
          src="${menuItem.imageURL}"
          alt="${menuItem.name}"
        />
        <span>${menuItem.name}</span>
        <button
          class="button button-red button-delete-menu-item"
          onclick="deleteMenuItem(${menuItem.id})">
          DELETE
        </button>
      `
      $menuList.append(div)
    })
  },

  // ---------------------------------------------------------------------------
  displayCollectionMenu: () => {
    const $collectionMenuList = document.getElementById('collection-menu-list')
    $collectionMenuList.innerHTML = ''

    Storage.collectionMenuList.data.forEach(menuItem => {
      const div = document.createElement('div')
      div.setAttribute('class', `menu-item animated faster fadeInUp`)
      div.innerHTML = `
        <img
          class="menu-image"
          src="${menuItem.imageURL}"
          alt="${menuItem.name}"
        />
        <span>${menuItem.name}</span>
      `
      $collectionMenuList.append(div)
    })
  },

  // ---------------------------------------------------------------------------
  displayCollectionList: () => {
    const $collectionList = document.getElementById('collection-list')
    $collectionList.innerHTML = ''

    Storage.collectionList.data.forEach(collectionItem => {
      // EACH COLLECTION LIST
      const div = document.createElement('div')
      div.setAttribute('class', `collection-item animated faster fadeInUp`)
      div.innerHTML = `
        <h3>${collectionItem.name}</h3>
      `

      // EACH MENU ITEM INSIDE A COLLECTION
      const ul = document.createElement('ul')
      collectionItem.data.forEach(menuItem => {
        ul.innerHTML += `
          <li>${menuItem.name}</li>
        `
      })

      div.append(ul)
      $collectionList.append(div)
    })
  }
}

// -----------------------------------------------------------------------------
View.displayAll()
