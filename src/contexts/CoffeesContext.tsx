import { createContext, ReactNode, useState } from "react";

interface CoffeesContextProviderProps {
  children: ReactNode;
}

export interface Coffee {
  name: string;
  img: string;
  price: number;
  quantity: number;
}

enum OperationTypes {
  ADD_COFFEE = "ADD_COFFEE",
  REMOVE_COFFEE = "REMOVE_COFFEE",
  REMOVE_SELECTED_COFFEE = "REMOVE_SELECTED_COFFEE",
}

interface CoffeesContextType {
  selectedCoffees: Coffee[];
  manageAmount: (selected: Coffee, operation: OperationTypes) => void;
  amountOfSelectedCoffees: number;
  OperationTypes: typeof OperationTypes;
}

// eslint-disable-next-line react-refresh/only-export-components
export const CoffeesContext = createContext<CoffeesContextType>(
  {} as CoffeesContextType
);

export function CoffeesContexProvider({
  children,
}: CoffeesContextProviderProps) {
  const [selectedCoffees, setSelectedCoffes] = useState<Coffee[]>([]);
  const amountOfSelectedCoffees = selectedCoffees.reduce((total, coffee) => {
    return total + (coffee.quantity || 0);
  }, 0);

  function manageAmount(selected: Coffee, operation: OperationTypes) {
    if (operation === OperationTypes.ADD_COFFEE) {
      addCoffee(selected);
    } else if (operation === OperationTypes.REMOVE_COFFEE) {
      removeCoffee(selected.name);
    } else if (operation === OperationTypes.REMOVE_SELECTED_COFFEE) {
      removeSelectedCoffee(selected.name);
    }
  }

  function addCoffee(coffee: Coffee) {
    setSelectedCoffes((state) => {
      const coffeeIndex = state.findIndex(
        (eachCoffee) => eachCoffee.name === coffee.name
      );

      if (coffeeIndex === -1) {
        return [...state, { ...coffee, quantity: 1 }];
      } else {
        return state.map((eachCoffee, index) =>
          coffeeIndex === index
            ? { ...eachCoffee, quantity: eachCoffee.quantity + 1 }
            : eachCoffee
        );
      }
    });
  }

  function removeCoffee(coffeeName: string) {
    setSelectedCoffes((state) => {
      return state
        .map((eachCoffee) =>
          eachCoffee.name === coffeeName
            ? { ...eachCoffee, quantity: (eachCoffee.quantity || 1) - 1 }
            : eachCoffee
        )
        .filter((eachCoffee) => eachCoffee.quantity && eachCoffee.quantity > 0);
    });
  }

  function removeSelectedCoffee(coffeeName: string) {
    setSelectedCoffes((state) => {
      return state.filter((coffee) => coffee.name != coffeeName);
    });
  }

  return (
    <CoffeesContext.Provider
      value={{
        selectedCoffees,
        manageAmount,
        amountOfSelectedCoffees,
        OperationTypes,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  );
}
