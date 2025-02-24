/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, SubmitHandler } from "react-hook-form";
import UniForm from "../../../Components/form/UniForm";
import UniInput from "../../../Components/form/UniInput";
import { Button, Col, Divider, Row } from "antd";
import UniSelector from "../../../Components/form/UniSelectors";
import { bloodGroupOptions, genderOptions } from "../../../Constants/global";
import UniDatePicker from "../../../Components/form/UniDatePicker";
// import { useAddStudentsMutation } from "../../../redux/features/admin/UserManagement.api";
import { useGetAcademicDepartmentsQuery, useGetAllSemestersQuery } from "../../../redux/features/admin/AcademicSemister/AcademicSemisterApi";
import { useAddStudentMutation } from "../../../redux/features/admin/UserManagement.api";


const studentDefaultValuew={
    "name": {
            "firstName": "I am ",
            "middleName": "Student",
            "lastName": "Number 1"
        },
        "gender": "male",
        
        "email": "student2@gmail.com",
        "contactNo": "1235678",
        "emergencyContactNo": "987-654-3210",
        "bloogGroup": "A+",
        "presentAddress": "123 Main St, Cityville",
        "permanentAddress": "456 Oak St, Townsville",
        "guardian": {
            "fatherName": "James Doe",
            "fatherOccupation": "Engineer",
            "fatherContactNo": "111-222-3333",
            "motherName": "Mary Doe",
            "motherOccupation": "Teacher",
            "motherContactNo": "444-555-6666"
        },
        "localGuardian": {
            "name": "Alice Johnson",
            "occupation": "Doctor",
            "contactNo": "777-888-9999",
            "address": "789 Pine St, Villageton"
        },
        // "admissionSemester": "65b0104110b74fcbd7a25d92",
        // "academicDepartment": "65b00fb010b74fcbd7a25d8e"
    
}



const CreateStudents = () => {
    const [addStudent, { data, error }] = useAddStudentMutation();

    console.log({ data, error });
  
    const { data: sData, isLoading: sIsLoading } =
      useGetAllSemestersQuery(undefined);
      
      const { data: dData, isLoading: dIsLoading } =
      useGetAcademicDepartmentsQuery(undefined);
  
    const semesterOptions = sData?.data?.map((item) => ({
      value: item._id,
      label: `${item.name} ${item.year}`,
    }));
  
    const departmentOptions = dData?.data?.map((item) => ({
      value: item._id,
      label: item.name,
    }));
  
      const onSubmit:SubmitHandler<FieldValues> = (data) => {
        console.log(data);
        const studentData = {
            password: 'student123',
            student: data,
          };
      
          const formData = new FormData();
      
          formData.append('data', JSON.stringify(studentData));
          formData.append('file', data.image);
      
          addStudent(formData);
        // //! Develeopment purpose for checking
        // console.log(Object.fromEntries(formdata));
    }
    return (
     <Row>
        <Col span={24}>
        <UniForm onSubmit={onSubmit} defaultValues={studentDefaultValuew}>
            <Divider>Personal Info</Divider>
       <Row gutter={8}>
        <Col span={24} md={{span:12}} lg={{span:8}}>
        <UniInput type="text" name="name.firstName" label="First Name"  />
        </Col>
     

        <Col span={24} md={{span:12}} lg={{span:8}}>
        <UniInput type="text" name="name.middleName" label="Middle Name"  />
        </Col>
    
   
        <Col span={24} md={{span:12}} lg={{span:8}}>
        <UniInput type="text" name="name.lastName" label="Last Name"  />
        </Col>



        <Col span={24} md={{span:12}} lg={{span:8}}>
        <UniSelector options={genderOptions} name="gender" label="Gender" />
        </Col>
     

        <Col span={24} md={{span:12}} lg={{span:8}}>
        <UniSelector
                options={bloodGroupOptions}
                name="bloogGroup"
                label="Blood group"
              />
        </Col>
    
   
        <Col span={24} md={{span:12}} lg={{span:8}}>
        <UniDatePicker name="dateOfBirth" label="Date Of Birth"  />
        </Col>
       </Row>
       <Divider>Contact Info.</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UniInput type="text" name="email" label="Email" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UniInput type="text" name="contactNo" label="Contact" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UniInput
                type="text"
                name="emergencyContactNo"
                label="Emergency Contact"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UniInput
                type="text"
                name="presentAddress"
                label="Present Address"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UniInput
                type="text"
                name="permanentAddress"
                label="Permanent Address"
              />
            </Col>
          </Row>
          <Divider>Guardian</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UniInput
                type="text"
                name="guardian.fatherName"
                label="Father Name"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UniInput
                type="text"
                name="guardian.fatherOccupation"
                label="Father Occupation"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UniInput
                type="text"
                name="guardian.fatherContactNo"
                label="Father ContactNo"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UniInput
                type="text"
                name="guardian.motherName"
                label="Mother Name"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UniInput
                type="text"
                name="guardian.motherOccupation"
                label="Mother Occupation"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UniInput
                type="text"
                name="guardian.motherContactNo"
                label="Mother ContactNo"
              />
            </Col>
          </Row>
          <Divider>Local Guardian</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UniInput type="text" name="localGuardian.name" label="Name" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UniInput
                type="text"
                name="localGuardian.occupation"
                label="Occupation"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UniInput
                type="text"
                name="localGuardian.contactNo"
                label="Contact No."
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UniInput
                type="text"
                name="localGuardian.address"
                label="Address"
              />
            </Col>
          </Row>
          <Divider>Academic Info.</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UniSelector
                options={semesterOptions}
                disabled={sIsLoading}
                name="admissionSemester"
                label="Admission Semester"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UniSelector
                options={departmentOptions}
                disabled={dIsLoading}
                name="academicDepartment"
                label="Admission Department"
              />
            </Col>
          </Row>

          <Button htmlType="submit">Submit</Button>
        </UniForm>
      </Col>
    </Row>
    );
};

export default CreateStudents;