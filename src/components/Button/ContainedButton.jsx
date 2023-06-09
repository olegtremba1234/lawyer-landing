import * as React from 'react';
import Button from '@mui/material/Button';

// const Style = {
//     minWidth: "182px",
//     minHeight: "48px",
//     background: "#784F33",
//     borderRadius: "37px",
//     fontFamily: "Open Sans",
//     fontSize: "14px",
//     fontWeight: 700,
//     padding: "10px 36px",
//     marginBottom: "20px",
// }



export default function ContainedButton({ text, styled }) {
    return (
        <>
            <Button variant="contained" sx={styled}>{text}</Button >
        </>
    )
}
