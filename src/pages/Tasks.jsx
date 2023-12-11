import { useTask } from "../contexts/taskContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import Task from "../components/Task";
import SearchBar from "../components/SearchBar";

const Tasks = () => {
  const { tasks } = useTask();
  const [search, setSearch] = useState("");

  // Add Sorting (default, priority, complexity, date) and Filtering (tags)
  const handleSort = (type) => {};

  const handleFilter = (tag) => {};

  const filteredTasks = tasks.filter((t) => t.title.includes(search));

  return (
    <div className="flex flex-col items-center gap-5 my-16">
      <SearchBar handleSearch={setSearch} />
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
      <Link
        to="/task/new"
        className="text-white text-lg text-center leading-[60px] bg-[#0A99FE] w-[192px] h-[60px] rounded-[90px]"
      >
        + Add New Task
      </Link>
    </div>
  );
};

export default Tasks;
