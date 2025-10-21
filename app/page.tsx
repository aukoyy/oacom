import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center my-24 px-4">
      <main className="max-w-7xl">
        <div className="flex space-x-8 justify-center items-center">
          <Image
            src="/notion-avatar.svg"
            alt="Avatar of Øyvind"
            width={180}
            height={38}
            priority
          />
          <div>
            <h1 className='text-4xl'>Hello!</h1>
            <p className="text-lg">I am <a href="/about" className="text-sky-600 hover:text-sky-800">Øyvind</a>, <br />a Solutions Architect<br />based in Oslo.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
