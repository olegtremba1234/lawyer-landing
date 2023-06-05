import * as React from 'react';
import Button from '@mui/joy/Button';

const Style = {
    width: "236px",
    height: "58px",
    background: "#784F33",
    borderRadius: "5px",

    fontFamily: 'Open Sans',
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "14px",
    lineHeight: "28px",

    textAlign: "center",
    letterSpacing: "0.2px",
    color: "#FFFFFF",
}

export default function SolidButton({ text }) {
    return (
        <Button variant="solid" sx={Style}>{text}</Button>
    );
}