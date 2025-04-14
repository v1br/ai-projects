// import React from 'react'

import { CustomerForm } from "../components/customer-form.tsx";
import Sidebar from "../components/sidebar.tsx";

export const Home = () => {
  return (
    <div className="w-full h-full">
      <Sidebar />
      <CustomerForm />
    </div>
  );
};
