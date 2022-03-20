import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {

    //Atualiza banner---------------------------------------------------
    let lista = ["background-image: url(../../../assets/images/casa1.jpg);",
      "background-image: url(../../../assets/images/casa2.jpg);",
      "background-image: url(../../../assets/images/casa0.jpg);"
    ]

    let ind: number = 0

    let wow: any = document.getElementById("wow");
    let opacity = 0;
    let opacityS = 0;
    let banner: any = document.getElementById("banner");

    setTimeout(changeImg, 6000)

    function changeImg() {
      setTimeout(opacityM, 25)
    }

    function opacityM() {
      if (wow.getAttribute("style") != "opacity:100%") {
        opacity += 10;
        wow.setAttribute("style", "opacity:" + opacity + "%");
        return setTimeout(opacityM, 25);
      } else {
        return nextImg();
      }
    }

    function opacityL() {
      if (wow.getAttribute("style") != "opacity:0%") {
        opacity -= 10;
        opacityS--;
        wow.setAttribute("style", "opacity:" + opacity + "%");
        return setTimeout(opacityL, 25);
      } else {
        return setTimeout(changeImg, 6000)
      }
    }

    function nextImg() {
      banner.setAttribute("style", lista[ind]);
      ind++;
      if (ind > 2) {
        ind = 0;
      }
      return setTimeout(opacityL, 25);
    }

    //canvas----------------------------------------------------------------------
    let square: any = document.getElementById("linha");
    let lines = square.getContext("2d");

    lines.moveTo(5, 7.2);
    lines.lineTo(25, 7.2)
    lines.lineWidth = 3;
    lines.strokeStyle = "#FCD3A2"
    lines.stroke();

    lines.moveTo(5, 15);
    lines.lineTo(25, 15)
    lines.lineWidth = 3;
    lines.strokeStyle = "#FCD3A2"
    lines.stroke();

    lines.moveTo(5, 22.5);
    lines.lineTo(25, 22.5)
    lines.lineWidth = 3;
    lines.strokeStyle = "#FCD3A2"
    lines.stroke();

  }

  //Barra categorias---------------------------------------------------------------
  public barraOff(): void {
    let linkBar: any = document.getElementById("barLinks");
    linkBar.removeAttribute("style");
  }

  public bar(): void {
    let linkBar: any = document.getElementById("barLinks");
    linkBar.setAttribute("style", "display:block;");
    linkBar.addEventListener("mouseleave", this.barraOff);
  }

  //footer flash

  public ft: boolean = false;

  public fAnimation(): void {
    let time: number;
    if (!this.ft) {
      time = 700;
      this.ft = true;
    } else {
      time = 300;
    }
    window.scrollTo(0, 9000);
    //setTimeout(() => {
      let fBlock: any = document.getElementById("fa");
      setTimeout(() => {
        fBlock.setAttribute("class", "wowFooter");
        fBlock.removeAttribute("style")
        let remove = function () {
          fBlock.removeAttribute("class");
          fBlock.setAttribute("style", "display:none")
        }
        setTimeout(remove, 500);
      }, time);

    //}, 100)
  }

}
