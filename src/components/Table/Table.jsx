import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";
import PropTypes, { element } from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { punchData } from "../../Data/Data";


function createData(date, totalPunches, blockedPunches, accuracy, history) {
  return {
    date, totalPunches, blockedPunches, accuracy, history,
  };
};

export const accuracy = {}




export default function BasicTable(props) {

  for (const data in props.punchData) {
    let blockedPunches = 0;
    let totalPunches = 0;
    const dayData = []
    punchData[data].forEach(element => {

      const historyData = { "time": element[4], "punchPower": element[0], "punchSpeed": element[1], "isBlocked": element[3] ? "No" : "Yes" };
      dayData.push(historyData)
      totalPunches += 1;
      if (element[3] === 0) {
        blockedPunches += 1;
      }


    });

    accuracy[data] = { "totalPunches": totalPunches, "blockedPunches": blockedPunches, "accuracy": (100 - ((blockedPunches / totalPunches) * 100)).toFixed(2), "history": dayData }
  }


  const rows = [];

  for (const [key, value] of Object.entries(accuracy)) {
    const rowData = createData(key, value.totalPunches, value.blockedPunches, value.accuracy, value.history);
    rows.push(rowData)
  }
  return (
    <div className="Table">


      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell >Date</TableCell>
              <TableCell align="center">Total Punches</TableCell>
              <TableCell align="center">Blocked Punches</TableCell>
              <TableCell align="center">Accuracy</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}



function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.date}
        </TableCell>
        <TableCell align="center">{row.totalPunches}</TableCell>
        <TableCell align="center">{row.blockedPunches}</TableCell>
        <TableCell align="center">{row.accuracy}%</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>

              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow><TableCell />
                    <TableCell align="center">Time</TableCell>
                    <TableCell align="center">Punch Power (N)</TableCell>
                    <TableCell align="center">Punch Speed (Km/h)</TableCell>
                    <TableCell align="center">Blocked</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>

                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.time}>
                      <TableCell />
                      <TableCell component="th" scope="row" align="center">
                        {historyRow.time}
                      </TableCell>
                      <TableCell align="center">{historyRow.punchPower}</TableCell>
                      <TableCell align="center" >{historyRow.punchSpeed}</TableCell>
                      <TableCell align="center">
                        {historyRow.isBlocked}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>

    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    date: PropTypes.string.isRequired,
    totalPunches: PropTypes.number.isRequired,
    blockedPunches: PropTypes.number.isRequired,
    accuracy: PropTypes.string.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        time: PropTypes.string.isRequired,
        punchPower: PropTypes.number.isRequired,
        punchSpeed: PropTypes.number.isRequired,
        isBlocked: PropTypes.bool.isRequired,
      }),
    ).isRequired,

  }).isRequired,
};


