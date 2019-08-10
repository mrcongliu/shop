const INITIAL_STATE = {
  sections: [
    {
      title: "shoes",
      imageUrl: "https://i.ibb.co/MNZ4qw7/shoes.png",
      id: 1,
      linkUrl: "shop/hats"
    },
    {
      title: "clothing",
      imageUrl: "https://i.ibb.co/mtr2xRw/0628-jordan-pwh-clothes.png",
      id: 2,
      linkUrl: "shop/jackets"
    },
    {
      title: "gear",
      imageUrl: "https://i.ibb.co/sjwbmwt/gear.png",
      id: 3,
      linkUrl: "shop/sneakers"
    },
    {
      title: "women",
      imageUrl: "https://i.ibb.co/pwcsf2z/women.png",
      size: "large",
      id: 4,
      linkUrl: "shop/womens"
    },
    {
      title: "kids",
      imageUrl: "https://i.ibb.co/JCpYGNH/kids.png",
      size: "large",
      id: 5,
      linkUrl: "shop/mens"
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
