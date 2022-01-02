import { HttpClient } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { concatMap, map } from 'rxjs';
import { DataService } from './app-common/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'advancedTraining';
  hideLeftPannel: any = false;
  posts: any = [];
  comments: any = [];

  constructor(
    private router: Router,
    private ngZone: NgZone,
    private data: DataService,
    private http: HttpClient
  ){
    window.onresize = (e) =>
    {
        ngZone.run(() => {
            switch(true){
              case window.innerWidth <= 480:
                console.log('mobile');
                this.data.viewChangeSubject.next('mobile');
                break;
              case window.innerWidth > 480 && window.innerWidth <= 765:
                console.log('tablet');
                this.data.viewChangeSubject.next('tablet');
                break;
              case window.innerWidth > 765:
                this.data.viewChangeSubject.next('desktop');
                console.log('desktop');
                break;
              default:
                console.log('default');
                this.data.viewChangeSubject.next('desktop');

            }
        });
    };
  }

  ngOnInit(): void {
    // const url1 = 'https://jsonplaceholder.typicode.com/posts';
    // const url2  = 'https://jsonplaceholder.typicode.com/comments';
    // this.router.navigate(['floatingBanner']);
    // this.http.get(url1)
    //   .subscribe(val => this.posts = val);
    // this.http.get(url2)
    // .subscribe(val => this.comments = val)

    // console.log(this.posts);
    // console.log(this.comments);

    // let postUpdated = this.posts.map((post: any) => {
    //   let filteredData = this.comments.filter((comment: any) => comment.postId == post.id)
    //   return {
    //     ...post,
    //     comments : filteredData
    //   }

    // });
    // console.log(postUpdated);


  }
  showHide(event: Event): void {
    this.hideLeftPannel = !event;
  }
}
