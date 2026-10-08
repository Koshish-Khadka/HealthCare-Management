import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();

  // Split path into segments and remove empty items
  const pathnames = location.pathname.split("/").filter((x) => x);
  let accumulatedPath = "";

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm text-gray-500 font-medium">
        <li>
          <Link to="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
        </li>

        {pathnames.map((name, index) => {
          accumulatedPath += `/${name}`;
          const isLast = index === pathnames.length - 1;

          // Convert URL slugs like "men-shoes" to "Men Shoes"
          const displayName = name
            .replace(/[-_]/g, " ")
            .replace(/\b\w/g, (char) => char.toUpperCase());

          return (
            <li key={accumulatedPath} className="flex items-center space-x-2">
              {/* Visual Slash Separator */}
              <span className="text-gray-400 select-none" aria-hidden="true">
                /
              </span>

              {isLast ? (
                <span
                  className="text-gray-900 font-semibold"
                  aria-current="page"
                >
                  {displayName}
                </span>
              ) : (
                <Link
                  to={accumulatedPath}
                  className="hover:text-blue-600 transition-colors"
                >
                  {displayName}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
