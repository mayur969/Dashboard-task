import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../shared/services/api-services";
import { MatDialog } from "@angular/material/dialog";
import { EditDialogComponent } from "src/app/shared/dialog/edit-dialog-component/edit-dialog.component";
import { DeleteDialogComponent } from "src/app/shared/dialog/delete-dialog-component/delete-dialog.component";


@Component({
    selector: 'app-bottom-grid',
    templateUrl: './bottom-grid.component.html'
})

export class AppBottomGridComponent implements OnInit{
    userData: any;
    records: any;
    pageNumber: number;
    pages: number;
    pagesCount: string;

    constructor(private apiService: ApiService, public dialog: MatDialog){
        this.pageNumber = 1;
        this.pagesCount = '';
    }
    ngOnInit(){
        this.apiService.getApi("https://1.api.fy23ey04.careers.ifelsecloud.com").subscribe((data) => {
            this.userData = data;
            this.pagination(this.pageNumber);
        });
    }

    pagination(pageNum){
        this.records = this.userData?.grid_data.slice((pageNum*10)-10, (pageNum*10));
        this.pagesCount = '';
        this.pages= Math.ceil(this.userData.grid_data.length/10);

        for(let i=0; i < this.pages; i++){
            this.pagesCount += `
            <div class="page"><span class="${i+1 === this.pageNumber? 'active': ''}">${i+1}</span></div>
            `
        }
    }

    nextPage(){
        this.pageNumber += 1;
        if(this.pageNumber > this.pages){
            this.pageNumber = this.pages;
        }else{
            this.pagination(this.pageNumber)
        }
    }

    prevPage(){
        this.pageNumber -= 1;
        if(this.pageNumber > 0){
            this.pagination(this.pageNumber)
        }else{
            this.pageNumber = 1;
        }
        console.log(this.pageNumber)
    }

    toggleCheckbox(e){
        for(let dataId of this.userData.grid_data){
            var checkbox = document.getElementById(`${dataId.id}`) as HTMLInputElement;
            checkbox.checked = e.target.checked;
        }
        console.log("hello")
    }

    hello(id){
        console.log("hello", id)
    }

    deleteEle(user, index){
        console.log(index)
        const dialogRef = this.dialog.open(DeleteDialogComponent, {
            width: '600px', 
            data: user,
        });
        
        dialogRef.afterClosed().subscribe(result => {
            console.log('Dialog closed with result:', result);
            if(result === "delete"){
                this.userData.grid_data.splice(index, 1);
                this.pagination(this.pageNumber);
            }
          });
    }

    editEle(id){
        console.log(id)
        this.dialog.open(EditDialogComponent, {
            width: '400px', 
            data: id,
          });
    }


}