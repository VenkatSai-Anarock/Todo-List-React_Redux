
const byId = (state = {}, action) => {
    switch (action.type) {
       case "RECEIVE_TODOS":
          return action.response.reduce((h, o) => ({ ...h, ...{ [o.id]: o } }), { ...state });
       default:
          return state;
    }
 };

export default byId;

export const getTodo = (state,id) =>state[id]