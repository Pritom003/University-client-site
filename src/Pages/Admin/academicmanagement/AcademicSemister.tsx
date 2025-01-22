import { useGetAllSemesterQuery } from "../../../redux/features/AcademicSemister/AcademicSemisterApi";


const AcademicSemister = () => {
    const {data}=useGetAllSemesterQuery(undefined)
    console.log(    {data});
    return (
        <div>
        
            hello from AcademicSemister
        </div>
    );
};

export default AcademicSemister;