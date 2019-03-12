const OfferType = {
  FRONTEND: {
    name: "fronted",
    barColor: "blue"
  },
  BACKEND: {
    name: "backend",
    barColor: "lime"
  },
  MOBILE: {
    name: "mobile",
    barColor: "hotpink"
  }
};

const OfferTypeList = [
  {
    value: "FRONTEND",
    label: "Frontend"
  },
  {
    value: "BACKEND",
    label: "Backend"
  },
  {
    value: "MOBILE",
    label: "Mobile"
  }
];

export { OfferType as default, OfferTypeList };
