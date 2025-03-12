import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  function handleGetStarted() {
    navigate("/login");
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-0">
      {/* Sticky Top Navigation */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 w-full bg-white shadow z-10"
      >
        <nav className="flex items-center justify-end px-6 py-4 gap-6">
          <a href="#about" className="hover:underline">About</a>
          <a href="#products" className="hover:underline">Products</a>
          <a href="#apply" className="hover:underline">Apply</a>
          <a href="#support" className="hover:underline">Support</a>
          <a href="/login" className="hover:underline">Login</a>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-center text-center py-20"
      >
        <p className="text-md uppercase text-gray-600 tracking-widest">REACH HIGHER</p>
        <h1 className="text-6xl font-bold text-gray-800 mt-2">BABEL</h1>
      </motion.section>

      {/* Main Content Section */}
      <motion.main
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl flex flex-wrap justify-center gap-6 mt-6"
      >
        <Card className="w-80 text-center">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold">Our Mission</h2>
            <p className="text-gray-600 mt-2">
              We strive to bridge communication gaps through cutting-edge technology.
            </p>
          </CardContent>
        </Card>

        <Card className="w-80 text-center">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold">Our Services</h2>
            <p className="text-gray-600 mt-2">
              From AI-powered translations to seamless cross-language collaboration.
            </p>
          </CardContent>
        </Card>
      </motion.main>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-10 mb-10"
      >
        <Button onClick={handleGetStarted} className="px-6 py-3 text-lg font-medium">
          Get Started
        </Button>
      </motion.div>
    </div>
  );
}
