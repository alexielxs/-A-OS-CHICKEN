import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
/*animacion() {
  // MenuToggle
  const toggle = document.querySelector('.toggle');
  let navigation = document.querySelector('.navigation');
  let main = document.querySelector('.main');

  toggle.onclick =function(){
      navigation.classList.toggle('active');
      main.classList.toggle('active');
  }

  // add hovered class in selected list item
  let list = document.querySelectorAll('.navigation li');
  function activeLink(){
      list.forEach((item) =>
      item.classList.remove('hovered'));
      this.classList.add('hovered');
  }
  list.forEach((item) =>
  item.addEventListener('mouseover',activeLink));
}*/

  animacionclic()
  {
    let toggle = document.querySelector('.toggle') as HTMLElement;
    let navigation = document.querySelector('.navigation') as HTMLElement;
    let main = document.querySelector('.main') as HTMLElement;
    if (toggle != null)
    {

      toggle.onclick =function()
      {
          navigation.classList.toggle('active');
          main.classList.toggle('active');
      }
    }
    else return;

    // add hovered class in selected list item
    /*let list = document.querySelectorAll('.navigation li');
    function activeLink(){
        list.forEach((item) =>
        item.classList.remove('hovered'));
        //this.classList.add('hovered');
    }
    list.forEach((item) =>
    item.addEventListener('mouseover',activeLink));*/
  }
  
  salir()
  {
    localStorage.removeItem("datos")
  }
}

