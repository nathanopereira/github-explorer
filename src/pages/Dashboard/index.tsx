import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositóio" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/13575331?s=460&u=994a16eb86479040460b39a899d8b0bd1f20e9bb&v=4"
            alt="Nathan"
          />
          <div>
            <strong>repositório</strong>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/13575331?s=460&u=994a16eb86479040460b39a899d8b0bd1f20e9bb&v=4"
            alt="Nathan"
          />
          <div>
            <strong>repositório</strong>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
