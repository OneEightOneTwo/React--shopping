
export default {

    namespace: 'shouye',
  
    state: {
        defaultHeight:false,
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    effects: {
      *fetch({ payload }, { call, put }) {  // eslint-disable-line
        yield put({ type: 'save' });
      },
    },
  
    reducers: {
      changeStatus(state, action) {
        //   console.log(state.defaultHeight,action.payload.defaultHeight)
        state.defaultHeight=action.payload.defaultHeight;
        // console.log(state.defaultHeight)
        // return { ...state };
        return state;
      },
      changeStatusFalse(state,action){
        state.defaultHeight=action.payload.defaultHeight;
        // console.log(state.defaultHeight)
        return state;
      }
    },
  
  };
  