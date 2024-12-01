'use client'
import React, { useState } from 'react';
import { Input, Table } from 'antd';
import {columns} from '@/utils/columns'
import data from '@/utils/data'


const TableComponent: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");

  const filteredData = data.filter(
    item =>
      item.first_name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.last_name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.email.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className=''>
      <Input
        placeholder="Search by Name or Email"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={{ marginBottom: 16 }}
      />
      <Table
        dataSource={filteredData}
        columns={columns}  
        rowKey={(record) => record.id}
        pagination={false}
        scroll={{ y: 600 }}
      />
    </div>
  );
};

export default TableComponent;
