import { FC } from 'react';
import { Grid } from '@mui/material';
import { Form } from 'formik';
import { StyledButton, SetProps } from '../shared';
import { AddressForm, PaymentForm, SumProductsForm, Summary } from '../forms';

function renderStepContent(step: number) {
  switch (step) {
    case 0:
      return <SumProductsForm activeStep={step} />;
    case 1:
      return <AddressForm activeStep={step} />;
    case 2:
      return <PaymentForm activeStep={step} />;
    case 3:
      return <Summary />;
    default:
      return <div>not found</div>;
  }
}

const CheckoutFormContent: FC<SetProps> = ({
  activeStep,
  setActiveStep,
  isLastStep,
}) => {
  return (
    <Form>
      {renderStepContent(activeStep)}
      <Grid container spacing={3}>
        <Grid item xs={6}>
          {activeStep !== 0 && (
            <StyledButton
              onClick={() => {
                setActiveStep(activeStep - 1);
              }}
              transparent
            >
              Wróć
            </StyledButton>
          )}
        </Grid>
        <Grid item xs={6}>
          <StyledButton type="submit">
            {isLastStep ? 'Potwierdź' : 'Dalej'}
          </StyledButton>
        </Grid>
      </Grid>
    </Form>
  );
};

export default CheckoutFormContent;
