/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { FieldValues, SubmitHandler } from 'react-hook-form';
import { Button, Col, Flex } from 'antd';
import { toast } from 'sonner';
import UniSelector from '../../../Components/form/UniSelectors';
import UniForm from '../../../Components/form/UniForm';
import UniDatePicker from '../../../Components/form/UniDatePicker';
import UniInput from '../../../Components/form/UniInput';
import { TResponse } from '../../../Types';
import { useAddRegisteredSemesterMutation } from '../../../redux/features/admin/courseMangement.api';
import { useGetAllSemestersQuery } from '../../../redux/features/admin/AcademicSemister/AcademicSemisterApi';
import { semesterStatusOptions } from '../../../Constants/semister.type';

const SemesterRegistration = () => {
  const [addSemester] = useAddRegisteredSemesterMutation();
  const { data: academicSemester } = useGetAllSemestersQuery([
    { name: 'sort', value: 'year' },
  ]);

  const academicSemesterOptions = academicSemester?.data?.map((item) => ({
    value: item._id,
    label: `${item.name} ${item.year}`,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading('Creating...');

    const semesterData = {
      ...data,
      minCredit: Number(data.minCredit),
      maxCredit: Number(data.maxCredit),
    };

    console.log(semesterData);

    try {
      const res = (await addSemester(semesterData)) as TResponse<any>;
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
        <UniForm onSubmit={onSubmit}>
          <UniSelector
            label="Academic Semester"
            name="academicSemester"
            options={academicSemesterOptions}
          />

          <UniSelector
            name="status"
            label="Status"
            options={semesterStatusOptions}
          />
          <UniDatePicker name="startDate" label="Start Date" />
          <UniDatePicker name="endDate" label="End Date" />
          <UniInput type="text" name="minCredit" label="Min Credit" />
          <UniInput type="text" name="maxCredit" label="Max Credit" />

          <Button htmlType="submit">Submit</Button>
        </UniForm>
      </Col>
    </Flex>
  );
};

export default SemesterRegistration;