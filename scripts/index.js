console.log(`--- Foodbyte ---`)

// Save all initial data into Data (localStorage)
if (!Data.get('initial')) {
  Model.initial = false
  Data.set('initial', Model.initial)
  Data.set('menuList', Model.menuList)
  Data.set('selectedCollection', Model.selectedCollection)
  Data.set('collectionList', Model.collectionList)
}
