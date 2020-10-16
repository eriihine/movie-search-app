export class Movie {
  title: string;
  year: string;
  imdbID: string;
  type: string;
  poster?: string;
  plot?: string;
  genre?: string;
  director?: string;

  constructor(data: any) {
    this.title = data?.Title;
    this.year = data?.Year;
    this.imdbID = data?.imdbID;
    this.type = data?.type;
    this.poster = data?.Poster;
    this.plot = data?.Plot;
    this.genre = data?.Genre;
    this.director = data?.Director;
  }
}
