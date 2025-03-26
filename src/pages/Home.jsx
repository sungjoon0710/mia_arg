import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  function handleGetStarted() {
    navigate("/login");
  }

  // Navigation items with their respective colors
  const navItems = [
    { text: "About", href: "#about", color: "bg-blue-500" },
    { text: "Products", href: "#products", color: "bg-green-500" },
    { text: "Apply", href: "#apply", color: "bg-purple-500" },
    { text: "Support", href: "#support", color: "bg-yellow-500" },
    { text: "Login", href: "/login", color: "bg-red-500" }
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Sticky Top Navigation with Colorful Boxes */}
      <header className="sticky top-0 w-full bg-white shadow z-10 transition-all duration-300">
        <nav className="flex items-center justify-end px-6 py-4 gap-6">
          {navItems.map((item, index) => (
            <div
              key={index}
              className={`${item.color} rounded-lg p-2 hover:shadow-lg transition-all duration-300 hover:scale-105`}
            >
              <a 
                href={item.href} 
                className="text-white font-medium hover:underline"
              >
                {item.text}
              </a>
            </div>
          ))}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="w-full h-screen flex flex-col items-center justify-center text-center bg-gray-100">
        <p className="text-lg uppercase text-gray-600 tracking-wider mb-4">
          REACH HIGHER
        </p>
        <h1 className="text-8xl leading-none font-extrabold text-gray-800">
          BABEL
        </h1>
      </section>

      {/* Main Content Section */}
      <main className="w-full max-w-4xl mx-auto flex flex-wrap justify-center gap-6 mt-12">
        <Card className="w-80 text-center transition-all duration-300 hover:scale-105">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p className="text-gray-600 mt-2">
              We strive to bridge communication gaps through cutting-edge technology.
            </p>
          </CardContent>
        </Card>

        <Card className="w-80 text-center transition-all duration-300 hover:scale-105">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold">Our Services</h2>
            <p className="text-gray-600 mt-2">
              AI-powered products to seamless cross-language collaboration.
            </p>
          </CardContent>
        </Card>
      </main>

      {/* Call to Action */}
      <div className="my-10 flex justify-center">
        <Button 
          onClick={handleGetStarted} 
          className="px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}