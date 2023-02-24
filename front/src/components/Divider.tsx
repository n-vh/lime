export function Divider({ placeholder }: { placeholder: string }) {
  return (
    <div>
      <button className="ml-8 h-10 w-40 translate-y-[1.3rem] rounded-full border-2 border-[#E3FF7D] bg-[#27272a] md:h-10 md:w-64 md:translate-y-[1.6rem] lg:h-14 lg:w-80 lg:translate-y-[2rem]">
        <h1 className="text-bold text-white">{placeholder}</h1>
      </button>
      <hr className="ml-8 mr-8 border border-[#E3FF7D]" />
    </div>
  );
}
