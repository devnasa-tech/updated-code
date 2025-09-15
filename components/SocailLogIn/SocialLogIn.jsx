"use client";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const SocialLogIn = () => {
  const { googleSignIn } = useAuth();
  const axiosSecure = useAxiosSecure();
  const router = useRouter();
  // const searchParams = useSearchParams();
  // const from = searchParams.get("from") || "/";

  const handleGoogleSignIn = async () => {
    try {
      const result = await googleSignIn();
      const user = result.user;

      const userInfo = {
        name: user.displayName,
        email: user.email,
        role: "user",
        registrationTime: new Date().toLocaleString(),
      };

      const res = await axiosSecure.post("/api/post-users", userInfo);

      if (res.data.insertedId || res.data.message === "User already exists") {
        toast.success("Logged in successfully");
        router.replace(from);
      } else {
        toast.error("Failed to save user info");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message || "Something went wrong!");
    }
  };

  return (
    <div className="">
      {/* Google Login */}\
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="flex-1 py-3 px-4 border rounded-md bg-[#3b5998] text-white hover:bg-[#324b81] transition-colors">
          Facebook
        </button>
        <button 

                onClick={handleGoogleSignIn} 
        className="flex-1 py-3 px-4 border rounded-md bg-[#4285F4] text-white hover:bg-[#3574d6] transition-colors">
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogIn;
