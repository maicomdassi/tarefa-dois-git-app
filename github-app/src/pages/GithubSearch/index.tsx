import './styles.css';
import ResultCard from 'components/ResultCard';
import axios from 'axios';
import { useState } from 'react';

type GitUser = {
  url: string;
  followers: string;
  name: string;
  location: string;
  avatar_url: string;
};
type FormData = {
  user: string;
};

const GithubSearch = () => {
  const [gitUser, setGitUser] = useState<GitUser>();

  const [formData, setFormData] = useState<FormData>({
    user: '',
  });

  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .get(`https://api.github.com/users/${formData.user}`)
      .then((response) => {
        setGitUser(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setGitUser(undefined);
        console.log(error);
      });
  };

  return (
    <div className="git-search-container">
      <div className="container search-container">
        <h1>Encontre um perfil Github</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              className="search-input"
              name="user"
              value={formData?.user}
              placeholder="Usuário Github"
              onChange={handlerChange}
            />
            <button type="submit" className="btn btn-primary search-button">
              Encontrar
            </button>
          </div>
        </form>
      </div>

      <div className="git-user-container">
        {gitUser && (
          <>
            <ResultCard
              perfil={gitUser.url}
              seguidores={gitUser.followers}
              nome={gitUser.name}
              localidade={gitUser.location}
              imagem={gitUser.avatar_url}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default GithubSearch;
