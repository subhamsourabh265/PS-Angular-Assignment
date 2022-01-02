import { trigger } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { forkJoin, lastValueFrom } from 'rxjs';
import {
  bannerAnimation,
  bannerRotate,
  pageLoadAnimation,
} from 'src/app/app-common/animations';
import { BANNERLABELS } from 'src/app/app-common/app-settings.config';
import { DataService } from 'src/app/app-common/services/data.service';

@Component({
  selector: 'ss-app-floating-banner-main',
  templateUrl: './floating-banner-main.component.html',
  styleUrls: ['./floating-banner-main.component.scss'],
  animations: [trigger('rotatingBanner', bannerRotate), pageLoadAnimation], //bannerAnimation
})
export class FloatingBannerMainComponent implements OnInit, OnDestroy {
  bannerLabels = BANNERLABELS;
  showBanner = true;
  state: string = 'small';
  bannerInterval: any;
  posts = [];
  comments = [];
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.bannerInterval = setInterval(() => {
      this.state = this.state == 'small' ? 'large' : 'small';
    }, 4100);
    const url1 = 'https://jsonplaceholder.typicode.com/posts';
    const url2 = 'https://jsonplaceholder.typicode.com/comments';

    this.data.fetchData(url1).then((posts) => {
      if (posts) {
        this.posts = posts;
        this.data.fetchData(url2).then((comments) => {
          if (comments) {
            this.comments = comments;
            const updatedPosts = this.posts.map((post: any) => {
              const comments = this.comments.filter(
                (comment: any) => comment.postId == post.id
              );
              return Object.assign(post, { comments });
            });
            console.log(updatedPosts);
          }
        });
      }
    });

    this.data.getJsonData(url1).subscribe((posts) => {
      if (posts) {
        console.log(posts);
        this.data.getJsonData(url2).subscribe((comments) => {
          if (comments) {
            const updatedPosts = posts?.body?.map((post: any) => {
              const filteredComments = comments?.body?.filter(
                (comment: any) => comment.postId == post.id
              );
              return {
                ...post,
                comments: filteredComments,
              };
            });
            console.log(updatedPosts);
          }
        });
      }
    });

    // fetch(url1)
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log(res);
    //     if (res) {
    //       this.posts = res;
    //       fetch(url2)
    //         .then((res) => res.json())
    //         .then((res) => {
    //           if (res) {
    //             this.comments = res;
    //             const updatedPosts = this.posts.map((post: any) => {
    //               const filteredComments = this.comments.filter(
    //                 (comment: any) => comment.postId == post.id
    //               );
    //               return Object.assign(post, { comments: filteredComments });
    //             });

    //           }
    //         })
    //         .catch((err) => {
    //           console.log(err);
    //         });
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // this.http.get(url1)
    //   .subscribe((val:any) => {
    //     this.posts = val
    //   });
    // this.http.get(url2)
    // .subscribe((val:any) => this.comments = val)

    // let val = lastValueFrom(forkJoin([this.http.get(url1),this.http.get(url2)]))
    // .then(val => {
    //   console.log(val);
    // })
    // .subscribe((val: any) => {
    //   this.posts = val[0];
    //   this.comments = val[1];
    //   console.log(this.posts);
    //   console.log(this.comments);
    //   let postUpdated = this.posts.map((post: any) => {
    //       let filteredData = this.comments.filter((comment: any) => comment.postId == post.id)
    //       return {
    //         ...post,
    //         comments : filteredData
    //       }

    //     });
    //     console.log(postUpdated);
    // })

    // if(this.posts.length && this.comments.length) {
    //   console.log(this.posts);
    //   console.log(this.comments);
    // }

    // let postUpdated = this.posts.map((post: any) => {
    //   let filteredData = this.comments.filter((comment: any) => comment.postId == post.id)
    //   return {
    //     ...post,
    //     comments : filteredData
    //   }

    // });
    // console.log(postUpdated);
  }

  ngOnDestroy(): void {
    clearInterval(this.bannerInterval);
  }
}
