import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { Add } from '../redux/Todoslice';
import TaskCard from './DrowSingleTask';

export default function AddTaskDialog() {
  const [publicId, setPublicId] = React.useState(1)
  const Tasks = useSelector((state) => state.TaskSlice.Task);
  const [id, setId] = React.useState("");
  const [name, setName] = React.useState("");
  const [createDate, setCreateDate] = React.useState("");
  const [checkbox, setCheckbox] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const Task = {
    id,
    name,
    createDate,
    checkbox: false
  }
  const dispatch = useDispatch()

  const handleCloseSave = () => {
    dispatch(Add({task:Task, payload: Tasks }))
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    <TaskCard />
    setOpen(false);
  };
  return (    
    <React.Fragment>
      <Button onClick={handleClickOpen}>
        <IconButton variant="outlined" aria-label="add task">
          <AddIcon />
        </IconButton>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Now Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="new task"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setId(publicId)
              setPublicId(publicId + 1)
              setName(e.target.value)
              var today = new Date(),
                date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
              setCreateDate(date)
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button 
          onClick={handleCloseSave}
          >Save</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}