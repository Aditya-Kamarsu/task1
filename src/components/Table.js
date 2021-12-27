import React, {useState} from "react";
import {
  DataTable,
  DataTableCell,
  DataTableHeadCell,
  DataTableRow,
  DataTableBody,
  DataTableContent,
  DataTableHead,
} from "@rmwc/data-table";
import { useTable } from "react-table";
import "@material/data-table/dist/mdc.data-table.css";
import "@rmwc/data-table/data-table.css";
import "@rmwc/icon/icon.css";
const Table = (props) => {

  return (
    <div>
      <DataTable>
        <DataTableContent>
          <DataTableHead>
            <DataTableRow>
              <DataTableHeadCell>Name</DataTableHeadCell>
              <DataTableHeadCell
                alignEnd
                // sort={sortDir}
                // onSortChange={(sortDir) => {
                //   setSortDir(sortDir);
                //   console.log(sortDir);
                // }}
              >
                Age (in years)
              </DataTableHeadCell>
              <DataTableHeadCell alignEnd>Blood Group</DataTableHeadCell>
              <DataTableHeadCell alignEnd>Address</DataTableHeadCell>
            </DataTableRow>
          </DataTableHead>
          <DataTableBody>
            <DataTableRow>
              <DataTableCell>{props.Data.name}</DataTableCell>

              <DataTableCell alignEnd>{props.Data.age}</DataTableCell>
              <DataTableCell alignEnd>{props.Data.bloodGroup}</DataTableCell>
              <DataTableCell alignEnd>{props.Data.address}</DataTableCell>
            </DataTableRow>
            {/* <DataTableRow>
              <DataTableCell>Yashwanth</DataTableCell>
              <DataTableCell alignEnd>20</DataTableCell>
              <DataTableCell alignEnd>B+ve</DataTableCell>
              <DataTableCell alignEnd>Address2</DataTableCell>
            </DataTableRow>
            <DataTableRow>
              <DataTableCell>Kartikeya</DataTableCell>
              <DataTableCell alignEnd>22</DataTableCell>
              <DataTableCell alignEnd>A+ve</DataTableCell>
              <DataTableCell alignEnd>Address3</DataTableCell>
            </DataTableRow> */}
          </DataTableBody>
        </DataTableContent>
      </DataTable>
    </div>
  );
};

export default Table;
