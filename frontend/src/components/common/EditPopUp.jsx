import { useEffect, useState } from "react";

const EditPopUp = ({
  setEditDialog,
  title = "Edit Details",
  subtitle = "View and update details",
  data = {},
  fields = [],
  onSave,
}) => {
  const [formData, setFormData] = useState(data);
  const [saving, setSaving] = useState(false);

  // console.log("The user data", data);
  useEffect(() => {
    setFormData(data ?? {});
  }, [data]);

  const handleChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!onSave) return;

    try {
      setSaving(true);
      await onSave(formData);
      setEditDialog(false);
    } catch (error) {
      console.error("Failed to save changes:", error);
    } finally {
      setSaving(false);
    }
  };

  const formatValue = (value, field) => {
    if (value === null || value === undefined || value === "") {
      return "—";
    }

    if (field.type === "date" || field.type === "datetime") {
      const date = new Date(value);

      if (Number.isNaN(date.getTime())) return value;

      return field.type === "date"
        ? date.toLocaleDateString()
        : date.toLocaleString();
    }

    if (typeof value === "boolean") {
      return value ? "Yes" : "No";
    }

    return String(value);
  };

  const renderField = (field) => {
    const value = formData?.[field.name] ?? "";

    // Read-only fields are displayed as text.
    if (!field.editable) {
      return (
        <div key={field.name}>
          <label
            className="text-xs font-medium text-stone-500"
            htmlFor={field.name}
          >
            {field.label}
          </label>

          <p
            id={field.name}
            className="mt-1 break-words text-sm font-medium text-stone-800"
          >
            {formatValue(value, field)}
          </p>
        </div>
      );
    }

    const commonProps = {
      id: field.name,
      name: field.name,
      value,
      required: field.required ?? false,
      disabled: field.disabled ?? false,
      onChange: (e) => handleChange(field.name, e.target.value),
      className:
        "w-full rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm text-stone-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-stone-100",
    };

    return (
      <div key={field.name} className={field.fullWidth ? "col-span-2" : ""}>
        <label
          htmlFor={field.name}
          className="mb-1.5 block text-xs font-medium text-stone-600"
        >
          {field.label}
          {field.required && <span className="ml-1 text-red-500">*</span>}
        </label>

        {field.type === "select" ? (
          <select {...commonProps}>
            <option value="" disabled>
              Select {field.label}
            </option>

            {(field.options ?? []).map((option) => {
              const item =
                typeof option === "string"
                  ? { label: option, value: option }
                  : option;

              return (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              );
            })}
          </select>
        ) : field.type === "textarea" ? (
          <textarea {...commonProps} rows={field.rows ?? 3} />
        ) : (
          <input {...commonProps} type={field.type ?? "text"} />
        )}
      </div>
    );
  };

  return (
    <div
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="edit-title"
      aria-describedby="edit-description"
      className="w-full max-w-md max-h-4/5 h-full rounded-xl border border-stone-200 bg-white p-6 shadow-xl overflow-y-auto"
    >
      <form onSubmit={handleSubmit}>
        {/* Header */}
        <div className="border-b border-stone-200 pb-4">
          <h2 id="edit-title" className="text-lg font-semibold text-stone-800">
            {title}
          </h2>

          <p id="edit-description" className="mt-1 text-sm text-stone-500">
            {subtitle}
          </p>
        </div>

        {/* Dynamic fields */}
        <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-5">
          {fields.map(renderField)}
        </div>

        {/* Actions */}
        <div className="mt-7 flex justify-end gap-3 border-t border-stone-200 pt-4">
          <button
            type="button"
            disabled={saving}
            onClick={() => setEditDialog(false)}
            className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 transition hover:bg-stone-100 disabled:opacity-50"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={saving}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPopUp;
