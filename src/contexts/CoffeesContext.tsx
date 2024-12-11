import { createContext, ReactNode, useReducer, useState } from "react";
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
  CLEAR = "CLEAR",
}

interface Address {
  cep?: string | null;
  street?: string | null;
  neighborhood?: string | null;
  number?: string | null;
  complement?: string | null;
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
  function initializeCoffees() {
    const storadeCoffees = localStorage.getItem(
      "@coffee-delivery:selectedCoffees"
    );
    const parsedCoffees: Coffee[] = storadeCoffees
      ? JSON.parse(storadeCoffees)
      : [];

    const mergeQuantity = COFFEES.map((coffeeFromConstants) => {
      const matchingCoffee = parsedCoffees.find(
        (storedCoffee) => storedCoffee.name === coffeeFromConstants.name
      );

      return {
        ...coffeeFromConstants,
        quantity: matchingCoffee ? matchingCoffee.quantity : 0,
      };
    });

    return mergeQuantity;
  }

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
            const newState = state.map((eachCoffee, index) =>
              coffeeIndex === index
                ? { ...eachCoffee, quantity: eachCoffee.quantity + 1 }
                : eachCoffee
            );

            const filterNotEmpty = newState.filter(
              (eachCoffee) => eachCoffee.quantity > 0
            );
            localStorage.setItem(
              "@coffee-delivery:selectedCoffees",
              JSON.stringify(filterNotEmpty)
            );

            return newState;
          }
        }

        case OperationTypes.DECREASE_QUANTITY: {
          const coffeeIndex = state.findIndex(
            (eachCoffee) => eachCoffee.name === action.payload.data.name
          );

          if (coffeeIndex === -1) {
            return state;
          }

          const newState: Coffee[] = state.map((eachCoffee, index) =>
            coffeeIndex === index
              ? {
                  ...eachCoffee,
                  quantity: Math.max(0, eachCoffee.quantity - 1),
                }
              : eachCoffee
          );

          const filterNotEmpty = newState.filter(
            (eachCoffee) => eachCoffee.quantity > 0
          );

          localStorage.setItem(
            "@coffee-delivery:selectedCoffees",
            JSON.stringify(filterNotEmpty)
          );

          return newState;
        }

        case OperationTypes.REMOVE_SELECTED_COFFEE: {
          const coffeeIndex = state.findIndex(
            (eachCoffe) => eachCoffe.name === action.payload.data.name
          );

          if (coffeeIndex === -1) {
            return state;
          }

          const newState = state.map((eachCoffee, index) =>
            coffeeIndex === index ? { ...eachCoffee, quantity: 0 } : eachCoffee
          );

          const filterNotEmpty = newState.filter(
            (eachCoffee) => eachCoffee.quantity > 0
          );

          localStorage.setItem(
            "@coffee-delivery:selectedCoffees",
            JSON.stringify(filterNotEmpty)
          );

          return newState;
        }

        case OperationTypes.CLEAR: {
          const newState = state.map((eachCoffee) => ({
            ...eachCoffee,
            quantity: 0,
          }));
          localStorage.removeItem("@coffee-delivery:selectedCoffees");

          console.log("entrou no Clear");
          return newState;
        }

        default:
          return state;
      }
    },
    [],
    initializeCoffees
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
    } else if (operation === OperationTypes.CLEAR) {
      dispatch({
        type: OperationTypes.CLEAR,
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
