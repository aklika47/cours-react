import React from "react";

export default function Posts({ data, liker }) {
  return (
    <div className="pt-4 pb-16 px-8 mb-4 bg-slate-200 rounded-md mt-8 relative">
      <h4 className="font-black uppercase">{data.title}</h4>
      <p className="text-blue-800 font-semibold">{data.description}</p>
      <p className="mt-2">{data.body}</p>
      <div className="absolute right-4 bottom-3 ">
        <button onClick={()=>liker(data)} className="py-2 px-4 bg-green-500 rounded-lg mr-4">like</button>
        <button className="py-2 px-4 bg-red-500 rounded-lg">delete</button>
      </div>
    </div>
  );
}
