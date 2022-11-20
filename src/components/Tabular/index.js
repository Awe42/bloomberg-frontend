import React from 'react';
import Table from 'react-bootstrap/Table';
import './index.css';

const Tabular = (props) => {
    const orders = props.data.map(({ _id, user, ...item }) => item);

	const theadData=Object.keys(orders[0]);
    const tbodyData=orders;

    return (
        <Table responsive striped bordered hover size="sm">
            <thead>
            <tr>
                {theadData.map(heading => {
                return <th key={heading}>{heading}</th>
                })}
            </tr>
            </thead>
            <tbody>
                {tbodyData.map((row, index) => {
                    return <tr key={index}>
                        {theadData.map((key, index) => {
                            return <td key={row[key]}>{row[key]}</td>
                        })}
                </tr>;
                })}
            </tbody>
        </Table>
	);
}

export default Tabular;