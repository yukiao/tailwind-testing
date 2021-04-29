import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>TailwindCSS Testing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col h-screen w-4/5 mx-auto">
        <div className="flex py-5 justify-between items-center">
          <h2>Lorem</h2>
          <ul className="list-none flex items-center">
            <li className="mr-6">Home</li>
            <li className="mr-6">Gallery</li>
            <li className="mr-20">Pricing</li>
            {/* Authentication place */}
            <li className="mr-6">
              <button className="focus:outline-none px-4 py-1 font-bold border-2 rounded-full">
                Sign Up
              </button>
            </li>
            <li>
              <button className="outline-none px-2 py-1 font-bold focus:outline-none">
                Login
              </button>
            </li>
          </ul>
        </div>
        <div className="flex flex-1">
          <div className="flex flex-col justify-center w-2/4">
            <p className="text-blue-light mb-5">Lorem ipsum</p>
            <h1 className="text-6xl text-blue-dark font-bold mb-12">
              Lorem ipsum dksajfljkas lajflkasjkfl lajflkjaslfk lkasjflksjl.
            </h1>
            <div className="flex mt-5 ">
              <button className="text-white font-bold w-36 rounded-full bg-gradient-to-r from-pinky-light to-pinky-dark focus:outline-none px-5 py-3 mr-10">
                Beginner
              </button>
              <button className="text-white font-bold w-36 rounded-full bg-gradient-to-r from-blueming-light to-blueming-dark focus:outline-none px-5 py-3">
                Expert
              </button>
            </div>
          </div>
          <div className="w-2/4"></div>
        </div>
      </main>
    </div>
  );
}
