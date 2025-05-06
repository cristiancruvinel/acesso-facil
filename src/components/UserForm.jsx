import { useContext, useEffect, useState, useCallback } from "react";
import { LanguageContext } from "../context/LanguageContext";
import texts from "../utils/texts";

const UserForm = ({ onAddUser, initialData = null, isEditing = false }) => {
  const { language } = useContext(LanguageContext);
  const t = texts[language];

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (initialData) {
      setNome(initialData.nome);
      setEmail(initialData.email);
    }
  }, [initialData]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!nome.trim() || !email.trim()) {
        alert(t.fillAllFields);
        return;
      }

      onAddUser({ nome, email });
      setNome("");
      setEmail("");
    },
    [nome, email, onAddUser, t.fillAllFields]
  );

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        placeholder={t.name}
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="email"
        placeholder={t.email}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">{isEditing ? t.update : t.register}</button>
    </form>
  );
};

const styles = {
  form: {
    marginBottom: "20px",
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },
};

export default UserForm;
