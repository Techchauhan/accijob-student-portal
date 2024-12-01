'use client'
import React, { useState } from "react";
import { Table, Input, Avatar, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import data from "./data"; // Assuming 'data' is imported from 'data.json'

interface DataType {
    key: string;
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
    img_src: string;
    class: number;
    marks: number;
    passing: boolean;
    city: string;
}

const TableComponent: React.FC = () => {
    const [searchText, setSearchText] = useState<string>("");

    // Filter data based on search input
    const filteredData = data.filter(
        item =>
            item.first_name.toLowerCase().includes(searchText.toLowerCase()) ||
            item.city.toLowerCase().includes(searchText.toLowerCase())
    );

    const columns: ColumnsType<DataType> = [
        { title: 'ID', dataIndex: 'id', key: 'id' },
        {
            title: 'Name',
            key: 'name',
            render: (text, record) => (
                <div className="flex items-center">
                    
                    <div>
                        <Avatar src={record.img_src} size="small" />
                    </div>
                    <strong>{record.first_name} {record.last_name}</strong>
                </div>
            ),
        },
        { title: 'Gender', dataIndex: 'gender', key: 'gender' },
        { title: 'Class', dataIndex: 'class', key: 'class' },
        { title: 'Marks', dataIndex: 'marks', key: 'marks' },
        {
            title: 'Passing',
            key: 'passing',
            render: (text, record) => (
                <Tag color={record.passing ? 'green' : 'red'}>
                    {record.passing ? "Passed" : 'Fail'}
                </Tag>
            ),
        },
        { title: 'Email', dataIndex: 'email', key: 'email' }
    ];

    return (
        <div>
            {/* Search Input */}
            <Input
                placeholder="Search by Name or City"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                style={{ marginBottom: 16, width: "50%" }}
            />
            {/* Table with Fixed Height and Scroll */}
            <Table
                columns={columns}
                dataSource={filteredData}
                pagination={false} // Disable pagination
                scroll={{ y: 600 }} // Set fixed height for scrollable rows
            />
        </div>
    );
};

export default TableComponent;
