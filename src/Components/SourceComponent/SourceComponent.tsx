import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Box,
} from '@mui/material';
import {
  AlbanySource,
  BuffaloSource,
  WatertownSource,
  NewYorkStateSource,
} from '../../assets/Source/source';
import Form from '../Form/Form';

const sources = [
  AlbanySource,
  BuffaloSource,
  WatertownSource,
  NewYorkStateSource,
];

const sourceData = sources.map((source) => {
  return {
    sourceFor: source.source,
    sourceType: source.source,
    sourceLink: [...source.sourceLink],
  };
});

function SimpleTable() {
  return (
    <Box sx={{ mt: 10 }}>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Source For</TableCell>
              <TableCell>Source Type</TableCell>
              <TableCell>Source Links</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sourceData.map((row) => (
              <TableRow key={row.sourceFor}>
                <TableCell>{row.sourceFor}</TableCell>
                <TableCell>{row.sourceType}</TableCell>
                <TableCell>{row.sourceLink.join(' , ')}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      <Form />
    </Box>
  );
}

export default SimpleTable;
