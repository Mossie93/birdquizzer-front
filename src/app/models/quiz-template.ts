export class QuizTemplate {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  author: string;

  constructor(id, description, longDescription, author, name) {
    this.id = id;
    this.description = description;
    this.longDescription = longDescription;
    this.author = author;
    this.name = name;
  }
}
