import React, { useState } from "react";
import useAddTaskStore from "../stores/useAddTaskStore";

const AddAssignees = ({ projectId, users, projects }) => {
  const project = projects.find((p) => p.id === projectId);
  const projectMembers = project ? project.members : [];

  const assignedUsers = users.filter((user) =>
    projectMembers.includes(user.id)
  );

  const [open, setOpen] = useState(false);
  const { selectedUsers, setSelectedUsers } = useAddTaskStore((s) => s);

  const handleToggleUser = (user) => {
    if (selectedUsers.some((u) => u.id === user.id)) {
      // remove
      setSelectedUsers(selectedUsers.filter((u) => u.id !== user.id));
    } else {
      // add
      setSelectedUsers([...selectedUsers, user]);
    }
  };

  return (
    <div className="w-64">
      {/* Dropdown Box */}
      <div className="relative">
        <div onClick={() => setOpen(!open)} className="flex">
          {selectedUsers.length > 0 ? (
            selectedUsers.map((u) => (
              <figure
                key={u.id}
                className="w-full max-w-10 max-h-10 rounded-full overflow-hidden "
              >
                <img src={u.avatar} />
              </figure>
            ))
          ) : (
            <span className="text-gray-400 body-medium-medium">Empty</span>
          )}
        </div>

        {/* Dropdown Items */}
        {open && (
          <div className="absolute mt-1 w-full rounded-lg border bg-white shadow-lg z-10 max-h-40 overflow-y-auto">
            {assignedUsers.map((user) => (
              <label
                key={user.id}
                className="flex cursor-pointer items-center gap-2 px-3 py-2 hover:bg-gray-100"
              >
                <input
                  type="checkbox"
                  checked={selectedUsers.some((u) => u.id === user.id)}
                  onChange={() => handleToggleUser(user)}
                  className="h-4 w-4"
                />
                {user.name}
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AddAssignees;
