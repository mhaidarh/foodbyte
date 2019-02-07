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

    Model.menuList.data.forEach((menuItem, index) => {
      const div = document.createElement('div')
      div.setAttribute('class', `menu-item animated faster fadeInUp`)
      div.innerHTML = `
        <button class="button button-green button-add-menu-to-collection"
        onclick="Controller.addMenuItemToSelectedCollection(${menuItem.id})">
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
    const $selectedCollection = document.getElementById('collection-menu-list')
    $selectedCollection.innerHTML = ''

    Model.selectedCollection.data.forEach(menuItem => {
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
      $selectedCollection.append(div)
    })
  },

  emptySelectedCollection: () => {
    document.getElementById('collection-menu-list').innerHTML = ''
    document.getElementById('input-collection-name').value = ''
  },

  // ---------------------------------------------------------------------------
  displayCollectionList: () => {
    const $collectionList = document.getElementById('collection-list')
    $collectionList.innerHTML = ''

    Model.collectionList.data.forEach(collectionItem => {
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
  },

  // ---------------------------------------------------------------------------
  openAddNewMenu: () => {
    const newMenuName = prompt('Food name?')
    const newMenuImageURL = prompt('Food image URL?')

    if (newMenuName && newMenuImageURL) {
      const newMenuItem = {
        name: newMenuName,
        imageURL: newMenuImageURL
      }
      Model.menuList.data = Model.menuList.data.concat(newMenuItem)
      View.displayMenu()
    }
  },

  // ---------------------------------------------------------------------------
  changeCollectionName: () => {
    // Get input-collection-name when onkeyup
    Model.selectedCollection.name = document.getElementById(
      'input-collection-name'
    ).value
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

// -----------------------------------------------------------------------------
View.displayAll()
