import React, { useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import d1 from './assests/d1.jpg'
import d3 from './assests/d3.jpg'

export const HomePage = () => {
  const getUserData = async () => {
    try {
      const res = await axios.post(
        "/api/v1/user/getUserData",
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  /* useEffect(() => {}, []); */

  return (
    <div>

      <Layout>
   
    <div className="bg-gray-100  flex items-center justify-center">
      
        <div className="container mx-auto p-4">
          <h1 className="text-4xl font-bold mb-4">Vision Care System</h1>
          <p className="text-gray-600 mb-8">
            Welcome to our vision care system. Your vision matters to us.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Replace with your dashboard cards or components */}
            <div className="bg-white rounded-lg shadow-md p-4">
              {/* Card content */}
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              {/* Card content */}
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              {/* Card content */}
            </div>
          </div>
        </div>
      
    </div>
 
      </Layout>
     
    </div>
  );
};

export default HomePage;
