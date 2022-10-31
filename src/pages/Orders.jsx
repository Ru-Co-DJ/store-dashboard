import React from 'react'
import {GridComponent, ColumnsDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject, ColumnDirective} from "@syncfusion/ej2-react-grids"
import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy'
import {Header} from "../components"
const Orders = () => {
  return (
    <div className="m-2 md:m-3 p-2 md:p-6 bg-white rounded-3xl">
      <Header title="Orders" category="Page"/>
      <GridComponent
      id="gridcomp"
      dataSource={ordersData}
      allowPaging
      allowSorting
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index)=>(
            <ColumnDirective key={index} {...item}/>
          ))}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport]}/>
      </GridComponent>
    </div>
  )
}

export default Orders