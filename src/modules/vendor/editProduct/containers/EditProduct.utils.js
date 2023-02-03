import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions, selectors } from 'store';

export const useEditProduct = (productId) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [loading, setLoading] = useState(false);
  const { editOneProduct, getSingleProduct } = actions.products;
  const dispatch = useDispatch();
  const singleProduct = useSelector(selectors.products.getSingleProduct);
  useEffect(() => {
    setTimeout(() => {
      dispatch(getSingleProduct(productId));
    }, 500);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);

  const handleCloseSnackbar = (_, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };
  const onSubmit = (initialProductValues) => {
    dispatch(editOneProduct(initialProductValues));
    setTimeout(() => {
      setOpenSnackbar(true);
    }, 300);
  };

  return {
    onSubmit,
    openSnackbar,
    setOpenSnackbar,
    handleCloseSnackbar,
    loading,
    singleProduct,
  };
};
