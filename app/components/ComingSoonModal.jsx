import React from "react";

const ComingSoonModal = () => {
  const closeModal = () => {
    document.getElementById("coming-soon").close();
  };

  return (
    <dialog id="coming-soon" className="rounded-xl p-8 bg-gray-600">
      <div className="text-center mb-4">
        <h3 className="font-bold text-2xl">Coming Soon!</h3>
      </div>
      <div className="items-center flex justify-center flex-col">
        <p className="pb-4 text-lg">
          Stay tuned! Our store will soon offer hosting, emails, web security,
          and much more.
        </p>
      </div>
      <div className="justify-end flex">
        <button
          className="bg-primary hover:bg-sky-500 text-white px-4 py-2 rounded-lg"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </dialog>
  );
};

export default ComingSoonModal;
