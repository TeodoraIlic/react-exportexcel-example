import React from 'react'
import { CSVLink } from 'react-csv'
import Button from 'react-bootstrap/Button';

export const ExportReactCSV = ({csvData}) => {
    return (
        <Button variant="warning">
             <CSVLink data={csvData}>Export</CSVLink> 
        </Button>
    )
}