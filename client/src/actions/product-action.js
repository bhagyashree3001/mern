export const productAction = (type,name) => dispatch => {
  dispatch({
    type: type,
    payload: { name :name}
  });
};
