import React from "react";
import { useState, useEffect } from "react";

const Api = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    //const res=await axios.get("");
    const mainData = await res.json();
    setData(mainData);
    // return mainData;
    // console.log(mainData);
  };
  useEffect(() => {
    getData();
  }, []);
  //   console.log(getData());
  return (
    <>
      <h1>I am from Api showing in Table</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Id </th>
            <th>Name </th>
            <th>UserName </th>
            <th>Email </th>
            <th>Address </th>
          </tr>
        </thead>
        <tbody>
          {data.map((cval) => {
            return (
              <tr>
                <td>{cval.id}</td>
                <td>{cval.name}</td>
                <td>{cval.username}</td>
                <td>{cval.email}</td>
                <td>
                  {cval.address.street},{cval.address.city},
                  {cval.address.zipcode}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Api;
