const Badge = ({ varient, text }) => {
  switch (varient) {
    case "Danger":
      return (
        <span className="bg-red-100 text-red-700 text-xs font-medium px-1.5 py-0.5 rounded">
          {text}
        </span>
      );
    case "Success":
      return (
        <span className="bg-green-100 text-green-700 text-xs font-medium px-1.5 py-0.5 rounded">
          {text}
        </span>
      );
    case "Warning":
      return (
        <span className="bg-amber-100 text-amber-700 text-xs font-medium px-1.5 py-0.5 rounded">
          {text}
        </span>
      );
    case "Brand":
      return (
        <span className="bg-indigo-100 text-indigo-700 text-xs font-medium px-1.5 py-0.5 rounded">
          {text}
        </span>
      );
    default:
      return null;
  }
};

export default Badge;
