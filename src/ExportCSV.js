import React from 'react'
import Button from 'react-bootstrap/Button';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

export const ExportCSV = ({csvData, fileName}) => {

    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xls';

    const exportToExcel = function(csvData) {
        console.log('Methods Start');
        var myJsonString = JSON.stringify(csvData);
        var blob = new Blob([myJsonString], {
          type: "application/vnd.ms-excel;charset=utf-8"
        });
        saveAs(blob, "Report.xls");
       
      };
    return (
        <Button variant="warning" onClick={(e) => exportToExcel(csvData)}>Export</Button>
    )
}