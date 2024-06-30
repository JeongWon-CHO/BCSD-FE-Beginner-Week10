import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './index.jsx';
import Header from './component/Header.jsx';
import Category from './component/Category.jsx';
import Detail from './component/Detail.jsx';
import './App.css';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Main />

        <Routes>
          <Route path="/category/all" element={<Category category="all" />} />
          <Route path="/category/chicken" element={<Category category="chicken" />} />
          <Route path="/category/pizza" element={<Category category="pizza" />} />

          <Route path={"/category/:categoryId/:itemId"} element={<Detail />} />

        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
