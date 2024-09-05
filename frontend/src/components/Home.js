import { useNavigate } from "react-router";
export default function Home() {
  const navigate = useNavigate();

  const signOut = () => {
    localStorage.removeItem("temitope");
    navigate("/login");
  };

  return (
    <>
      <div style={{ marginTop: 20, minHeight: 700 }}>
        <h1>Profile page</h1>
        <p>Hello there, welcome to your home page</p>

        <button onClick={signOut}>sign out</button>
      </div>
    </>
  );
}
