const curhatReducer = (state = "", action) => {
  switch (action.type) {
    case "CREATE_CURHAT":
      console.log("CREATE_CURHAT", action.curhat);
      return state;
    case "CREATE_CURHAT_ERROR":
      console.log("CREATE_CURHAT_ERROR", action.curhat);
      return state;
    default:
      return state;
  }
};

export default curhatReducer;
