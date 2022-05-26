import React from "react";
import Tick from "../../assets/VectorTick.png";
import Cross from "../../assets/VectorCross.png";
import "./Table.css";

const Table = () => {
  return (
    <>
      <div className="TableTitle">Compare our car insurance cover</div>
      <table class="content-table">
        <thead>
          <tr>
            <th scope="row"></th>
            <th>Third party</th>
            <th>Third party, Fire & Theft</th>
            <th>Comprehensive</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Vehicle removal</th>
            <td>
              <img src={Tick} alt=""></img>
            </td>
            <td>
              <img src={Tick} alt=""></img>
            </td>
            <td>
              <img src={Tick} alt=""></img>
            </td>
          </tr>
          <tr>
            <th scope="row">Legal Liability of up to $200,00,000</th>
            <td>
              <img src={Tick} alt=""></img>
            </td>
            <td>
              <img src={Tick} alt=""></img>
            </td>
            <td>
              <img src={Tick} alt=""></img>
            </td>
          </tr>
          <tr>
            <th scope="row">Theft or illegal conversion</th>

            <td>
              <img src={Cross} alt=""></img>
            </td>
            <td>
              <img src={Tick} alt=""></img>
            </td>
            <td>
              <img src={Tick} alt=""></img>
            </td>
          </tr>
          <tr>
            <th scope="row">Tire damage</th>

            <td>
              <img src={Cross} alt=""></img>
            </td>
            <td>
              <img src={Tick} alt=""></img>
            </td>
            <td>
              <img src={Tick} alt=""></img>
            </td>
          </tr>
          <tr>
            <th scope="row">Accidental loss or famage to your car</th>

            <td>
              <img src={Cross} alt=""></img>
            </td>
            <td>
              <img src={Cross} alt=""></img>
            </td>
            <td>
              <img src={Tick} alt=""></img>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
