"use client";

import postData from "../action";

export default function Form() {
  return (
    <form
      action={async (formData) => {
        await postData(formData);
      }}
      className="p-6 fixed bottom-0 left-0 w-full bg-white"
    >
      <div className="flex">
        <input
          type="text"
          name="message"
          placeholder="Type your message..."
          className="flex-grow py-2 px-4 outline-none"
        />
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg"
        >
          Send
        </button>
      </div>
    </form>
  );
}