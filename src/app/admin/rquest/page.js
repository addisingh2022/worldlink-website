"use client";
import { useState } from "react";

export default function RequestsPage() {
  const [requests, setRequests] = useState([
    { id: 1, name: "Amit", email: "amit@example.com", message: "Battery issue" },
    { id: 2, name: "Sneha", email: "sneha@example.com", message: "Screen cracked" },
  ]);

  const removeRequest = (id) => {
    setRequests(requests.filter((r) => r.id !== id));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Contact Requests</h1>
      <div className="space-y-4">
        {requests.map((r) => (
          <div
            key={r.id}
            className="bg-white shadow rounded-lg p-4 flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{r.name} ({r.email})</p>
              <p className="text-gray-600">{r.message}</p>
            </div>
            <button
              onClick={() => removeRequest(r.id)}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
