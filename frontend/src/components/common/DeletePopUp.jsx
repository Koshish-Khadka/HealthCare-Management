import { TriangleAlert } from "lucide-react";

const DeletePopUp = ({
  setDeleteDialog,
  name = "this record",
  title = "Delete record?",
  onConfirm,
}) => {
  return (
    <div
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="delete-title"
      aria-describedby="delete-description"
      className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl"
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
          <TriangleAlert size={32} className="text-red-500" />
        </div>

        <h2 id="delete-title" className="text-lg font-semibold text-gray-900">
          {title}
        </h2>

        <p
          id="delete-description"
          className="mt-2 text-sm leading-6 text-gray-500"
        >
          Are you sure you want to delete{" "}
          <span className="font-medium text-gray-700">{name}</span>? This action
          cannot be undone.
        </p>
      </div>

      <div className="mt-6 flex gap-3">
        <button
          type="button"
        //   disabled={loading}
          onClick={() => setDeleteDialog(false)}
          className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5
                     text-sm font-medium text-gray-700 transition
                     hover:bg-gray-50 disabled:cursor-not-allowed
                     disabled:opacity-50"
        >
          Cancel
        </button>

        <button
          type="button"
          //   disabled={loading}
          onClick={onConfirm}
          className="flex-1 rounded-lg bg-red-500 px-4 py-2.5
                     text-sm font-medium text-white transition
                     hover:bg-red-600 disabled:cursor-not-allowed
                     disabled:opacity-50"
        >
          {/* {loading ? "Deleting..." : "Delete record"} */}
          Delete record
        </button>
      </div>
    </div>
  );
};

export default DeletePopUp;
