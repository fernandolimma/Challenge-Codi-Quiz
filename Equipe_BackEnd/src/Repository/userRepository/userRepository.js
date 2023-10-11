// essa pasta salva as informações relacionadas a usuário no banco de dados

class UserRepository {
    constructor(database) {
      this.db = database;
    }
  
    createUser(userData) { // método POST
      // Lógica para criar um usuário no banco de dados
    }
  
    getUserById(userId) { //método GET
      // Lógica para buscar um usuário pelo ID
    }

    updateUser(userId) { // método PUT

    }
    deleteUser (userId) { // método DELETE
 
    }
  }