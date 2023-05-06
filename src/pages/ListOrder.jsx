import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function ListOrder() {
  const navigate = useNavigate();
  const [pageList, setPageList] = useState("");

  const handlePageListChange = (e) => {
    setPageList(e.target.value);
  };
  return (
    <>
      <Navbar />
      {/* CONTENT */}

      <div className="mx-40">
        {/* DROPDOWN */}
        <div className="my-10">
          <select
            onChange={handlePageListChange}
            className="flex select select-sm w-32 bg-light-gray"
          >
            <option disabled selected>
              List
            </option>
            <option value="order">My Order</option>
            <option value="offer">My Offer</option>
          </select>
        </div>
        {/* TABEL */}
        <div>
          <div className="mx-5 overflow-x-auto">
            <table className="table w-full">
              {/* head */}
              <thead>
                {pageList === "order" ? (
                  <tr>
                    <th className="bg-light-gray border rounded">No</th>
                    <th className="bg-light-gray border">Vendor</th>
                    <th className="bg-light-gray border">Order</th>
                    <th className="bg-light-gray border">Start Project</th>
                    <th className="bg-light-gray border">End Project</th>
                    <th className="bg-light-gray border">Status</th>
                    <th className="bg-light-gray border rounded">Action</th>
                  </tr>
                ) : (
                  <tr>
                    <th className="bg-light-gray border rounded">No</th>
                    <th className="bg-light-gray border">Client</th>
                    <th className="bg-light-gray border">Order</th>
                    <th className="bg-light-gray border">Start Project</th>
                    <th className="bg-light-gray border">End Project</th>
                    <th className="bg-light-gray border">Status</th>
                    <th className="bg-light-gray border rounded">Action</th>
                  </tr>
                )}
              </thead>
              <tbody>
                {pageList === "order" ? (
                  <tr className="hover">
                    <th className="border">1</th>
                    <td className="border">Order</td>
                    <td className="text-list-color border border-neutral-900">
                      Quality Control Specialist
                    </td>
                    <td className="border">20 December 2020</td>
                    <td className="border">28 Februari 2021</td>
                    <td className="border">Waiting Accept</td>
                    <td className="border">Blue</td>
                  </tr>
                ) : (
                  <tr className="hover">
                    <th className="border">1</th>
                    <td className="border">Offer</td>
                    <td className="text-list-color border border-neutral-900">
                      Quality Control Specialist
                    </td>
                    <td className="border">20 December 2020</td>
                    <td className="border">28 Februari 2021</td>
                    <td className="border">Waiting Accept</td>
                    <td className="border">Blue</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListOrder;
