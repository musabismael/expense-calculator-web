import Layout from "./layout";
import { useRouter } from "next/router";
import { useState } from "react";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userInfo = {};
    if (router.pathname !== "/login" && !userInfo) {
      router.push("/login");
    } else {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return <div>...</div>;
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
