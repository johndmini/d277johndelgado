import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

interface FormData {
  name: string;
  email: string;
  verifyEmail: string;
}

function EmailVerificationForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    verifyEmail: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.email !== formData.verifyEmail) {
      setErrors({ ...errors, verifyEmail: 'Email addresses do not match' });
    } else {
      console.log('Form submitted:', formData);
      setSubmitted(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: 400 }}>
        <Typography variant="h4" gutterBottom sx={{ mt: 2 }}>
          Fill out form to let me know you actually visited my website!
        </Typography>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          type="email"
          label="Email Address"
          name="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          type="email"
          label="Verify Email Address"
          name="verifyEmail"
          value={formData.verifyEmail}
          onChange={handleChange}
          margin="normal"
          required
          error={!!errors.verifyEmail}
          helperText={errors.verifyEmail}
        />
        <Button type="submit" variant="contained" color="primary" disabled={submitted}>
          Submit
        </Button>
      </Box>
    </form>
  );
}

export default EmailVerificationForm;
