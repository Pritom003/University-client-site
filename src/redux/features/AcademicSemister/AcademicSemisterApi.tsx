import { baseApi } from "../../api/BaseApi";
 const academicSemisterApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllSemester:builder.query({
            query:()=>({
                url:'/academic-semesters',
                method:'GET',
              })
            })
    })
})
// export const {useGetAllSemisterQuery}=academicSemisterApi;
export const { useGetAllSemesterQuery } = academicSemisterApi;
