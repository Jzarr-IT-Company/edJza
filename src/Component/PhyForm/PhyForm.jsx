import React, { useEffect, useState } from "react";
import { useGlobalState } from "../../Context/Context";
import {
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

function PhyForm() {
  const { phyFormData, setPhysFormData } = useGlobalState();
  const [name, setName] = useState(phyFormData.name || "");
  const [email, setEmail] = useState(phyFormData.email || "");
  const [phone, setPhone] = useState(phyFormData.phone || "");
  const [address, setAddress] = useState(phyFormData.address || "");
  const [course, setCourse] = useState(phyFormData.course || "");
  const [laptop, setLaptop] = useState(phyFormData.laptop || "No");
  const [laptopType, setLaptopType] = useState(phyFormData.laptopType || "");
  const [proficiency, setProficiency] = useState(phyFormData.proficiency || "Beginner");
  const [qualification, setQualification] = useState(phyFormData.qualification || "");
  const [dob, setDob] = useState(phyFormData.dob || "");

  useEffect(() => {
    setPhysFormData({ name, email, phone, address, course, laptop, laptopType, proficiency, qualification, dob });
  }, [name, email, phone, address, course, laptop, laptopType, proficiency, qualification, dob]);

  return (
       <>
        <Typography variant="h5" gutterBottom>
        Physical Class Form
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth type="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth type="number" label="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Select Course</InputLabel>
              <Select value={course} onChange={(e) => setCourse(e.target.value)}>
                <MenuItem value="Web Development">Web Development</MenuItem>
                <MenuItem value="Graphic Designing">Graphic Designing</MenuItem>
                <MenuItem value="Digital Marketing">Digital Marketing</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Do you have a Laptop?</InputLabel>
              <Select value={laptop} onChange={(e) => setLaptop(e.target.value)}>
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {laptop === "Yes" && (
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Laptop Type</InputLabel>
                <Select value={laptopType} onChange={(e) => setLaptopType(e.target.value)}>
                  <MenuItem value="Windows">Windows</MenuItem>
                  <MenuItem value="Mac">Mac</MenuItem>
                  <MenuItem value="Linux">Linux</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          )}
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Computer Proficiency</InputLabel>
              <Select value={proficiency} onChange={(e) => setProficiency(e.target.value)}>
                <MenuItem value="Beginner">Beginner</MenuItem>
                <MenuItem value="Intermediate">Intermediate</MenuItem>
                <MenuItem value="Professional">Professional</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Last Qualification" value={qualification} onChange={(e) => setQualification(e.target.value)} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth type="date" label="Date of Birth" InputLabelProps={{ shrink: true }} value={dob} onChange={(e) => setDob(e.target.value)} />
          </Grid>
        </Grid>
       </>
     
  );
}

export default PhyForm;
