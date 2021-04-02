import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CanvasService } from '../canvas.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit, AfterViewInit {

  constructor(private http: HttpClient,public cvs: CanvasService) { }

  @ViewChild('clear')public clearbtn?:ElementRef;
  class_name: string = ""
  height:number=0
  width:number=0
  context?:CanvasRenderingContext2D
  result=''
  imgurl=""
  classes = [ 'Flower', 'House', 'Pencil', 'Spoon', 'Sun', 'Tree', 'Umbrella']
  rubber=this.cvs.rubberOn;
  draw=this.cvs.draw;
  btnname=''
  lineWidth=5

  ngOnInit(): void {
      
  }

  ngAfterViewInit(){
    const btncls = this.clearbtn?.nativeElement;
    //btncls.addEventListener('click',clear)
  }

  view(context: CanvasRenderingContext2D){
    console.log("in play= ",context);
    this.context=context;
    //console.log("h=",height,"w=",width);
    
    //context.clearRect(0,0,0,0);
  }

  getW(wdth:number){
    console.log("width in play=",wdth);
    this.width=wdth;
  }

  getH(ht:number){
    console.log("height in play=",ht);
    this.height=ht;
  }

  cls(){
    console.log("cls clicked");
    
    this.context?.clearRect(0,0,this.width, this.height);
    this.result = ''
  }

  getImg(imgUri:string){
    console.log('save in play');
    this.imgurl=imgUri;
    console.log(imgUri);
  }

  test(){
    console.log('test clicked');
    
  }

  save(){
    console.log('yes');
    
    
    // this.http.get(environment.SERVER_URL+'/api/test' ,{responseType: 'text'})
    //   .subscribe((res:any)=>{
    //     console.log('result=',res);
    //     snd.play(); 
    //     alert(res);
    //   }) 
    var date = Date.now();
    var filename = this.class_name +'_' + date + '.png';
    console.log('image=', this.imgurl);
    this.http.post(
      environment.SERVER_URL +'/api/result',
      
      {filename, 'url': this.imgurl},
      {responseType: 'text'}
    ).subscribe((res: any)=>{
      console.log('result= ',res);
      this.result ='I Guess You Have Drawn ' + res;
      
    })
    
    
  }
  
}
