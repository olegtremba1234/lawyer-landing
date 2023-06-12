import * as React from 'react';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Sheet from '@mui/joy/Sheet';

import style from "./Modal.module.css"
import PlayIcon from "../../Images/icons/icn play .icn-sm.svg"



export default function ModalWindow() {
    const [open, setOpen] = React.useState(false);
    return (
        <React.Fragment>
            <button className={style.player_button} type="button" onClick={() => setOpen(true)}>
                <img src={PlayIcon} alt="play" />
            </button>
            <Modal
                aria-labelledby="close-modal-title"
                aria-describedby="modal-desc"
                open={open}
                onClose={(_event, reason) => {
                    setOpen(false);
                }}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: "rgba(42, 42, 42, 0.6)"

                }}
            >
                <Sheet
                    variant="outlined"
                    sx={{
                        width: "100%",
                        maxWidth: 500,
                        borderRadius: 'md',
                        p: 3,
                        boxShadow: 'lg',
                    }}
                >
                    <ModalClose variant="outlined" size='sm' sx={{
                        borderRadius: "50%", border: "none", top: 'calc(-1/6 * var(--IconButton-size))',
                        right: 'calc(-1/6 * var(--IconButton-size))',
                    }} />

                    <iframe width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/gUxos0WDAEE"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen>
                    </iframe>
                </Sheet>
            </Modal>
        </React.Fragment>
    );
}