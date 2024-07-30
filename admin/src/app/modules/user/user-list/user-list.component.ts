import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserAddComponent } from '../user-add/user-add.component';
import { UserService } from '../service/user.service';
import { UserEditComponent } from '../user-edit/user-edit.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  USERS:any = [];
  isLoading:any = null;
  constructor(
    public modalService: NgbModal,
    public userServices: UserService,
  ) { }

  ngOnInit(): void {
    this.isLoading = this.userServices.isLoading$;

    this.userServices.listUsers().subscribe((resp:any) => {
      console.log(resp);
      this.USERS = resp.users.data;
    })
  }

  openModalCreateUser(){
    const modalRef = this.modalService.open(UserAddComponent, {centered: true, size: 'md'});

    modalRef.componentInstance.UserC.subscribe((User:any) => {
      console.log(User);
      this.USERS.unshift(User);
    })
  }

  editUser(USER:any){
    const modalRef = this.modalService.open(UserEditComponent, {centered: true, size: 'md'});
    modalRef.componentInstance.user = USER;

    modalRef.componentInstance.UserE.subscribe((User:any) => {
      console.log(User);
      let INDEX = this.USERS.findIndex((item:any) => item.id == User.id);
      this.USERS[INDEX] = User;
    })
  }
}
