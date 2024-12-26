import React, { useEffect, useState } from "react";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => response.json())
      .then((data) => setUser(data.results[0]))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="text-xl font-bold text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 p-6">
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden transform transition duration-500 hover:scale-105">
        {/* Header Section */}
        <div className="relative">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/008/804/954/small/abstract-background-illustration-yellow-abstract-background-with-simple-shape-vector.jpg"
            alt="Background"
            className="w-full h-44 object-cover"
          />
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-indigo-500 rounded-full blur-lg"></div>
              <img
                src={user.picture.large}
                alt={`${user.name.first} ${user.name.last}`}
                className="relative w-32 h-32 rounded-full border-4 border-white shadow-lg z-10"
              />
            </div>
          </div>
        </div>

        {/* User Info Section */}
        <div className="p-6 pt-20 text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            {user.name.first} {user.name.last}
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            {user.location.city}, {user.location.country}
          </p>

          <div className="flex justify-center gap-4 my-3">
            <div className="px-4 py-1 bg-gradient-to-br from-green-400 to-green-600 text-white text-sm rounded-full shadow">
              {user.gender}
            </div>
            <div className="px-4 py-1 bg-gradient-to-br from-blue-400 to-blue-600 text-white text-sm rounded-full shadow">
              Age: {user.dob.age}
            </div>
          </div>

          <div className="flex items-center justify-between text-gray-500 text-sm mt-4">
            <div className="flex flex-col items-center">
              <span className="text-lg font-semibold text-gray-800">
                {user.registered.age}
              </span>
              <span>Years Active</span>
            </div>
            <div className="h-10 border-l border-gray-300"></div>
            <div className="flex flex-col items-center">
              <span className="text-lg font-semibold text-gray-800">
                {user.dob.age}
              </span>
              <span>Age</span>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-100 px-6 py-4">
          <p className="text-sm text-gray-600 mb-2">
            <strong>Email:</strong> {user.email}
          </p>
          <p className="text-sm text-gray-600 mb-2">
            <strong>Phone:</strong> {user.phone}
          </p>
          <p className="text-sm text-gray-600 mb-4">
            <strong>Cell:</strong> {user.cell}
          </p>
          <button className="w-full py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg shadow-md hover:shadow-xl hover:from-purple-600 hover:to-indigo-600 transition-all">
            View Full Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
