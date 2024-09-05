import React from "react";
import { Snackbar, Alert } from "@mui/material";

const Notification = ({ open, message, onClose, severity = "success" }) => {
    return (
        <Snackbar
            open={open}
            autoHideDuration={2000}
            onClose={onClose}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
            <Alert onClose={onClose} severity={severity} sx={{ width: "100%" }}>
                {message}
            </Alert>
        </Snackbar>
    );
};

export default Notification;
