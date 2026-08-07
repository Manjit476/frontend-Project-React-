import React from "react";

function Card({ username ,btnText="view" }) {
  return (
    <div className="w-60 rounded-xl overflow-hidden bg-gray-900 shadow-lg mb-4">
      <img
        src="https://media1.giphy.com/media/z8n8dWgQ0mgEIyzlmV/giphy.gif?cid=790b7611a5ba988db1bc7457636dd163c28af6f6dbc84a77&rid=giphy.gif&ct=g"
        alt="Giphy"
        className="w-full h-40 object-cover"
      />

      <div className="glass px-5 py-4">
        <h1 className="text-xl font-bold font-mono text-white">
          {username}
        </h1>

        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          {btnText}
        </button>
      </div>
    </div>
  );
}

export default Card;