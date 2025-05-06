import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import texts from "../utils/texts";
import UserList from "../components/UserList";

const Home = () => {
  const { language } = useContext(LanguageContext);
  const t = texts[language];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{t.title}</h1>
      <div style={styles.grid}>
        <div className="card">
          <UserList />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
    width: "95vw",
  },
  title: {
    marginBottom: "20px",
    textAlign: "center",
    fontSize: "2rem"
  },
  grid: {
    display: "flex",
    justifyContent: "center"
  }
};

export default Home;
