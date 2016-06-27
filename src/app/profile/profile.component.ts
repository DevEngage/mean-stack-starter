import { Component, OnInit } from '@angular/core';
// import { RSVP } from 'rxjs';

@Component({
  moduleId: module.id,
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css']
})
export class ProfileComponent {

    filesToUpload: Array<File>;
 
    constructor() {
        this.filesToUpload = [];
    }
 
    upload() {
        this.makeFileRequest("http://localhost:3000/upload", [], this.filesToUpload, (success, err) => {
            if (success) console.log(success);
            if (err) console.log(err);
        });
    }
 
    fileChangeEvent(fileInput: any){
        this.filesToUpload = <Array<File>> fileInput.target.files;
    }
 
    makeFileRequest(url: string, params: Array<string>, files: Array<File>, cb) {
      var formData: any = new FormData();
      var xhr = new XMLHttpRequest();
      for(var i = 0; i < files.length; i++) {
        formData.append("photos", files[i], files[i].name);
      }
      xhr.onreadystatechange = function () {
          if (xhr.readyState == 4) {
              if (xhr.status == 200) {
                  cb(JSON.parse(xhr.response), null);
              } else {
                  cb(null, xhr.response);
              }
          }
      }
      xhr.open("POST", url, true);
      xhr.send(formData);
    }

}
