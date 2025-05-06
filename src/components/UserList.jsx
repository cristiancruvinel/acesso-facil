import { useEffect, useMemo, useState, useCallback, useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import texts from "../utils/texts";
import UserForm from "./UserForm";

const UserList = () => {
  const { language } = useContext(LanguageContext);
  const t = texts[language];

  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editUser, setEditUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("usuarios");
    if (saved) {
      setUsers(JSON.parse(saved));
    }
  }, []);

  const handleAddUser = useCallback(
    (usuario) => {
      if (editIndex !== null) {
        const atualizados = [...users];
        atualizados[editIndex] = usuario;
        setUsers(atualizados);
        localStorage.setItem("usuarios", JSON.stringify(atualizados));
        setEditIndex(null);
        setEditUser(null);
      } else {
        const atualizados = [...users, usuario];
        setUsers(atualizados);
        localStorage.setItem("usuarios", JSON.stringify(atualizados));
      }
    },
    [editIndex, users]
  );

  const handleRemoveUser = useCallback(
    (indexToRemove) => {
      const novaLista = users.filter((_, i) => i !== indexToRemove);
      setUsers(novaLista);
      localStorage.setItem("usuarios", JSON.stringify(novaLista));
      if (editIndex === indexToRemove) {
        setEditIndex(null);
        setEditUser(null);
      }
    },
    [users, editIndex]
  );

  const handleEditUser = useCallback(
    (index) => {
      setEditIndex(index);
      setEditUser(users[index]);
    },
    [users]
  );

  const userList = useMemo(() => {
    return users.map((user, index) => (
      <li key={index} style={styles.listItem}>
        <span>{user.nome} ({user.email})</span>
        <div>
          <button onClick={() => handleEditUser(index)}>{t.edit}</button>{" "}
          <button onClick={() => handleRemoveUser(index)}>{t.remove}</button>
        </div>
      </li>
    ));
  }, [users, handleEditUser, handleRemoveUser, t]);

  return (
    <>
      <div>
        <UserForm
          onAddUser={handleAddUser}
          initialData={editUser}
          isEditing={editIndex !== null}
        />
      </div>
      <div>
        <h2>{t.registeredUsers}</h2>
        {users.length === 0 ? <p>{t.none}</p> : <ul style={styles.list}>{userList}</ul>}
      </div>
    </>
  );
};

const styles = {
  list: {
    listStyle: "none",
    padding: 0
  },
  listItem: {
    marginBottom: "8px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px"
  }
};

export default UserList;
