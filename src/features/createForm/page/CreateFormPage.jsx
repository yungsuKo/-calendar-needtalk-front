import styled from 'styled-components';
import Layout from '../../../Layout/Layout';
import Select from 'react-select';
import DatePicker from 'react-multi-date-picker';
import { Calendar } from 'react-multi-date-picker';
import { Datepicker } from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { useState } from 'react';
import axios from 'axios';
import { Cookies } from 'react-cookie';
import { getCookie } from '../../../utils/cookies';

export const CreateFormPage = () => {
  const serverURL = process.env.REACT_APP_SERVER_URL;
  const options = [
    { value: 'Marketing', label: 'Marketing' },
    { value: 'Product', label: 'Product' },
    { value: 'Design', label: 'Design' },
  ];
  const optionsDuration = [
    { value: '0.5', label: '30분' },
    { value: '1', label: '1시간' },
    { value: '2', label: '2시간' },
  ];

  const [values, setValues] = useState({
    subject: '',
    description: '',
    category: '',
    duration: '',
    available_slots: {
      sun: '',
      mon: '',
      tue: '',
      wen: '',
      thu: '',
      fri: '',
      sat: '',
    },
  });
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    console.log(getCookie('accessToken'));
    try {
      const result = await axios({
        url: `${serverURL}/api/forms`,
        method: 'post',
        header: {
          Cookie: `${getCookie('accessToken')}`,
        },
        withCredentials: true,
        body: values,
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <FormHeader>
        <button>Back</button>
        <div>Title</div>
        <div></div>
      </FormHeader>
      <Container>
        <FormCreate>
          <FormContainer>
            <FormInputContainer>
              <label for="subject">Event Name</label>
              <FormTextInput
                id="subject"
                name="subject"
                onChange={handleChange}
              ></FormTextInput>
            </FormInputContainer>
            <FormInputContainer>
              <label for="category">Category</label>
              <Select
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    width: '100%',
                    marginTop: '8px',
                    border: '1px solid grey',
                    padding: '4px 14px',
                    fontSize: '16px',
                    lineHeight: '1.5',
                    borderRadius: '8px',
                  }),
                }}
                options={options}
                id="category"
              ></Select>
            </FormInputContainer>
            <FormInputContainer>
              <label for="description">Description</label>
              <FormTextInput id="description"></FormTextInput>
            </FormInputContainer>
            <FormInputContainer>
              <label for="calendar">Calendar</label>
              <DatePicker
                id="calendar"
                style={{
                  marginTop: '8px',
                  display: 'block',
                  border: '1px solid grey',
                  padding: '10px 14px',
                  fontSize: '16px',
                  lineHeight: '1.5',
                  borderRadius: '8px',
                  width: '95%',
                }}
                range
                rangeHover
              />
            </FormInputContainer>
            <FormInputContainer>
              <label for="duration">Duration</label>
              <Select
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    width: '100%',
                    marginTop: '8px',
                    border: '1px solid grey',
                    padding: '4px 14px',
                    fontSize: '16px',
                    lineHeight: '1.5',
                    borderRadius: '8px',
                  }),
                }}
                options={optionsDuration}
                id="category"
              ></Select>
            </FormInputContainer>

            <FormInputContainer>
              <label for="available">Available Timeslot</label>
              <Datepicker
                controls={['time']}
                timeFormat="HH"
                headerText="Time: {value}"
                touchUi={false}
              />
            </FormInputContainer>
          </FormContainer>
          <div
            style={{
              display: 'flex',
              justifyContent: 'right',
              padding: '0 16px 16px 0',
            }}
          >
            <FormSubmitInput
              type="submit"
              value="Create"
              onClick={handleSubmit}
            ></FormSubmitInput>
          </div>
        </FormCreate>
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 100px;
  max-width: 1020px;
`;

const FormHeader = styled.div`
  margin: 0 auto;
  max-width: 1020px;
  display: flex;
  justify-content: space-between;
  padding: 24px 12px;
`;

const FormCreate = styled.form`
  border: 2px solid black;
  diplay: block;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 536px;
  padding: 16px;
`;

const FormInputContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  box-sizing: inherit;
`;

const FormTextInput = styled.input`
  display: block;
  margin-top: 8px;
  border: 1px solid grey;
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 16px;
  line-height: 1.5;
  color: #1a1a1a;
`;

const FormSelectInput = styled(Select)`
  display: block;
  margin-top: 8px;
  width: 100%;
  border: 1px solid grey;
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 16px;
  line-height: 1.5;
  color: #1a1a1a;
`;

const FormSubmitInput = styled.input`
  display: block;

  margin-top: 8px;
  border: 1px solid grey;
  padding: 10px 14px;
  border-radius: 30px;
  font-size: 16px;
  line-height: 1.5;
  color: #1a1a1a;
`;
