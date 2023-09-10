import React from "react";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";


export const DocView = () => {
    const doctors = [
        {
          firstName: "John",
          lastName: "Doe",
          phone: "123-456-7890",
          email: "john.com",
          website: "www.example.com",
          address: "123 Main St",
          specialization: "Cardiologist",
          experience: "10 years",
          feesPerCunsaltation: "$150",
          status: "Active",
          timings: "9:00 AM - 5:00 PM",
        },
        {
          firstName: "Jane",
          lastName: "Smith",
          phone: "987-654-3210",
          email: "jane.com",
          website: "www.janesmith.com",
          address: "456 Elm St",
          specialization: "Dermatologist",
          experience: "8 years",
          feesPerCunsaltation: "$120",
          status: "Active",
          timings: "10:00 AM - 6:00 PM",
        },
        {
          firstName: "David",
          lastName: "Johnson",
          phone: "555-123-4567",
          email: "david.com",
          website: "www.davidjohnson.com",
          address: "789 Oak St,",
          specialization: "Orthopedic Surgeon",
          experience: "12 years",
          feesPerCunsaltation: "$180",
          status: "Active",
          timings: "8:00 AM - 4:00 PM",
        },
        // Add more doctor data here as needed
      ];
      

  return (
    <Layout>
      <div>
        <h1 className="text-center my-5" style={{ fontSize: "2rem" }}>
          Doctor Details
          <Link to="/AddDoc">
          <button className="btn btn-success">
        Add Doctor
      </button>
      </Link>
        </h1>

        <table
          className="w-full text-sm text-left text-gray-500 dark:text-gray-400"
          style={{ backgroundColor: "transparent", marginBottom: "1.5rem" }}
        >
          <thead className="text-xs text-white uppercase bg-black dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                First Name
              </th>
              <th scope="col" className="px-6 py-3">
                Last Name
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Website
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                Specialization
              </th>
             

             
             
              <th scope="col" className="px-6 py-3">
                Action
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
              >
                <td className="px-6 py-4">{doctor.firstName}</td>
                <td className="px-6 py-4">{doctor.lastName}</td>
                <td className="px-6 py-4">{doctor.phone}</td>
                {/* <td className="px-6 py-4">{doctor.email}</td> */}
        
                <td className="px-6 py-4">{doctor.address}</td>
                <td className="px-6 py-4">{doctor.status}</td>
                <td className="px-6 py-4">{doctor.feesPerCunsaltation}</td>
                <td className="px-6 py-4">{doctor.status}</td>
                <td className="px-6 py-4">
                <button
                  className="btn btn-warning"
                 
                >
                  Edit
                </button>
              </td>
              <td className="px-6 py-4">
                <button
                  className="btn btn-danger"
                 
                >
                  Delete
                </button>
              </td>
               
              </tr>
            ))}
          </tbody>
        </table>

      
      </div>
      
    </Layout>
  );
};

export default DocView;
