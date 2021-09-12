import {Component, OnInit} from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
posts: Post[] = [
  {title: 'Want to learn Angular Components', text: 'I still learning components', id: 1},
  {title: 'Next block', text: 'About direction', id: 2}
]

  ngOnInit ():void {
  setTimeout(() => {
    console.log('Timeout')
    this.posts[0] = {
      title: 'Changed!',
      text: 'Changed!\'Changed!\'',
      id: 2
    }
  }, 5000)
  }

  updatePosts(post: Post){
  this.posts.unshift(post)

  }

  removePost(id: number) {
    console.log('id to remove', id)
    this.posts = this.posts.filter(p => p.id !== id)
  }



}
