import { Box, Grid, Typography } from '@mui/material';
import { Fragment } from 'react';
import {
  RegistrationAccountDetails,
  RegistrationAddressDetails,
  RegistrationUserDetails,
} from '@/types/registration';

const ReviewSection = ({
  title,
  data,
}: {
  title: string;
  data:
    | RegistrationAddressDetails
    | RegistrationUserDetails
    | RegistrationAccountDetails;
}) => (
  <Box sx={{ mb: 3 }}>
    <Typography variant="h6" sx={{ mb: 1 }}>
      {title}
    </Typography>
    <Grid container spacing={2}>
      {Object.entries(data).map(([key, value]) => (
        <Fragment key={key}>
          <Grid item xs={4} sm={3}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontWeight: 'bold' }}
            >
              {key.charAt(0).toUpperCase() +
                key.slice(1).replace(/([A-Z])/g, ' $1')}
            </Typography>
          </Grid>
          <Grid item xs={8} sm={9}>
            <Typography variant="body2">
              {key === 'password' ? '••••••••' : value}
            </Typography>
          </Grid>
        </Fragment>
      ))}
    </Grid>
  </Box>
);

export default ReviewSection;
