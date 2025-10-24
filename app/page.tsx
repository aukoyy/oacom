import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <div className="flex space-x-[-35px] md:space-x-2 justify-center items-center">
          <Image
            src="/notion-avatar.svg"
            alt="Avatar of Øyvind"
            width={230}
            height={138}
            priority
          />
          <div>
            <h1 className='text-4xl'>Hello!</h1>
            <p className="text-lg">I am <a href="/about" className="link">Øyvind</a>, <br />a Solutions Architect<br />soon to be based<br />in Australia.</p>
          </div>
        </div>
        <h2 className="text-3xl mt-24 text-gray-600">Posts</h2>
        <section>
        </section>
      </main>
    </div>
  );
}
