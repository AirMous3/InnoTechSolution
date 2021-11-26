import React from "react";
import { Select } from "antd";
import "antd/dist/antd.css";

export const EditableSelect = () => {
  const data: any = [];
  const optionsCities = data.map((c: any) => (
    <Select.Option key={c.id} value={c.name}>
      {c.name}
    </Select.Option>
  ));

  return (
    <Select
      style={{
        width: "400px",
        marginTop: "100px",
        marginBottom: "50px",
      }}
      showSearch
      filterOption={false}
    >
      {optionsCities}
    </Select>
  );
};
