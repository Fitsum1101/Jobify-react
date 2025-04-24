import React, { createContext } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import BooksNew from "./compenets/books/BooksNew";
import Book from "./compenets/books/Book";
import Book1 from "./compenets/books/Book1";

const App = () => {

  return (
      <Routes>
        <Route path="/" element={<h1>home page</h1>} />
        <Route path="/books" element={<Book1 />}>
          <Route index="true" element={<h1>book homepage</h1>} />
          <Route path="new" element={<BooksNew />} />
          <Route path=":id" element={<Book />} />{" "}
        </Route>
      </Routes>
  );
};

export default App;
