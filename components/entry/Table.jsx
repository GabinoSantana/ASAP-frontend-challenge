import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    fontSize: 20,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const FileTable = (props) => {
  const files = props.files;

  const showTableBody = ({ filename, lines }) => {
    return (
      <>
        {lines.map((line) => (
          <StyledTableRow key={line.name}>
            <StyledTableCell component="th" scope="row">
              {filename}
            </StyledTableCell>
            <StyledTableCell align="left">{line.text}</StyledTableCell>
            <StyledTableCell align="left">{line.number}</StyledTableCell>
            <StyledTableCell align="left">{line.hex}</StyledTableCell>
          </StyledTableRow>
        ))}
      </>
    );
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>File</StyledTableCell>
            <StyledTableCell align="left">Filename</StyledTableCell>
            <StyledTableCell align="left">Text</StyledTableCell>
            <StyledTableCell align="left">Number</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {files.map((file) => {
            return showTableBody({ filename: file.file, lines: file.lines });
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
