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

interface CoffeesContextType {
  coffees: Coffee[];
  manageQuantity: (selected: Coffee, operation: OperationTypes) => void;
  OperationTypes: typeof OperationTypes;
  totalQuantityOfSelectedCoffees: number;
  location: string;
  updateLocation: (newLocation: string) => void;
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
  //const [coffees, setCoffees] = useState(COFFEES);

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

  const [location, setLocation] = useState("São Paulo, SP");

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
      //increaseQuantity(selected);
    } else if (operation === OperationTypes.DECREASE_QUANTITY) {
      dispatch({
        type: OperationTypes.DECREASE_QUANTITY,
        payload: {
          data: selected,
        },
      });

      //decreaseQuantity(selected.name);
    } else if (operation === OperationTypes.REMOVE_SELECTED_COFFEE) {
      dispatch({
        type: OperationTypes.REMOVE_SELECTED_COFFEE,
        payload: {
          data: selected,
        },
      });
      //removeSelectedCoffee(selected.name);
    }
  }

  // function increaseQuantity(coffee: Coffee) {
  // const coffeeIndex = coffees.findIndex(
  //   (eachCoffee) => eachCoffee.name === coffee.name
  // );

  // if (coffeeIndex === -1) {
  //   return null;
  // } else {
  //   return setCoffees((state) =>
  //     state.map((eachCoffee, index) =>
  //       coffeeIndex === index
  //         ? { ...eachCoffee, quantity: eachCoffee.quantity + 1 }
  //         : eachCoffee
  //     )
  //   );
  // }
  // }

  // function decreaseQuantity(coffeeName: string) {
  //   const coffeeIndex = coffees.findIndex(
  //     (eachCoffee) => coffeeName === eachCoffee.name
  //   );

  //   if (coffeeIndex === -1) {
  //     return null;
  //   } else {
  //     setCoffees((state) =>
  //       state.map((eachCoffee, index) =>
  //         coffeeIndex === index
  //           ? { ...eachCoffee, quantity: Math.max(0, eachCoffee.quantity - 1) }
  //           : eachCoffee
  //       )
  //     );
  //   }
  // }

  // function removeSelectedCoffee(coffeeName: string) {
  //   const coffeeIndex = coffees.findIndex(
  //     (eachCoffe) => coffeeName === eachCoffe.name
  //   );

  //   if (coffeeIndex === -1) {
  //     return null;
  //   } else {
  //     setCoffees((state) =>
  //       state.map((eachCoffee, index) =>
  //         coffeeIndex === index ? { ...eachCoffee, quantity: 0 } : eachCoffee
  //       )
  //     );
  //   }
  // }

  function updateLocation(newLocation: string) {
    setLocation(() => newLocation);
  }

  return (
    <CoffeesContext.Provider
      value={{
        coffees,
        manageQuantity,
        OperationTypes,
        totalQuantityOfSelectedCoffees,
        location,
        updateLocation,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  );
}
