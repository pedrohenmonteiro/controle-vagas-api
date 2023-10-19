export default function TextField() {
  return (
    <div className="flex items-center bg-gray-100 rounded-md px-1 py-2 border-[1px] border-gray-300 focus:border-2 focus-within:bg-gray-50">
      <input
        className="px-2 py-1 bg-transparent w-full outline-none "
        type="text"
      />
    </div>
  );
}
