import React, { Component } from "react";
import { Table } from 'antd';


const TopChar = (props) => {



    const dataSource = [
        {
            key: '1',
            name: 'World Health',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ];

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Tag Line',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Donate',
            dataIndex: 'address',
            key: 'address',
        },
    ];

    return (
        <div>
            <Table dataSource={dataSource} colums={columns} />;
        </div>

    );
}

export default TopChar;
