import React from "react";
import {
  FiArrowUpRight,
  FiDollarSign,
  FiMoreHorizontal,
  FiUser,
} from "react-icons/fi";

const TopCol = () => {
  return (
    <div className="col-span-12 p-4 rounded border border-stone-300">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="flex items-center gap-1.5 font-medium">
          <FiDollarSign /> Top Collaborateurs
        </h3>
        <button className="text-sm text-violet-500  rounded hover:underline">
          See All
        </button>
      </div>
      <table className="w-full table-auto">
        <TableHead />
        <tbody>
          <TableRow
            CID="14625"
            FIRST="Dyaa"
            LAST="biad"
            REV={5000023}
            ORDER={1}
          />
          <TableRow
            CID="945512"
            FIRST="younes"
            LAST="bouhadda"
            REV={5000023}
            ORDER={2}
          />
          <TableRow
            CID="1462c5"
            FIRST="mohamed"
            LAST="gsxhb"
            REV={500563}
            ORDER={3}
          />
          <TableRow
            CID="945512"
            FIRST="younes"
            LAST="bouhadda"
            REV={5000023}
            ORDER={4}
          />
          <TableRow
            CID="1462c5"
            FIRST="mohamed"
            LAST="gsxhb"
            REV={500563}
            ORDER={5}
          />
          <TableRow
            CID="945512"
            FIRST="younes"
            LAST="bouhadda"
            REV={5000023}
            ORDER={6}
          />
        </tbody>
      </table>
    </div>
  );
};

const TableHead = () => {
  return (
    <thead>
      <tr className="text-sm font-normal text-stone-500">
        <th className="text-start p-1.5">ID</th>
        <th className="text-start p-1.5">FN</th>
        <th className="text-start p-1.5">LN</th>
        <th className="text-start p-1.5">Revenue</th>
        <th className="w-8"></th>
      </tr>
    </thead>
  );
};

const TableRow = ({
  CID,
  FIRST,
  LAST,
  REV,
  ORDER,
}: {
  CID: string;
  FIRST: string;
  LAST: string;
  REV: number;
  ORDER: number;
}) => {
  return (
    <tr className={ORDER % 2 ? "bg-stone-200 text-sm" : "text-sm"}>
      <td className="p-1.5">
        <a
          href="#"
          className="text-violet-500 underline flex items-center gap-1"
        >
          {CID} <FiArrowUpRight />
        </a>
      </td>
      <td className="p-1.5">{FIRST}</td>
      <td className="p-1.5">{LAST}</td>
      <td className="p-1.5">{REV}</td>
      <td className="w-8">
        <button className="hover:bg-stone-200 transition-colors grid place-content-center rounded text-sm size-8">
          <FiMoreHorizontal />
        </button>
      </td>
    </tr>
  );
};

export default TopCol;
