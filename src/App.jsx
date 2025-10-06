import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Posts from './pages/Posts';
import PostDetail from './pages/PostDetail';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl mx-auto py-8'>
            <Routes>
              <Route path='/' element={<Posts />} />
              <Route path='/posts/:id' element={<PostDetail />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </div>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
