import * as React from 'react';
import Button from '@mui/joy/Button';

const Style = {
    border: "1px solid #D0A144",
    color: "#D0A144",
    width: "154px",
    height: "44px",
    borderRadius: "5px",

    fontFamily: 'Open Sans',
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "14px",
    lineHeight: "24px",

    textAlign: "center",
    letterSpacing: "0.2px",
}

export default function OutlinedButton({ text }) {
    return (
        <Button variant="outlined" sx={Style}>{text}</Button>
    );
}
