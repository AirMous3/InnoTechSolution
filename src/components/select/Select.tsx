import React, { ReactElement, useState } from 'react';

import { Select } from 'antd';
import 'antd/dist/antd.css';
import { useDispatch } from 'react-redux';

import { EMPTY_STRING } from '../../constants/defaultValues';
import { getCities } from '../../store/searchCitiesReducer';
import { getCity } from '../../store/trackedСitiesReducer';

type PropsType = {
  cities: {
    id: number;
    name: string;
  }[];
};

const MIN_CITY_LENGTH = 3;

export const EditableSelect = ({ cities }: PropsType): ReactElement => {
  const dispatch = useDispatch();
  const [city, setCity] = useState<string>(EMPTY_STRING);

  const optionsCities = cities.map(({ id, name }) => (
    <Select.Option key={id} value={name}>
      {name}
    </Select.Option>
  ));

  const handleOnSearch = (findCity: string): void => {
    setCity(findCity);
    if (city.length < MIN_CITY_LENGTH) return;
    dispatch(getCities(city));
  };

  const handleOnChange = (currentCity: string): void => {
    dispatch(getCity(currentCity));
    setCity(EMPTY_STRING);
  };

  return (
    <Select
      style={{
        width: '400px',
        marginTop: '100px',
        marginBottom: '50px',
      }}
      showSearch
      value={city}
      onSearch={handleOnSearch}
      onChange={handleOnChange}
      filterOption={false}
    >
      {optionsCities}
    </Select>
  );
};
