# API de Restaurante

Uma API RESTful desenvolvida em Node.js com Express e TypeScript para gerenciar mesas, sessões, produtos e pedidos de um restaurante.

## ✨ Features

- **Gerenciamento de Produtos**: CRUD completo para produtos (criar, ler, atualizar, deletar).
- **Gerenciamento de Mesas**: Listagem de mesas disponíveis.
- **Controle de Sessões**: Abertura e fechamento de sessões para as mesas.
- **Registro de Pedidos**: Criação e listagem de pedidos associados a uma sessão de mesa.
- **Cálculo de Totais**: Obtenção do valor total e da quantidade de itens de uma sessão.

## 🚀 Tecnologias Utilizadas

- **Node.js**: Ambiente de execução do JavaScript no servidor.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Express**: Framework para construção de APIs.
- **Knex.js**: SQL Query Builder para interagir com o banco de dados.
- **SQLite3**: Banco de dados SQL embarcado, utilizado para desenvolvimento.
- **TSX**: Executor de TypeScript para Node.js, permitindo rodar os arquivos `.ts` diretamente.
- **Zod**: Biblioteca para validação de esquemas e dados.

## 📋 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:
- Node.js (versão 18 ou superior recomendada)
- npm (geralmente vem com o Node.js)

## ⚙️ Instalação e Configuração

Siga os passos abaixo para configurar o ambiente de desenvolvimento:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/broninn/api-restaurant.git
   cd api-restaurant
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Execute as migrações do banco de dados:**
   Este comando irá criar o arquivo `database/database.db` e configurar as tabelas necessárias.
   ```bash
   npm run knex -- migrate:latest
   ```

## ▶️ Executando a Aplicação

Para iniciar o servidor em modo de desenvolvimento (com hot-reload), execute:

```bash
npm run dev
```

O servidor estará rodando em `http://localhost:3333`.

## Endpoints da API

Aqui estão os endpoints disponíveis na API:

### Produtos (`/products`)

- `GET /`: Lista todos os produtos.
- `POST /`: Cria um novo produto.
  - **Body**: `{ "name": "string", "price": number }`
- `PUT /:id`: Atualiza um produto existente.
  - **Body**: `{ "name": "string", "price": number }`
- `DELETE /:id`: Remove um produto.

### Mesas (`/tables`)

- `GET /`: Lista todas as mesas.

### Sessões de Mesa (`/tables-sessions`)

- `POST /`: Abre uma nova sessão para uma mesa.
  - **Body**: `{ "table_id": number }`
- `GET /`: Lista todas as sessões criadas.
- `PATCH /:id`: Fecha uma sessão existente.

### Pedidos (`/orders`)

- `POST /`: Cria um novo pedido para uma sessão de mesa.
  - **Body**: `{ "table_session_id": number, "product_id": number, "quantity": number }`
- `GET /table-session/:table_session_id`: Lista todos os itens de um pedido para uma sessão específica.
- `GET /table-session/:table_session_id/total`: Retorna o valor total e a quantidade total de itens de uma sessão.

## 📜 Licença

Este projeto está licenciado sob a licença ISC. Veja o arquivo `LICENSE` para mais detalhes.

---

*Desenvolvido por Bruno Henrique da Silva Mosko.*
