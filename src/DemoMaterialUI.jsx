import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';

export default function DemoMaterialUI() {
  return (
    <>
      <h3>Material UI</h3>
      <Button variant="contained" color="error" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" color="primary" size="small">
        Click Me
      </Button>
      <Alert severity="error">This is an Alert</Alert>
    </>
  );
}
