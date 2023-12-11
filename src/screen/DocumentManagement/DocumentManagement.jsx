import React from 'react';
import { Container, Content, Header } from '../../shared/styles.js';
import { Table } from 'antd';

const DocumentManagement = () => {
  const data = [
    {
      key: 1,
      name: 'Hướng dẫn gửi mail bằng NodeJS',
      author: 'Tạ Duy Công',
      email: 'congtd35@gmail.com',
      link: <a href='https://docs.google.com/document/d/16ddJCAO_Y0c0UyL0HY51-gt2FVoU9peMLlAwJqrXTkU/edit'>
        https://docs.google.com/document/d/16ddJCAO_Y0c0UyL0HY51-gt2FVoU9peMLlAwJqrXTkU/edit
      </a>,
    },
    {
      key: 2,
      name: 'Hướng dẫn tích hợp ESLINT + PRETTIER',
      author: 'Tạ Duy Công',
      email: 'congtd35@gmail.com',
      link: <a
        href='https://docs.google.com/document/d/1WeekAnYA0wFQLHKenTP1q6A7SfNMIVLIvY_3obdHKGk/edit'>
        https://docs.google.com/document/d/1WeekAnYA0wFQLHKenTP1q6A7SfNMIVLIvY_3obdHKGk/edit
      </a>,
    },
  ];
  const filters = data.map(item => ({
    text: item.name,
    value: item.name,
  }));
  const columns = [
    {
      title: 'Tên tài liệu',
      dataIndex: 'name',
      filters: filters,
      filterSearch: true,
      onFilter: (value, record) => record.name.startsWith(value),
      width: '25%',
    },
    {
      title: 'Tác giả',
      dataIndex: 'author',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Đường dẫn',
      dataIndex: 'link',
      width: '30%',
    },
  ];
  return <Container>
    <Header>Quản lý tài liệu</Header>
    <Content>
      <Table columns={columns} bordered dataSource={data} />
    </Content>
  </Container>;
};
export default DocumentManagement;