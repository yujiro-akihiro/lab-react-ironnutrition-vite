import React from "react";
import { Input } from "antd";

const Search = ({ onSearch }) => {
  return (
    <Input
      placeholder="Search food"
      onChange={(e) => onSearch(e.target.value)}
      style={{ marginBottom: '20px', maxWidth: '400px' }}
    />
  );
};

export default Search;

