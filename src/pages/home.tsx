import { RxUpdate } from "react-icons/rx";

export function HomePage() {
  return (
    <div className="mt-4">
      <div className="flex flex-row gap-4 justify-end mr-4">
        <div className="bg-gray-200 p-4 rounded-lg flex flex-row gap-1">
          <div>Total Projects:</div>
          <div className="font-semibold">(2)</div>
        </div>
        <div className="bg-blue-500 p-4 px-8 rounded-lg text-white hover:bg-blue-700">
          Add Site
        </div>
      </div>
      <div className="flex flex-col mt-6 items-center justify-center gap-5">
        <div className="flex flex-col bg-gray-200 w-96 p-3 rounded-lg">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col gap-1">
              <div className="flex flex-row gap-2">
                <div>
                  <RxUpdate size={20} />
                </div>
                <div>Cristiano HomePage</div>
              </div>
              <div className="italic">http://cristianosilvadev.com/</div>
            </div>
            <div className="p-2 border rounded-md text-green-600 border-green-600">
              online
            </div>
          </div>
          <div className="flex flex-row justify-between mt-5">
            <div className="flex flex-col items-center justify-center">
              <div>Registered Routes</div>
              <div className="w-full py-4 border rounded-lg border-black text-center">
                0
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div>Working Routes</div>
              <div className="w-full py-4 border rounded-lg border-black text-center">
                0
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
