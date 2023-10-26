import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-side-bar',
    templateUrl: './side-bar.component.html'
})

export class AppSideBarComponent implements OnInit {

    navList: Array<object> =[
        {
            id: "1",
            path: "../../../assets/img/nav-1.jpg"
        },
        {
            id: "2",
            path: "../../../assets/img/nav-2.jpg"
        },
        {
            id: "3",
            path: "../../../assets/img/nav-3.jpg"
        },
        {
            id: "4",
            path: "../../../assets/img/nav-4.jpg"
        },
        {
            id: "5",
            path: "../../../assets/img/nav-5.jpg"
        },
        {
            id: "6",
            path: "../../../assets/img/nav-6.jpg"
        },
        {
            id: "7",
            path: "../../../assets/img/nav-7.jpg"
        },
    ];
    constructor(){
        console.log(this.navList)
    }
    ngOnInit(): void {
        
    }

    

}

