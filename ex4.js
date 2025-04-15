// Classe User
class User {
    constructor(id, username, email) {
      this.id = id;
      this.username = username;
      this.email = email;
    }
    
    static fromJSON(json) {
      const obj = JSON.parse(json);
      return new User(obj.id, obj.username, obj.email);
    }
    
    toJSON() {
      return JSON.stringify({
        id: this.id,
        username: this.username,
        email: this.email
      });
    }
  }
  
  // Classe Post
  class Post {
    constructor(id, title, content, author, date = new Date()) {
      this.id = id;
      this.title = title;
      this.content = content;
      this.author = author; // instance de User
      this.date = date;
    }
    
    static fromJSON(json) {
      const obj = JSON.parse(json);
      const author = new User(obj.author.id, obj.author.username, obj.author.email);
      return new Post(obj.id, obj.title, obj.content, author, new Date(obj.date));
    }
    
    toJSON() {
      return JSON.stringify({
        id: this.id,
        title: this.title,
        content: this.content,
        author: JSON.parse(this.author.toJSON()),
        date: this.date
      });
    }
  }
  
  // Classe Blog
  class Blog {
    constructor() {
      this.users = [];
      this.posts = [];
      this.nextUserId = 1;
      this.nextPostId = 1;
    }
    
    addUser(username, email) {
      const user = new User(this.nextUserId++, username, email);
      this.users.push(user);
      return user;
    }
    
    addPost(title, content, author) {
      const post = new Post(this.nextPostId++, title, content, author);
      this.posts.push(post);
      return post;
    }
    
    getPosts() {
      return this.posts.sort((a, b) => b.date - a.date); // Tri par date décroissante
    }
    
    getPostsByUser(userId) {
      return this.posts.filter(post => post.author.id === userId);
    }
    
    exportToJSON() {
      return JSON.stringify({
        users: this.users.map(user => JSON.parse(user.toJSON())),
        posts: this.posts.map(post => JSON.parse(post.toJSON()))
      });
    }
    
    importFromJSON(json) {
      const data = JSON.parse(json);
      
      this.users = data.users.map(user => 
        new User(user.id, user.username, user.email)
      );
      
      this.posts = data.posts.map(post => {
        const author = this.users.find(user => user.id === post.author.id);
        return new Post(post.id, post.title, post.content, author, new Date(post.date));
      });
      
      this.nextUserId = Math.max(...this.users.map(user => user.id), 0) + 1;
      this.nextPostId = Math.max(...this.posts.map(post => post.id), 0) + 1;
    }
  }
  
  // Exemple d'utilisation du Blog
  const blog = new Blog();
  
  // Ajouter des utilisateurs
  const user1 = blog.addUser("john_doe", "john@example.com");
  const user2 = blog.addUser("jane_smith", "jane@example.com");
  
  // Ajouter des posts
  blog.addPost("Premier article", "Contenu du premier article", user1);
  blog.addPost("Deuxième article", "Contenu du deuxième article", user2);
  blog.addPost("Encore un article", "Contenu d'un nouvel article", user1);
  
  // Exporter vers JSON
  const jsonData = blog.exportToJSON();
  console.log("JSON exporté:", jsonData);
  
  // Importer depuis JSON
  const newBlog = new Blog();
  newBlog.importFromJSON(jsonData);
  
  console.log("Blog importé - Nombre d'utilisateurs:", newBlog.users.length);
  console.log("Blog importé - Nombre de posts:", newBlog.posts.length);
