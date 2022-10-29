import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 200,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  fontFamily: 'forma-djr-deck',
  borderRadius: 5
};

export default function AddButton({ post }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [card, setCard] = useState([])

  useEffect(() => {
    if (post) {
        setCard(post);
    }
  }, [post]);

  async function addWishlist() {
      // the trick is to add a "database" name to the end of the url. This "database" is automatically created
      const url = "https://webapp-series-default-rtdb.europe-west1.firebasedatabase.app/wishlist.json";
      const response = await fetch(url, {
          method: "POST", 
          body: JSON.stringify(card) 
      });
      const data = await response.json();
      console.log(data);
      toast.success('Successfully added!', {className: "toaster"})
  } 

  async function addCurrent() {
    // the trick is to add a "database" name to the end of the url. This "database" is automatically created
    const url = "https://webapp-series-default-rtdb.europe-west1.firebasedatabase.app/current.json";
    const response = await fetch(url, {
        method: "POST", 
        body: JSON.stringify(card) 
    });
    const data = await response.json();
    console.log(data);
    toast.success('Successfully added!', {className: "toaster"})
}

  return (
    <div>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Button onClick={handleOpen}><AddIcon className="plus-button" sx={{ fontSize: "2.5rem" }}></AddIcon></Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div className="modalbox">
                <h2 className="modalbox-title">Add to:</h2>
                <div className="modalbox-button-cont">
                    <button onClick={addCurrent} className="modalbox-button">Currently watching</button>
                    <button onClick={addWishlist} className="modalbox-button">Wishlist</button>
                </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}