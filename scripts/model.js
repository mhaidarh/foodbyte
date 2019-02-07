const Model = {
  // ---------------------------------------------------------------------------
  menuList: {
    nextId: 4,
    data: [
      {
        id: 1,
        name: 'Nasi Goreng',
        imageURL: 'assets/nasi-goreng.jpg'
      },
      {
        id: 2,
        name: 'Soto Ayam',
        imageURL: 'assets/soto-ayam.jpg'
      },
      {
        id: 3,
        name: 'Martabak',
        imageURL: 'assets/martabak.jpg'
      }
    ]
  },

  // ---------------------------------------------------------------------------
  collectionMenuList: {
    id: 1,
    name: 'Week 1 Favorites',
    nextId: 1,
    data: []
  },

  collectionList: {
    data: [
      {
        id: 1,
        name: 'Week 1 Favorites',
        nextId: 3,
        data: [
          {
            id: 1,
            name: 'Nasi Goreng',
            imageURL: 'assets/nasi-goreng.jpg'
          },
          {
            id: 2,
            name: 'Soto Ayam',
            imageURL: 'assets/soto-ayam.jpg'
          }
        ]
      },
      {
        id: 2,
        name: 'Week 2 Meals',
        nextId: 2,
        data: [
          {
            id: 1,
            name: 'Nasi Goreng',
            imageURL: 'assets/nasi-goreng.jpg'
          }
        ]
      }
    ]
  }
}
