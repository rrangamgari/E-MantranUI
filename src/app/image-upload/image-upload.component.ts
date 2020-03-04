import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpEventType} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {

  userId: string = null;
  fileData: File = null;
  previewUrl: any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
  }

  ngOnInit() {
  }

  fileProgress(fileInput: any) {
    this.fileData = <File> fileInput.target.files[0];
    this.preview();
  }

  preview() {
    // Show preview
    // tslint:disable-next-line:prefer-const
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    // tslint:disable-next-line:prefer-const
    var reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = (_event) => {
      this.previewUrl = reader.result;
      localStorage.setItem('previewUrl', this.previewUrl);
    }
  }


  onSubmit() {

    this.userId = this.route.snapshot.queryParamMap.get('userId');
    const formData = new FormData();
    formData.append('file', this.fileData);
    console.log(formData);
    this.fileUploadProgress = '0%';

    this.http.post('/api/file/uploadFile/' + this.userId, formData, {
      reportProgress: true,
      observe: 'events',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('access_token'),
        'Access-Control-Allow-Origin': '*'
      }
    })
      .subscribe(events => {
        if (events.type === HttpEventType.UploadProgress) {
          this.fileUploadProgress = Math.round(events.loaded / events.total * 100) + '%';
          console.log(this.fileUploadProgress);
        } else if (events.type === HttpEventType.Response) {
          this.fileUploadProgress = '';
          console.log(events.body);
          alert('SUCCESS !!');
        }

      })
  }
}
