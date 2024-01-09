import React from "react";

import { Alert, AlertColor, AlertTitle } from "@mui/material";

interface ToastProps {
    type: AlertColor | undefined;
    title: string;
    content: string;
}

export default function CustomToast(props: ToastProps) {
    return (
        <Alert severity={props.type}>
            <AlertTitle>{props.title}</AlertTitle>
            {props.content}
        </Alert>
    );
}