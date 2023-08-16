export default class Scene{
    constructor(main){
        this.main = main;
        this.Objects = [];
    }
    update(time){
        this.time = time;
        [...this.Objects].forEach(obj=>{
            if(obj.update) obj.update(time);
        });
        this.Objects = this.Objects.filter(x=> !x.delete);
    }
    draw(ctx){
        ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = "black";
        ctx.fillRect(0,0,ctx.canvas.width, ctx.canvas.height);
        [...this.Objects].forEach(obj=>{
            if(obj.draw) obj.draw(ctx);
        });
    }
    ss(scene){
        scene.main = this.main;
        this.main.toScene(scene);
    }
    notify(event){
        let name = event.name;
        let e = event.event;
        if(name == 'keydown' && this.keydown) this.keydown(e);
        else if(name == 'keyup' && this.keyup) this.keyup(e);
        else if(name == 'mousemove' && this.mousemove) this.mousemove(e);
        else if(name == 'click' && this.click) this.click(e);
        else if(name == 'control' &&this.control) this.control(e.key);
        else console.log(name);
    }
    mousemove(e){   }
    keyup(e){
        this.control(e.key);
    }
}


