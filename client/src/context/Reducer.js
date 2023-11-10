const Reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        useFetching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        useFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        useFetching: false,
        error: true,
      };

    // Profile Update
    case "UPDATE_START":
      return {
        ...state,
        isFetching:true,
      };
    case "UPDATE_SUCCESS":
      return {
        user: action.payload,
        useFetching: false,
        error: false,
      };
    case "UPDATE_FAILURE":
      return {
        user: state.user,
        useFetching: false,
        error: true,
      };
    case "LOGOUT":
      return {
        user: null,
        useFetching: false,
        error: false,
      };
    default:
      return state;
  }
};

export default Reducer;
