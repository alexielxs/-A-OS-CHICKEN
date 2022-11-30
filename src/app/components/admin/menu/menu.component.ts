import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

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
}

