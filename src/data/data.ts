export const products = [
    {
      img: null,
      id: "DERFET4568",
      name: "Niviea Perfume",
      count: "1",
      unit: "kg",
      price: "5450",
      category: "perfume"
    },
    {
      img: "https://picsum.photos/200",
      id: "EEFET4568",
      name: "Milton Bottle",
      count: "1",
      unit: "Litre",
      price: "5450",
      category: "Water Bottle"
    },
    {
      img: "https://picsum.photos/200",
      id: "DERDEHJK5568",
      name: "Allen Solly",
      count: "1",
      unit: "Piece",
      price: "5450",
      category: "Shirts"
    },
    {
      img: null,
      id: "LOPJHKET4568",
      name: "Levis Jeans",
      count: "2",
      unit: "Piece",
      price: "5450",
      category: "Pants"
    },
    {
      img: null,
      id: "LRREFET4568",
      name: "Bolt",
      count: "1",
      unit: "Litre",
      price: "605",
      category: "Water Bottle"
    },
    {
      img: null,
      id: "LOPEFET4568",
      name: "Levis Jeans",
      count: "2",
      unit: "Piece",
      price: "1350",
      category: "Pants"
    },
    {
      img: null,
      id: "IOOEFET4568",
      name: "Plates",
      count: "10",
      unit: "Piece",
      price: "120",
      category: "House hold"
    },
    {
      img: null,
      id: "FEYOPT4568",
      name: "Pen",
      count: "5",
      unit: "Piece",
      price: "5",
      category: "House hold"
    },
    {
      img: null,
      id: "FEYJOLEP98",
      name: "mouse",
      count: "5",
      unit: "units",
      price: "400",
      category: "Computer Supplied"
    },
    {
      img: null,
      id: "FEYDFDLEP98",
      name: "keyboard",
      count: "5",
      unit: "units",
      price: "200",
      category: "Computer Supplied"
    },
    {
      img: null,
      id: "NMOTJOLEP98",
      name: "charger",
      count: "1",
      unit: "units",
      price: "200",
      category: "Electronics"
    },
    {
      img: null,
      id: "FEHJOLEP98",
      name: "charger",
      count: "2",
      unit: "units",
      price: "15000",
      category: "Kitchen Supplied"
    },
    {
      img: null,
      id: "FQWETLEP98",
      name: "Godrej Chairs",
      count: "1",
      unit: "units",
      price: "200",
      category: "Office"
    },
    {
      img: null,
      id: "FQWETL89658",
      name: "Garam Masala",
      count: "1",
      unit: "kg",
      price: "200",
      category: "Hotel Suplied"
    },
    {
      img: null,
      id: "FANBTY8978",
      name: "Godrej Chairs",
      count: "1",
      unit: "units",
      price: "200",
      category: "Office"
    },
    {
      img: null,
      id: "CVXDF68658",
      name: "Natraj Color pen",
      count: "1",
      unit: "kg",
      price: "200",
      category: "Drawing Supplied"
    },
  ]


  export const transactions = [
    {
      title: "April",
      data: [
        {
          name: "books",
          type: "purchase",
          price: "480",
          balance: "0"
        },
        {
          name: "pens",
          type: "sale",
          price: "40",
          balance: "20"
        }
      ]
    },
    {
      title: "May",
      data: [
        {
          name: "books",
          type: "purchase",
          price: "480",
          balance: "0"
        },
        {
          name: "pens",
          type: "sale",
          price: "40",
          balance: "20"
        }
      ]
    },
    {
      title: "Jun",
      data: [
        {
          name: "books",
          type: "purchase",
          price: "480",
          balance: "0"
        },
        {
          name: "pens",
          type: "sale",
          price: "40",
          balance: "20"
        }
      ]
    },
    {
      title: "July",
      data: [
        {
          name: "books",
          type: "purchase",
          price: "480",
          balance: "0"
        },
        {
          name: "pens",
          type: "sale",
          price: "40",
          balance: "20"
        }
      ]
    }
  ]

export const users = [
  {
    mail: "abc@gmail.com",
    password: "abcdefg",
    fullname: "Landon Mccallum",
    type: "owner",
    inventories: [
      {
        name: "shop1",
        items: products.slice(0,7),
        transactions: transactions.slice(0,2)
      },
      {
        name: "shop2",
        items: products.slice(0,10),
        transactions: transactions.slice(0,1)
      },
      {
        name: "shop3",
        items: products.slice(0,4),
        transactions: transactions.slice(0,3)
      }
    ]
  },
  {
    mail: "def@gmail.com",
    password: "defghij",
    fullname: "Avery Mcguffin",
    type: "staff",
    inventories: [
      {
        name: "shop1",
        items: products.slice(0,12),
        transactions: transactions.slice(0,1)
      },
      {
        name: "shop3",
        items: products,
        transactions: transactions.slice(0,3)
      },
    ]
  },
  {
    mail: "ghi@gmail.com",
    password: "ghijklm",
    fullname: "Jazmine Mcginn",
    type: "staff",
    inventories: [
      {
        name: "shop1",
        items: products.slice(2,10),
        transactions: transactions.slice(0,2)
      },
      {
        name: "shop2",
        items: products,
        transactions: transactions.slice(0,2)
      },
    ]
  },
  {
    mail: "newuser@gmail.com",
    password: "newpassword",
    fullname: "New User",
    type: "staff",
    inventories: []
  }
]