import { Http } from '@angular/http';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { a } from '@angular/core/src/render3';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  foto: any[];
  fotoDetail: any[] = [];
  item: any[] = [];
  groundImage: any[] = [];
  url = 'https://api.myjson.com/bins/jpfmg';
  evaluationRequest = 'https://demo0929535.mockable.io/evaluate';

  constructor(private http: Http) {
   this.http.get(this.url).subscribe(res => {
     this.foto = res.json();
    //   this.foto.sort(function(a, b) {
    //     const dateA = new Date(a.timestamp).getTime(), dateB = new Date(b.timestamp).getTime();
    //     console.log(dateA);
    //     console.log(dateB);
    //     return dateB - dateA;
    // });
    this.foto.forEach(element => {
        this.item.push(element.photos);
     });

    for (let index = 0; index < this.item.length; index++) {
      const element = this.item[index];
      for (let j = 0; j < element.length; j++) {
        const newItem = element[j];
        if (newItem.direction === 'ground') {
          this.groundImage.push(newItem.url);
        }
      }
    }
 });
 this.fotoDetail = [];
}

  ngOnInit() {
  }

  getDetails(detail) {
    for (let index = 0; index < detail.photos.length; index++) {
      this.fotoDetail.push(detail.photos[index]);
      this.groundImage = [];
    }
  }

  onEvaluate(input: HTMLInputElement) {
    const comment = {title: input.value};
    console.log(comment);
    this.http.post(this.evaluationRequest, JSON.stringify(comment)).subscribe(response => {
      alert('Comment Saved Successfully');
    });
  }
}
