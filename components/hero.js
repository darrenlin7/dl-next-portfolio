const profileImage =
  "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80";

export default function Hero() {
  return (
    <header className="px-6">
      <div className="max-w-4xl mx-auto flex gap-14 items-center">
        <div>
          <h1 className="text-3xl font-bold mb-6">
            Hi, I'm Darren <br /> Software Engineer
          </h1>
          <p className="text-lg mb-6">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <a
            href="#"
            className="bg-red-400 text-white px-6 py-3 text-lg rounded hover:bg-red-600"
          >
            Check out my work
          </a>
        </div>
        <span className="m-5 inline-block before:w-full before:aspect-square before:-left-1.5 before:top-1.5 before:block before:absolute before:bg-red-400 relative z-0 before:rounded-full">
          <img
            src={profileImage}
            width="360"
            height="360"
            alt="Image of Darren"
            className="z-10 relative rounded-full"
          ></img>
        </span>
      </div>
    </header>
  );
}
