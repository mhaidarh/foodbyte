const Model = {
  initial: true,

  // ---------------------------------------------------------------------------
  menuList: Data.get('menuList') || {
    nextId: 4,
    data: [
      {
        id: 1,
        name: 'Nasi Goreng',
        imageURL: 'assets/photos/nasi-goreng.jpg'
      },
      {
        id: 2,
        name: 'Soto Ayam',
        imageURL: 'assets/photos/soto-ayam.jpg'
      },
      {
        id: 3,
        name: 'Martabak',
        imageURL: 'assets/photos/martabak.jpg'
      }
    ]
  },

  // ---------------------------------------------------------------------------
  selectedCollection: Data.get('selectedCollection') || {
    id: null,
    name: '',
    nextId: 1,
    data: []
  },

  // ---------------------------------------------------------------------------
  collectionList: Data.get('collectionList') || {
    nextId: 3,
    data: [
      {
        id: 1,
        name: 'Favorite Meals',
        nextId: 3,
        data: [
          {
            id: 1,
            name: 'Nasi Goreng',
            imageURL: 'assets/photos/nasi-goreng.jpg'
          },
          {
            id: 2,
            name: 'Soto Ayam',
            imageURL: 'assets/photos/soto-ayam.jpg'
          }
        ]
      },
      {
        id: 2,
        name: 'Snacks',
        nextId: 2,
        data: [
          {
            id: 1,
            name: 'Martabak',
            imageURL: 'assets/photos/martabak.jpg'
          }
        ]
      }
    ]
  }
}
