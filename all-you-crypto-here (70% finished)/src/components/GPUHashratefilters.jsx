/* eslint-disable eol-last */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
const { Table } = antd;

const columns = [
  {
    title: 'GPUname',
    dataIndex: 'GPU Name',
    filters: [
      {
        text: 'NVIDIA',
        value: 'NVIDIA',
      },
      {
        text: 'AMD',
        value: 'AMD',
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.GPUname.indexOf(value) === 0,
    sorter: (a, b) => a.GPUname.length - b.GPUname.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Age',
    dataIndex: 'age',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];

function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}

ReactDOM.render(<Table columns={columns} dataSource={data} onChange={onChange} />, mountNode);