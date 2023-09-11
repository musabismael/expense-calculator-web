// import Layout from "./layout";
// import { AuthProvider } from "../components/context/AuthContext";
// function App({ Component, pageProps }) {
//   return (
//     <AuthProvider>
//       <Layout>
//         <Component {...pageProps} />
//       </Layout>
//     </AuthProvider>
//   );
// }

// export default App;
use import Layout from "./layout";


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userInfo = GET_USER_FROM_LS;
    if (router.pathname !== "/login" && !userInfo) {
     router.push("/login");
    } else {
     setIsLoading(false)
    }
  }, []);

  if(isLoading) {
   return <div>...</div>
  }

  return (
    <Layout>
        <Component {...pageProps} />
      </Layout>
  );
}
      