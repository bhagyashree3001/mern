export const UPDATE_USER = 'users:updateUser';
export const userAction = (type,name) => dispatch => {
    dispatch({
      type: type,
      payload: name 
    });
  };
