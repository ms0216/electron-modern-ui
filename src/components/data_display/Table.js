import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import BaseComponent from "../BaseComponent";

class TableComponent extends BaseComponent {
  create(headers = [], rows = []) {
    const id = this.generateId();
    const element = (
      <TableContainer component={Paper} id={id}>
        <Table>
          <TableHead>
            <TableRow>
              {headers.map((header, index) => (
                <TableCell key={index}>{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <TableCell key={cellIndex}>{cell}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );

    return { id, element };
  }
}

export default TableComponent;
