import { Button } from "@/components/ui/button";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form className="flex flex-col items-center">
        <input
          type="text"
          placeholder="Username"
          className="border border-gray-300 p-2 mb-4 w-64"
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 p-2 mb-4 w-64"
        />
        <Button className="px-6 py-2">Submit</Button>
      </form>
    </div>
  );
}