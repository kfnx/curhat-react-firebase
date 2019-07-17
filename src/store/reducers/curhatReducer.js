const initState = {
  curhats: [
    {
      id: "1",
      title: "aku butuh cintah",
      content: "blah blah blah blah blah blah blah"
    },
    {
      id: "2",
      title: "kebanyakan duit nih",
      content: "blah blah blah blah blah blah blah"
    },
    {
      id: "3",
      title: "duch pengen nikah",
      content: "blah blah blah blah blah blah blah"
    }
  ]
};

const curhatReducer = (state = initState, action) => {
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
