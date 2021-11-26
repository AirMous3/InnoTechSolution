import React, { useState } from "react";
import { Select } from "antd";
import "antd/dist/antd.css";
import { useDispatch } from "react-redux";
import { getCities } from "../../store/searchCitiesReducer";

type PropsType = {
  cities: {
    id: number;
    name: string;
  }[];
};
export const EditableSelect = ({ cities }: PropsType) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>("");

  const optionsCities = cities.map((c) => (
    <Select.Option key={c.id} value={c.name}>
      {c.name}
    </Select.Option>
  ));
  const handleOnSearch = (e: string) => {
    setTitle(e);
    if (title.length < 3) return;
    dispatch(getCities(title));
  };
  return (
    <Select
      style={{
        width: "400px",
        marginTop: "100px",
        marginBottom: "50px",
      }}
      showSearch
      value={title}
      onSearch={handleOnSearch}
      filterOption={false}
    >
      {optionsCities}
    </Select>
  );
};
