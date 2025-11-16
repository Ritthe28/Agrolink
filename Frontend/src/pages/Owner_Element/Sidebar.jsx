import { NavLink } from "react-router-dom";

const Sidebar = ({ onLinkClick }) => {
  const paths = [
    { name: "Dashboard", path: "/layout" },
    { name: "List Sell", path: "/layout/list_sell" }
  ];

  return (
    <div className="flex flex-col gap-4 p-4">
      {paths.map((e, i) => (
        <NavLink
          key={i}
          to={e.path}
          onClick={onLinkClick}
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg transition-all duration-200 ${
              isActive
                ? "bg-blue-600 text-white shadow-md"
                : "hover:bg-gray-700 hover:text-white"
            }`
          }
        >
          {e.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
