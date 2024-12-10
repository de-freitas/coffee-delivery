import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from "react";
import { COFFEES } from "../constants/constants";

interface CoffeesContextProviderProps {
  children: ReactNode;
}

export interface Coffee {
  name: string;
  img: string;
  types: string[];
  desc: string;
  price: number;
  quantity: number;
}

enum OperationTypes {
  INCREASE_QUANTITY = "INCREASE_QUANTITY",
  DECREASE_QUANTITY = "DECREASE_QUANTITY",
  REMOVE_SELECTED_COFFEE = "REMOVE_SELECTED_COFFEE",
}

interface Address {
  cep?: string | null;
  street?: string | null;
  neighborhood?: string | null;
  number?: string | null;
  complement?: string;
  state?: string | null;
  city?: string | null;
}

interface PaymentMethod {
  paymentMethod: string | null;
}

interface PaymentData {
  address: Address;
  paymentMethod: PaymentMethod;
}

interface CoffeesContextType {
  coffees: Coffee[];
  manageQuantity: (selected: Coffee, operation: OperationTypes) => void;
  OperationTypes: typeof OperationTypes;
  totalQuantityOfSelectedCoffees: number;
  paymentData: PaymentData;
  updatePaymentMethod: (paymentMethod: PaymentMethod) => void;
  updateAddress: (paymentAddress: Address) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const CoffeesContext = createContext<CoffeesContextType>(
  {} as CoffeesContextType
);

interface ActionProps {
  type: OperationTypes;
  payload: { data: Coffee };
}

export function CoffeesContexProvider({
  children,
}: CoffeesContextProviderProps) {
  const [coffees, dispatch] = useReducer(
    (state: Coffee[], action: ActionProps) => {
      switch (action.type) {
        case OperationTypes.INCREASE_QUANTITY: {
          const coffeeIndex = state.findIndex(
            (eachCoffee) => eachCoffee.name === action.payload.data.name
          );

          if (coffeeIndex === -1) {
            return state;
          } else {
            return state.map((eachCoffee, index) =>
              coffeeIndex === index
                ? { ...eachCoffee, quantity: eachCoffee.quantity + 1 }
                : eachCoffee
            );
          }
        }

        case OperationTypes.DECREASE_QUANTITY: {
          const coffeeIndex = state.findIndex(
            (eachCoffee) => eachCoffee.name === action.payload.data.name
          );

          if (coffeeIndex === -1) {
            return state;
          } else {
            return state.map((eachCoffee, index) =>
              coffeeIndex === index
                ? {
                    ...eachCoffee,
                    quantity: Math.max(0, eachCoffee.quantity - 1),
                  }
                : eachCoffee
            );
          }
        }

        case OperationTypes.REMOVE_SELECTED_COFFEE: {
          const coffeeIndex = state.findIndex(
            (eachCoffe) => eachCoffe.name === action.payload.data.name
          );

          if (coffeeIndex === -1) {
            return state;
          } else {
            return state.map((eachCoffee, index) =>
              coffeeIndex === index
                ? { ...eachCoffee, quantity: 0 }
                : eachCoffee
            );
          }
        }

        default:
          return state;
      }
    },
    COFFEES
  );

  const [paymentData, setPaymentData] = useState<PaymentData>({
    address: {
      cep: null,
      street: null,
      neighborhood: null,
      number: null,
      state: "SP",
      city: "São Paulo",
    },
    paymentMethod: {
      paymentMethod: null,
    },
  });

  const totalQuantityOfSelectedCoffees = coffees.reduce(
    (acc, coffee) => acc + coffee.quantity,
    0
  );

  useEffect(() => {
    const selectedCoffees = coffees.filter(
      (eachCoffee) => eachCoffee.quantity > 0
    );

    if (selectedCoffees.length > 0) {
      localStorage.setItem(
        "@coffee-delivery:selectedCoffees",
        JSON.stringify(selectedCoffees)
      );
    } else {
      localStorage.removeItem("@coffee-delivery:selectedCoffees");
    }
  }, [coffees]);

  function manageQuantity(selected: Coffee, operation: OperationTypes) {
    if (operation === OperationTypes.INCREASE_QUANTITY) {
      dispatch({
        type: OperationTypes.INCREASE_QUANTITY,
        payload: {
          data: selected,
        },
      });
    } else if (operation === OperationTypes.DECREASE_QUANTITY) {
      dispatch({
        type: OperationTypes.DECREASE_QUANTITY,
        payload: {
          data: selected,
        },
      });
    } else if (operation === OperationTypes.REMOVE_SELECTED_COFFEE) {
      dispatch({
        type: OperationTypes.REMOVE_SELECTED_COFFEE,
        payload: {
          data: selected,
        },
      });
    }
  }

  function updatePaymentMethod(paymentMethod: PaymentMethod) {
    setPaymentData((state) => ({
      ...state,
      paymentMethod,
    }));
  }
  function updateAddress(address: Address) {
    setPaymentData((state) => ({
      ...state,
      address,
    }));
  }

  return (
    <CoffeesContext.Provider
      value={{
        coffees,
        manageQuantity,
        OperationTypes,
        totalQuantityOfSelectedCoffees,
        paymentData,
        updatePaymentMethod,
        updateAddress,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  );
}
