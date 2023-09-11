"use client";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function BookingForm() {
  return (
    <div className="bg-green-100 opacity-80 w-[80%] py-10 rounded-2xl flex flex-col gap-y-6 items-center">
      <div className="flex flex-row gap-8 items-center w-[80%]">
        <TextField label="First Name" variant="outlined" />
        <TextField label="Last Name" variant="outlined" />
        <TextField label="Identity Card Number" variant="outlined" />
      </div>
      <div className="flex flex-row gap-8 items-center w-[80%]">
        <FormControl>
          <InputLabel id="hospital-label">Hospital To Book</InputLabel>
          <Select
            labelId="hospital-label"
            label="Hospital To Book"
            variant="outlined"
            className="w-[280px]"
          >
            <MenuItem value={0}>Chulalongkorn Hospital</MenuItem>
            <MenuItem value={1}>Thammasat University Hospital</MenuItem>
            <MenuItem value={2}>Rajavithi Hospital</MenuItem>
          </Select>
        </FormControl>
        <div className="text-slate-950 text-lg">Reservation Date</div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker className="w-[320px]" />
        </LocalizationProvider>
      </div>
    </div>
  );
}
