import React from 'react'
import {GridComponent, ColumnsDirective, Page, Edit,Search, Inject, ColumnDirective, Toolbar} from "@syncfusion/ej2-react-grids"
import { employeesData, employeesGrid } from '../data/dummy'
import {Header} from "../components"
const Employees = () => {
  return (
    <div className="m-2 md:m-3 p-2 md:p-6 bg-white rounded-3xl">
      <Header title="Employees" category="Page"/>
      <GridComponent
      dataSource={employeesData}
      allowPaging
      toolbar={["Search"]}
      width="auto"
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index)=>(
            <ColumnDirective key={index} {...item}/>
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search,Toolbar]}/>
      </GridComponent>
    </div>
  )
}

export default Employees