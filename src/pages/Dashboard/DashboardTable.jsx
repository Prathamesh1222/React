import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function DashboardTable({ rows, columns }) {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            {columns.map(c => {
                                return <TableCell key={c} align="center"><b>{c}</b></TableCell>
                            })}
                         
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, rowIndex) => {
                            return (<TableRow
                                key={rowIndex}
                            >

                                {Object.values(row).map((rowValue, index) => (
                                    <TableCell key={index} component="th" align="center" scope="row">
                                        {rowValue}
                                    </TableCell>
                                ))}
                            </TableRow>
                            )
                        })}
                    </TableBody>
                    {/* <TableHead>
                        <TableRow >
                            <TableCell><b>Difference</b></TableCell>
                            <TableCell align="right"><b></b></TableCell>
                            <TableCell align="right"><b></b></TableCell>
                            <TableCell align="right"><b></b></TableCell>
                            <TableCell align="right"><b></b></TableCell>
                            <TableCell align="right"><b></b></TableCell>
                            <TableCell align="right"><b></b></TableCell>
                            <TableCell align="center"><b></b></TableCell>
                            <TableCell align="center"><b></b> </TableCell>
                            <TableCell align="right"><b></b></TableCell>
                            <TableCell align="right"><b></b></TableCell>
                        </TableRow>
                    </TableHead> */}
                </Table>
            </TableContainer>
        </>
    );
}