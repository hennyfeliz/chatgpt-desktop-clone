export const Switch = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-focus:outline-none"></div>
        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          Toggle me
        </span>
      </label>
    </div>
  );
};
