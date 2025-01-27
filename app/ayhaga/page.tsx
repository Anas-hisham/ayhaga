"use client";
import React, { useState, useEffect } from "react";
import Card from "./Card";

interface User {
  id: number;
  name: string;
  title: string;
}

const Page = () => {
  const [isBlack, setIsBlack] = useState(false);
  const [data, setData] = useState<User[]>([]);
  const [Number, setNumber] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const req = await fetch("https://jsonplaceholder.typicode.com/users", {
        // cache: "no-store",
        next: { revalidate: 10 },
      });
      const users: User[] = await req.json();
      setData(users.slice(0, Number));
    };

    fetchData();
  }, [Number]);

  function handle() {
    setNumber(Number + 1);
  }

  return (
    <div
      className=""
      style={{
        background: isBlack ? "black" : "white",
        color: isBlack ? "white" : "black",
      }}
    >
      <button
        onClick={() => setIsBlack(!isBlack)}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Toggle Background
      </button>

      <div>We have {Number}</div>
      <div className="mb-14">
        <Card isBlack={isBlack} handle={handle} />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {data.map((user) => (
          <div
            key={user.id}
            className="bg-red-800 text-center h-20 text-white duration-500 hover:-translate-y-2 hover:bg-red-950"
          >
            {user.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
