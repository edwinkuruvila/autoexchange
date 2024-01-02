import React from "react";
import styles from "./page_layout.module.css";


const UsersPage =  async () => {
  return (
    <div className="overflow-x-auto">
      <h1 className={styles.head}> Showing users information </h1>
      <table className="table table-bordered" >
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {/* first element */}
          <tr className="hover">
            <th>1</th>
            <td>Edwin Kuruvila</td>
            <td>edwinkuruvila10@gmail.com</td>
            <td>edwinkuruvila</td>
            <td>ihjhheii</td>
          </tr>
        </tbody>
        <tbody>
          {/* second element */}
          <tr className="hover">
            <th>2</th>
            <td>Khoi</td>
            <td>khoi@gmail.com</td>
            <td>khoi1233</td>
            <td>khoi1233</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
