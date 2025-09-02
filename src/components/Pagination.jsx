const Pagination = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex items-center justify-between w-full max-w-80 text-gray-500 font-medium text-center">
        <button
          type="button"
          aria-label="prev"
          className="rounded-full bg-slate-200/50 cursor-pointer"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.499 12.85a.9.9 0 0 1 .57.205l.067.06a.9.9 0 0 1 .06 1.206l-.06.066-5.585 5.586-.028.027.028.027 5.585 5.587a.9.9 0 0 1 .06 1.207l-.06.066a.9.9 0 0 1-1.207.06l-.066-.06-6.25-6.25a1 1 0 0 1-.158-.212l-.038-.08a.9.9 0 0 1-.03-.606l.03-.083a1 1 0 0 1 .137-.226l.06-.066 6.25-6.25a.9.9 0 0 1 .635-.263Z"
              fill="#475569"
              stroke="#475569"
              strokeWidth=".078"
            />
          </svg>
        </button>

        <div className="flex items-center gap-2 text-sm font-medium">
          <button className="h-10 w-10 flex items-center justify-center aspect-square cursor-pointer">
            1
          </button>
          <button className="h-10 w-10 flex items-center justify-center aspect-square cursor-pointer">
            2
          </button>
          <button className="h-10 w-10 flex items-center justify-center aspect-square cursor-pointer text-indigo-500 border border-indigo-200 rounded-full">
            3
          </button>
          <button className="h-10 w-10 flex items-center justify-center aspect-square cursor-pointer">
            4
          </button>
          <button className="h-10 w-10 flex items-center justify-center aspect-square cursor-pointer">
            5
          </button>
        </div>

        <button
          type="button"
          aria-label="next"
          className="rounded-full bg-slate-200/50 cursor-pointer"
        >
          <svg
            className="rotate-180"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.499 12.85a.9.9 0 0 1 .57.205l.067.06a.9.9 0 0 1 .06 1.206l-.06.066-5.585 5.586-.028.027.028.027 5.585 5.587a.9.9 0 0 1 .06 1.207l-.06.066a.9.9 0 0 1-1.207.06l-.066-.06-6.25-6.25a1 1 0 0 1-.158-.212l-.038-.08a.9.9 0 0 1-.03-.606l.03-.083a1 1 0 0 1 .137-.226l.06-.066 6.25-6.25a.9.9 0 0 1 .635-.263Z"
              fill="#475569"
              stroke="#475569"
              strokeWidth=".078"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
