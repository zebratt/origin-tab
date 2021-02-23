import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RouterContainer } from '@/routes';
import Sidebar from '../sidebar';

const Scaffold = () => {
  return (
    <BrowserRouter>
      <div className="bg-grey-1 flex">
        <Sidebar />
        <div className="flex-1 p-4 max-h-screen overflow-scroll">
          <RouterContainer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Scaffold;
