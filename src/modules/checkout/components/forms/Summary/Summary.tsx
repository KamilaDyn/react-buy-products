import { FC } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { StyledCard, useSumProductsPrice } from '../../shared';
import { useSummary } from './Summary.utils';

const Summary: FC = () => {
  const { shoppingListProducts, values } = useSummary();
  const {
    shoppingProductsPrice,
    deliveryPrice,
    deliveryType,
    isVoucherUsed,
    finalPrice,
  } = useSumProductsPrice();

  const { firstName, secondName, street, postCode, email, country, phone } =
    values;

  return (
    <StyledCard>
      <Typography variant="h2">Podsumowanie Twoich zakupów</Typography>
      {shoppingListProducts &&
        shoppingListProducts.map(({ id, count, name, price }) => (
          <Box key={id}>
            <Typography variant="h4">
              {count}&nbsp;x&nbsp;{name}
            </Typography>
            <Typography variant="h3" color="secondary">
              {price}
            </Typography>
          </Box>
        ))}
      <Divider />
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width={500}
      >
        <Typography variant="h4">Cena za produkty:</Typography>
        <Typography variant="h3" color="secondary">
          {shoppingProductsPrice}
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width={500}
      >
        <Typography variant="h4">Wybór sposobu distawy:</Typography>
        <Typography variant="h3" color="secondary">
          {deliveryType}
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width={500}
      >
        <Typography variant="h4">Cena za wysyłkę:</Typography>
        <Typography variant="h3" color="secondary">
          {deliveryPrice()}
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width={500}
      >
        <Typography variant="h4">Naliczony Rabat:</Typography>
        <Typography variant="h3" color="secondary">
          {isVoucherUsed ? '150,00' : 'brak'}
        </Typography>
      </Box>
      <Divider />
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width={500}
      >
        <Typography variant="h2">Razem do zapłaty:</Typography>
        <Typography variant="h2" color="primary">
          {finalPrice}
        </Typography>
      </Box>
      <Divider />
      <Box>
        <Typography variant="h3" color="secondary" align="left" py={3}>
          Adres do wysyłki
        </Typography>
        <Typography variant="h4" py={3}>
          Imię i Nazwisko {firstName}&nbsp;{secondName}
        </Typography>
        <Typography variant="h4" color="secondary" py={3}>
          Ulica: {street}&nbsp; Kod Pocztowy{postCode}
        </Typography>
        <Typography variant="h4" color="secondary" py={3}>
          Kraj: {country}
        </Typography>
        <Typography variant="h4" color="secondary" py={3}>
          Email: {email}{' '}
        </Typography>
        <Typography variant="h4" color="secondary" py={3}>
          Numer telefonu: {phone}
        </Typography>
      </Box>
    </StyledCard>
  );
};

export default Summary;
