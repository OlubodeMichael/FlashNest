export default function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4">
      <div className="mb-4 flex items-center space-x-3">
        <div className="h-10 w-10 bg-yellow-400 rounded-lg flex items-center justify-center shadow-sm">
          <span className="font-bold text-base text-black">FN</span>
        </div>
        <span className="font-bold text-xl tracking-tight text-black">
          FlashNest
        </span>
      </div>
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
    </div>
  );
}
