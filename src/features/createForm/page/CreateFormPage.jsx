import styled from 'styled-components';
import Layout from '../../../Layout/Layout';
import Select from 'react-select';
import DatePicker from 'react-multi-date-picker';
import { Datepicker } from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { useEffect, useState } from 'react';
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
    available_slots: {},
  });
  const [slotValue, setSlotValue] = useState({
    sun: { start_time: '', end_time: '' },
    mon: { start_time: '', end_time: '' },
    tue: { start_time: '', end_time: '' },
    wed: { start_time: '', end_time: '' },
    thu: { start_time: '', end_time: '' },
    fri: { start_time: '', end_time: '' },
    sat: { start_time: '', end_time: '' },
  });
  const [dateValue, setDateValue] = useState({
    start_date: '',
    end_date: '',
  });

  const handleChange = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });
    console.log(values);
  };
  const handleSlotChange = (name, value) => {
    const [day, type] = name.split('.');
    setSlotValue({
      ...slotValue,
      [day]: {
        ...slotValue[day],
        [type]: value,
      },
    });

    console.log(slotValue);
  };

  const handleDateChange = (value) => {
    setDateValue({
      ...dateValue,
      start_date: value[0],
      end_date: value[1],
    });

    console.log(dateValue);
  };

  useEffect(() => {
    setValues({ ...values, available_slots: slotValue, ...dateValue });
  }, [slotValue, dateValue]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(values);
      const result = await axios({
        url: `${serverURL}/api/forms`,
        method: 'post',
        header: {
          Cookie: `${getCookie('accessToken')}`,
        },
        withCredentials: true,
        data: values,
      });
      console.log(result);
    } catch (error) {
      console.log('err', error);
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
                onChange={(e) => handleChange(e.target.name, e.target.value)}
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
                name="category"
                onChange={(data) => handleChange('category', data.value)}
              ></Select>
            </FormInputContainer>
            <FormInputContainer>
              <label for="description">Description</label>
              <FormTextInput
                id="description"
                name="description"
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              ></FormTextInput>
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
                onChange={(data) => handleDateChange(data)}
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
                id="duration"
                name="duration"
                onChange={(data) => handleChange('duration', data.value)}
              ></Select>
            </FormInputContainer>

            <FormInputContainer>
              <label for="available">Available Timeslot</label>
              <div style={{ display: 'flex' }}>
                <span>월</span>
                <input
                  name="mon.start_time"
                  // 따로 입력값을 받고 생성 요청전에 재생성
                  onChange={(e) =>
                    handleSlotChange(e.target.name, e.target.value)
                  }
                ></input>
                <input
                  name="mon.end_time"
                  // 따로 입력값을 받고 생성 요청전에 재생성
                  onChange={(e) =>
                    handleSlotChange(e.target.name, e.target.value)
                  }
                ></input>
              </div>
              <div style={{ display: 'flex' }}>
                <span>화</span>
                <input
                  name="tue.start_time"
                  // 따로 입력값을 받고 생성 요청전에 재생성
                  onChange={(e) =>
                    handleSlotChange(e.target.name, e.target.value)
                  }
                ></input>
                <input
                  name="tue.end_time"
                  // 따로 입력값을 받고 생성 요청전에 재생성
                  onChange={(e) =>
                    handleSlotChange(e.target.name, e.target.value)
                  }
                ></input>
              </div>
              <div style={{ display: 'flex' }}>
                <span>수</span>
                <input
                  name="wed.start_time"
                  // 따로 입력값을 받고 생성 요청전에 재생성
                  onChange={(e) =>
                    handleSlotChange(e.target.name, e.target.value)
                  }
                ></input>
                <input
                  name="wed.end_time"
                  // 따로 입력값을 받고 생성 요청전에 재생성
                  onChange={(e) =>
                    handleSlotChange(e.target.name, e.target.value)
                  }
                ></input>
              </div>
              <div style={{ display: 'flex' }}>
                <span>목</span>
                <input
                  name="thu.start_time"
                  // 따로 입력값을 받고 생성 요청전에 재생성
                  onChange={(e) =>
                    handleSlotChange(e.target.name, e.target.value)
                  }
                ></input>
                <input
                  name="thu.end_time"
                  // 따로 입력값을 받고 생성 요청전에 재생성
                  onChange={(e) =>
                    handleSlotChange(e.target.name, e.target.value)
                  }
                ></input>
              </div>
              <div style={{ display: 'flex' }}>
                <span>금</span>
                <input
                  name="fri.start_time"
                  // 따로 입력값을 받고 생성 요청전에 재생성
                  onChange={(e) =>
                    handleSlotChange(e.target.name, e.target.value)
                  }
                ></input>
                <input
                  name="fri.end_time"
                  // 따로 입력값을 받고 생성 요청전에 재생성
                  onChange={(e) =>
                    handleSlotChange(e.target.name, e.target.value)
                  }
                ></input>
              </div>
              <div style={{ display: 'flex' }}>
                <span>토</span>
                <input
                  name="sat.start_time"
                  // 따로 입력값을 받고 생성 요청전에 재생성
                  onChange={(e) =>
                    handleSlotChange(e.target.name, e.target.value)
                  }
                ></input>
                <input
                  name="sat.end_time"
                  // 따로 입력값을 받고 생성 요청전에 재생성
                  onChange={(e) =>
                    handleSlotChange(e.target.name, e.target.value)
                  }
                ></input>
              </div>
              <div style={{ display: 'flex' }}>
                <span>일</span>
                <input
                  name="sun.start_time"
                  // 따로 입력값을 받고 생성 요청전에 재생성
                  onChange={(e) =>
                    handleSlotChange(e.target.name, e.target.value)
                  }
                ></input>
                <input
                  name="sun.end_time"
                  // 따로 입력값을 받고 생성 요청전에 재생성
                  onChange={(e) =>
                    handleSlotChange(e.target.name, e.target.value)
                  }
                ></input>
              </div>
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
