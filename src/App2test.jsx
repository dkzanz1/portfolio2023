function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors">
      <button
        onClick={() => document.documentElement.classList.toggle("dark")}
        className="px-4 py-2 rounded bg-gray-800 text-white dark:bg-gray-200 dark:text-black transition"
      >
        Toggle Dark Mode
      </button>
      <h1>Hello World</h1>
    </div>
  );

}
export default App;