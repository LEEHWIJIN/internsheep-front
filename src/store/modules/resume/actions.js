import * as mutation from './mutations.js';
import axios from 'axios'

export default {
    resetState({commit}){
        commit(mutation.RESETSTATE);
    },

    submit_userInfo({commit},data){
        commit(mutation.SUBMIT_USERINFO,data);
    },

    submit_userEng({commit},data){
        commit(mutation.SUBMIT_USERENG,data);
    },

    submit_userGrade({commit},data){
        commit(mutation.SUBMIT_USERGRADE,data);
    },

    submit_SW({commit},data){
        commit(mutation.SUBMIT_USERSW,data);
    },

    submit_ALL({commit},data){
        axios.post('http://10.41.83.72:8888/std/mypage/resume',{req : data}).then((response) => {
                   
        })
    },

    submit_Modify({commit},data){
        axios.post('http://10.41.83.72:8888/std/mypage/modifyResume',{req : data}).then((response) => {
                   
        })
    },

    setResumeState({commit}, data){
        commit(mutation.SETRESUMESTATE, data);
    },

    setModifyResumeState({commit}, data){
        commit(mutation.SETMODIFYRESUMESTATE, data);
    },

    
};
