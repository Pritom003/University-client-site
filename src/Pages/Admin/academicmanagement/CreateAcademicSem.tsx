/* eslint-disable @typescript-eslint/no-unused-vars */
import { FieldValues, SubmitHandler } from 'react-hook-form';

import { Button, Col, Flex } from 'antd';

import { toast } from 'sonner';
import UniForm from '../../../Components/form/UniForm';
import UniSelector from '../../../Components/form/UniSelectors';
import { semesterOptions } from '../../../Constants/semister.type';
import { monthOptions } from '../../../Constants/global';
import { useAddAcademicSemesterMutation } from '../../../redux/features/admin/AcademicSemister/AcademicSemisterApi';
// import { TResponse } from '../../../Types/global.type';
import { zodResolver } from '@hookform/resolvers/zod';
import { academicSemesterSchema } from '../../../Scheemas/AcademicManagement.scheema';
import { TResponse } from '../../../Types/global.type';
import { TAcademicSemester } from '../../../Types/academicmangement';

const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));

const CreateAcademicSemester = () => {
  const [addAcademicSemester] = useAddAcademicSemesterMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading('Creating...');

    const name = semesterOptions[Number(data?.name) - 1]?.label;

    const semesterData = {
      name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };

    try {
      const res = (await addAcademicSemester(semesterData)) as TResponse<TAcademicSemester> ;
      console.log(res);
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success('Semester created', { id: toastId });
      }
    } catch (err) {
      toast.error('Something went wrong', { id: toastId });
    }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <UniForm
          onSubmit={onSubmit}
          resolver={zodResolver(academicSemesterSchema)}
        >
          <UniSelector label="Name" name="name" options={semesterOptions} />
          <UniSelector label="Year" name="year" options={yearOptions} />
          <UniSelector
            label="Start Month"
            name="startMonth"
            options={monthOptions}
          />
          <UniSelector label="End Month" name="endMonth" options={monthOptions} />

          <Button htmlType="submit">Submit</Button>
        </UniForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;