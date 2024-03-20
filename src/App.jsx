import { useState } from "react";
import Header from "./Header";
import SearchItem from "./SearchItem";
import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import { DataProvider } from "./context/DataContext";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <DataProvider>
        <Header title="Grocery List" />
        <AddItem />
        <SearchItem search={search} setSearch={setSearch} />
        <Content search={search} />
        <Footer search={search} />
      </DataProvider>
    </div>
  );
}

export default App;
