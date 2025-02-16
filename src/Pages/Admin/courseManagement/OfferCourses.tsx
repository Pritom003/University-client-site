import { Button, Col, Flex } from 'antd';
import { useState } from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { useGetAcademicFacultiesQuery } from '../../../redux/features/admin/AcademicSemister/AcademicSemisterApi';
import UniForm from '../../../Components/form/UniForm';
import UniselectorWithWatch from '../../../Components/form/UniselectorWithWatch';
import UniInput from '../../../Components/form/UniInput';

const OfferCourse = () => {
  const [id, setId] = useState('');

  console.log('Inside parent component', id);

  const { data: academicFacultyData } = useGetAcademicFacultiesQuery(undefined);

  const academicSemesterOptions = academicFacultyData?.data?.map((item) => ({
    value: item._id,
    label: item.name,
  }));

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <UniForm onSubmit={onSubmit}>
          <UniselectorWithWatch
            onValueChange={setId}
            label="Academic Semester"
            name="academicSemester"
            options={academicSemesterOptions}
          />
          <UniInput disabled={!id} type="text" name="test" label="Test" />
          <Button htmlType="submit">Submit</Button>
        </UniForm>
      </Col>
    </Flex>
  );
};

export default OfferCourse;