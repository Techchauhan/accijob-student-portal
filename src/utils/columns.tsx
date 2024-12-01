import { ColumnsType } from 'antd/es/table';
import { DataType } from './type';
import Avatar from 'antd/es/avatar/avatar';
import { Tag } from 'antd';

export const columns: ColumnsType<DataType> = [
  {
    key: 'id',
    dataIndex: 'id',
    title: 'ID',
    sorter: (a, b) => a.id - b.id, 
  },
  {
    key: 'fullName',
    title: 'Name',
    render: (_, record) => (
      <div className='items-center'>
        <Avatar src={record.img_src || undefined}></Avatar>
        <strong>{record.first_name} {record.last_name}</strong>
      </div>
    ),
    sorter: (a, b) => (a.first_name + a.last_name).localeCompare(b.first_name + b.last_name), // Sort by Name
  },
  {
    key: 'gender',
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
      { text: 'Male', value: 'Male' },
      { text: 'Female', value: 'Female' },
    ],
    onFilter: (value, record) => record.gender.includes(value as string), 
    filterIcon: () => <span>🔽</span>, 
  },
  {
    key: 'class',
    title: 'Class',
    dataIndex: 'class',
    sorter: (a, b) => a.class - b.class,  
  },
  {
    key: 'marks',
    title: 'Marks',
    dataIndex: 'marks',
    sorter: (a, b) => a.marks - b.marks,  
  },
  {
    key: 'passing',
    title: 'Passing',
    render: (_, record) => (
      <div>
        <Tag color={record.passing ? 'green' : 'red'}>
          {record.passing ? 'Passed' : 'Failed'}
        </Tag>
      </div>
    ),
    filters: [
      { text: 'Passed', value: true },
      { text: 'Failed', value: false },
    ],
    onFilter: (value, record) => record.passing === value, 
    filterIcon: () => <span>🔽</span>, 
  },
  {
    key: 'email',
    dataIndex: 'email',
    title: 'Email',
  },
];
