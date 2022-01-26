import React from 'react'
import "./Product.css"
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {AiOutlineCloseCircle} from "react-icons/ai"
import { IconButton } from '@material-ui/core';
import { FaCartArrowDown } from 'react-icons/fa';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function Product({...props}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
        <div className='product'>
            <h5>{props.name}</h5>
            <img src={props.img} alt={props.name} />
            <p>{props.desc}</p>
            <p>${props.price}</p>
            <Button  onClick={handleOpen}>View Details</Button>
            <Modal
                className="modal"
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
                >
                    <Box sx={style}>
                    <IconButton onClick={handleClose} className="iconBtn"><AiOutlineCloseCircle className="iconClose" /></IconButton>
                    <Typography id="keep-mounted-modal-title" textAlign="center" variant="h6" component="h2">
                        Description
                    </Typography>
                    <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                        lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
                    </Typography>
                        <img src={props.img} alt="img" />
                        <Button><a target="_blank" rel="noreferrer" href={props.link}><FaCartArrowDown /> Buy</a></Button>
                    </Box>
      </Modal>

            {/* Modals */}
        </div>
    )
}
