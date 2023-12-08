import React, { useState } from 'react';

import DashboardHeader from './DashboardHeader'
import axios from "axios"
import toast from 'react-hot-toast';
import DashboardTable from './DashboardTable'
import DashboardChart from "./DashboardChart"
import { ROW_OBJ } from './constants'
import { formatDataForTableAndChart } from "./helper"

export default function Dashboard() {


  const [tableRows, setTableRows] = useState([])
  const [chartData, setChartData] = useState([])
  //{ ftDate, sDate,dayOrMonthState }  
  const getData = () => {
    //Calling the API to get data 
    //https://api.jsonbin.io/v3/qs/6571e5280574da7622d1a2b5
    axios.get("https://api.npoint.io/5caff8b65b2f4c61a553", {
      // headers: {
      //   'Access-Control-Allow-Origin': '*'
      // }
    }).then(response => {
      const result = response.data
      if (result.message) {
        toast(result.message);
        const { chartData, tableData } = formatDataForTableAndChart(result.matrix)
        console.log('tableData',tableData)
        setTableRows(tableData)
        setChartData(chartData)
      }
    }).catch(error => {
      toast.error('Something went wrong');

    })


  }
  return (
    <>
      <DashboardHeader getData={getData} />
      <DashboardTable rows={tableRows} columns={Object.keys(ROW_OBJ)} />
      <DashboardChart chartData={chartData} />
    </>
  );
}