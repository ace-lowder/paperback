export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-between p-8">
      <div className="space-y-4">
        <h1 className="text-center">Hello Linkedin!</h1>
        <p className="text-right">
          Welcome to my profile!<br></br> Check out the{" "}
          <a href="#featured">featured section</a>
        </p>
      </div>
      <span className="text-right">😊</span>
    </div>
  );
}
