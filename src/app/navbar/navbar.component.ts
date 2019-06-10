import { Component, OnInit, OnDestroy } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit, OnDestroy {
  movieList: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get(`https://api.themoviedb.org/3/movie/top_rated`, {
        params: {
          api_key: environment.apiKey
        }
      })
      .toPromise()
      .then((data: any) => {
        console.log(data);
        this.movieList = data.results;
      })
      .catch(error => console.log(error))
      .finally(() => console.log("final"));
  }

  ngOnDestroy() {}
}
