// import React from 'react'

import { CustomerForm } from "../components/customer-form.js";
import Sidebar from "../components/sidebar.js";

export const Home = () => {
  return (
    <div className="w-full h-full">
      <Sidebar />
      <CustomerForm />
    </div>
  );
};
