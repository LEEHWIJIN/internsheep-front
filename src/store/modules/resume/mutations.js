import defaultState from './state';

export default {
    reset_state(state){
        Object.assign(state, defaultState());
    },
    submit(state, result){
        state.receive_codeArray = result;
    },
    setResumeState(state,result){
        state.resume_state = result;
    }
    
  };