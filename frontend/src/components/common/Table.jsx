import React from "react";

const Table = ({ columns, data, emptyMessage = "No data found." }) => {
  return (
    <div className="w-full overflow-hidden rounded-lg bg-white mt-4">
      {/* Desktop Header */}
      <div
        className="hidden md:grid border-b border-gray-200 bg-gray-50 px-6 py-4"
        style={{
          gridTemplateColumns: columns
            .map((column) => column.width || "1fr")
            .join(" "),
        }}
      >
        {columns.map((column) => (
          <div
            key={column.key}
            className="text-xs font-semibold uppercase tracking-wider text-gray-500"
          >
            {column.header}
          </div>
        ))}
      </div>

      {/* Rows */}
      <div className="divide-y divide-gray-200">
        {data.length === 0 ? (
          <div className="px-6 py-10 text-center text-sm text-gray-500">
            {emptyMessage}
          </div>
        ) : (
          data.map((row) => (
            <div
              key={row.id}
              className="flex flex-col gap-4 bg-white p-4 transition-colors hover:bg-gray-50 md:grid md:items-center md:gap-0 md:px-6 md:py-4"
              style={{
                gridTemplateColumns: columns
                  .map((column) => column.width || "1fr")
                  .join(" "),
              }}
            >
              {columns.map((column) => (
                <div key={column.key} className="flex flex-col md:block">
                  {/* Mobile label */}
                  <span className="mb-1 text-[10px] font-bold uppercase tracking-wider text-gray-400 md:hidden">
                    {column.header}
                  </span>

                  {/* Cell */}
                  <div className="text-sm text-gray-600">
                    {column.render
                      ? column.render(row[column.key], row)
                      : row[column.key]}
                  </div>
                </div>
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Table;
