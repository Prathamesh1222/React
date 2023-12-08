import { ROW_OBJ, DIFFERENCE_ROW } from './constants'

export function formatDataForTableAndChart(responseData) {
    const differenceRow = { ...DIFFERENCE_ROW }
    console.log('responseData',responseData)
    const updatedData = responseData.map(d => {
      const singleRow = { ...ROW_OBJ };
  
      //we are mapping API response with ROW_OBJ
      Object.keys(d).forEach(key => {
        const month = key;
        console.log('month',month)
        singleRow.MONTH = month;
        const monthData = d[month];
        console.log('monthData',monthData)
        monthData?.forEach(obj => {
          singleRow[obj.apiConsumer.toUpperCase()] = obj.apiCallCount

          // //adding to total calls
          // singleRow["LPSTotalCalls"] =singleRow["LPSTotalCalls"]==='' ? obj.apiCallCount:singleRow["LPSTotalCalls"] +obj.apiCallCount
          
          differenceRow[obj.apiConsumer.toUpperCase()] = obj.apiCallCount - differenceRow[obj.apiConsumer.toUpperCase()]
        })
  
      })
  
      return singleRow;
    })
    const chartDataObj = ROW_OBJ
    delete chartDataObj.MONTH
    const chartMonths = []
    const chartData = Object.keys(chartDataObj).map(key => {
      let singleCandle = { name: key }
      singleCandle[updatedData[0].MONTH] = updatedData[0][key]
      singleCandle[updatedData[1].MONTH] = updatedData[1][key]
      return singleCandle
    })
  
    chartMonths.push(updatedData[0].MONTH)
    chartMonths.push(updatedData[1].MONTH)
  
    return { chartData: { data: chartData, months: chartMonths }, tableData: [...updatedData, differenceRow] }
  }