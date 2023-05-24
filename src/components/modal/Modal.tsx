import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

type Props = {
  activeModal: boolean;
  setActiveModal: (active: boolean) => void;
  children?: JSX.Element | JSX.Element[];
};

const ModalWindow = ({ activeModal, setActiveModal, children }: Props) => {
  return (
    <div>
      <Modal
        open={activeModal}
        onClose={() => setActiveModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{children}</Box>
      </Modal>
    </div>
  );
};

export { ModalWindow };
