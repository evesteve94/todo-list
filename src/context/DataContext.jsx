import { createContext, useEffect, useState } from "react";

const DataContext = createContext({});

//tar med children att provide till
export const DataProvider = ({ children }) => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppinglist")) || []
  );

  useEffect(() => {
    localStorage.setItem("shoppinglist", JSON.stringify(items));
  }, [items]);

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };

  //returnar allt som ska skickas
  return (
    <DataContext.Provider
      value={{
        items,
        setItems,
        handleCheck,
        handleDelete,
      }}
    >
      {" "}
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
