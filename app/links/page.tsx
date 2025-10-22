export default function Links() {
  // todo: copy blinq layout and icons
  return (
    <div className="flex justify-center mt-36">
      <main className="max-w-7xl">
        <div className="flex space-x-8 items-center">
          <div>
            <h1 className="text-4xl font-bold">Contact</h1>
            <div className="space-y-2 text-lg mt-8">
              <p>oyvind.auk@gmail.com</p>
              <p>+47 950 96 996</p>
              <div>LinkedIn: <a href="https://www.linkedin.com/in/oyvindaukner/" target="_blank" rel="noopener noreferrer" className="link space-x-1">
                <span>Øyvind Aukner</span>
                <span>&#8599;</span></a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


/* { label: 'Github', href: 'https://github.com/aukoyy' },
  { label: 'Youtube', href: 'https://www.youtube.com/@AukOps' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/oyvindaukner/' }, */