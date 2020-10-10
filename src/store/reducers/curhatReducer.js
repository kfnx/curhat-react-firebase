const curhatReducer = (state = "", action) => {
  switch (action.type) {
    case "CREATE_CURHAT":
      return state;
    case "CREATE_CURHAT_ERROR":
      return state;
    default:
      return state;
  }
};

export default curhatReducer;
