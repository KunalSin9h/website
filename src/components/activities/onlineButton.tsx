export default function OnlineButton() {
  return (
    <div className="flex space-x-2 items-center border px-2 py-1 rounded-lg hover:bg-green-100/30">
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
      </span>
      <div>Online</div>
    </div>
  );
}
