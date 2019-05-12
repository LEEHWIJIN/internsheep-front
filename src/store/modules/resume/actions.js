import * as mutation from './mutations';

export const resetState = ({commit})=>{
    commit(mutation.reset_state);
};

export const submit = ({commit},data)=>{
    commit(mutation.RESET_STATE);
};

export default {
    resetState,
  };
