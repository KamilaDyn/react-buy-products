import { useSelector } from 'react-redux';
import { selectors } from 'store';
import { useFormikContext } from 'formik';

interface Values {
  country: string;
  email: string;
  firstName: string;
  secondName: string;
  street: string;
  postCode: string;
  phone: string;
}

export const useSummary = () => {
  const shoppingListProducts = useSelector(
    selectors.shoppingList.getShoppingList
  );
  const { values } = useFormikContext<Values>();
  return {
    shoppingListProducts,
    values,
  };
};
