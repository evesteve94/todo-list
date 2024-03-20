import ItemList from "./ItemList";
import { useContext } from "react";
import DataContext from "./context/DataContext";

const Content = ({ search }) => {
  //skickas inte längre som props - utan från DataContext, inget prop drilling
  const { items } = useContext(DataContext);
  const filteredItems = items.filter((item) =>
    item.item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      {filteredItems.length ? (
        <ItemList items={filteredItems} />
      ) : (
        <p style={{ marginTop: "2rem", textAlign: "center" }}>
          Your list is empty.
        </p>
      )}
    </main>
  );
};

export default Content;
