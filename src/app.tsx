import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Input } from "./components/ui/input";

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-background text-foreground">
      <div className="w-full max-w-3xl mx-auto space-y-8">
        {/* Time and Date Display */}
        <div className="text-center space-y-2">
          <h1 className="text-7xl font-bold tracking-tighter">{formatTime(currentTime)}</h1>
          <p className="text-xl text-muted-foreground">{formatDate(currentTime)}</p>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex w-full max-w-xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search the web"
              className="pl-10 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          {/* <Button type="submit" className="ml-2">
            Search
          </Button> */}
        </form>
      </div>
    </div>
  );
}

export default App;
