import { baseApi } from "../../api/BaseApi";

const authapi=baseApi.injectEndpoints({
    endpoints:(builder)=>({
        login:builder.mutation({
            query:(userinfo)=>({
                url:'auth/login',
                method:'POST',
                body:userinfo})
            })
    })
})
export const {useLoginMutation}=authapi;