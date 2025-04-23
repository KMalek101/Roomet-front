import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const useAuth = () => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();
  const API_BASE_URL = "http://localhost:5000";

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/auth/is-logged-in}`, {
          method: "GET",
          credentials: "include", 
        });

        if (res.ok) {
          const data = await res.json();
          if (data.authenticated) {
            setAuthenticated(true);
          } else {
            router.push("/login");
          }
        } else {
          router.push("/login");
        }
      } catch (err) {
        console.error("Error checking auth:", err);
        router.push("/login");
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  return { loading, authenticated };
};

export default useAuth;
