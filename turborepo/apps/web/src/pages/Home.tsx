// import React from 'react'

import { CustomerForm } from "../components/customer-form";
import Sidebar from "../components/sidebar";

export const Home = () => {
  return (
    <div className="w-full h-full">
      <Sidebar />
      <CustomerForm />
    </div>
  );
};
