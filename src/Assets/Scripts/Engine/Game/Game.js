import Timer from "../Utils/Timer.js";
import LoadingScene from "../Scenes/LoadingScene.js";
import MainMenuScene from "../Scenes/MainMenuScene.js";
import SceneGame from "../Scenes/SceneGame.js";
import EventManager from '../Event/EventManager.js';
import * as gf from '../Utils/gf.js';
import SceneStats from "../Scenes/SceneStats.js";
export default class Game{
    constructor(config){
        this.config = config;
        this.container = document.querySelector(config.container);
        this.canvas = Object.assign(document.createElement('canvas'), {
            width:config.width,
            height:config.height,
            className: 'gamecanvas'});
        this.container.appendChild(this.canvas);
        this.eventManager = new EventManager(document);

        ['keydown','keyup'].forEach(eventName => {
            document.addEventListener(eventName,event => {
                this.eventManager.fireEvent({ name: eventName,event: event});
            });
        });
        this.canvas.addEventListener('click',event => {
            this.eventManager.fireEvent({ 
                name    : 'click',
                event   : event
            });
        });

        this.toLoadingScene();
        if(this.config.width < 400) {
            config.framerate = config.framerate/2;
        }
        this.Timer = new Timer(config.framerate, this, true);
        this.enablePhoneControls();
    }
    update(time) {
        if(this.Timer.p == false){
            this.time = time;
            this.framesPassedTillNow++;
            this.timeHMS = this.timeInHourFormat(time);
            if(this.scene){
                try{
                    this.scene.update(time);
                    this.scene.draw( gf.getCtx(this.canvas));
                }
                catch(e){
                    console.log(e);
                    this.Timer.stop();
                }
            }
            else{
                this.Timer.stop();
            }
        }
    }
    timeInHourFormat(seconds){
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        minutes = Math.floor(minutes % 60);
        seconds = Math.floor(seconds % 60);
        return `${hours < 10 ? '0' : ''}${hours}:`+
        `${minutes < 10 ? '0' : ''}${minutes}:`+
        `${seconds < 10 ? '0' : ''}${seconds}`;
    }
    toLoadingScene() {
        this.scene = new LoadingScene(this);
        this.eventManager.clear();
        this.eventManager.sub(this.scene);
	}
    toScene(scene){
        this.scene = scene;
        this.eventManager.clear();
        this.eventManager.sub(this.scene);
    }
    toMainMenuScene(){
        if(this.mainmenuscene){
            this.scene = this.mainmenuscene;
        }
        else{
            this.mainmenuscene = new MainMenuScene(this);
            this.scene = this.mainmenuscene;
        }
        this.eventManager.clear();
        this.eventManager.sub(this.scene);
    }
    toGameScene(){
        if(this.gamescene){
            this.scene = this.gamescene;
        }
        else{
            this.gamescene = new SceneGame(this);
            this.scene = this.gamescene;
        }
        this.eventManager.clear();
        this.eventManager.sub(this.scene);
    }
    toSceneStats(){
        if(this.statScene){
            this.scene = this.statScene;
        }
        else{
            this.statScene = new SceneStats(this);
            this.scene = this.statScene;
        }
        this.eventManager.clear();
        this.eventManager.sub(this.scene);
    }
    enablePhoneControls(){
        if(this.config.width > 400) return;
        var table = Object.assign(document.createElement('div'), {className: 'controls_container'});
        table.innerHTML = `<table>
        <tr><td id='q'>q</td><td id='w'>w</td><td id='e'>e</td><td class="padding"></td><td id='space'>space</td> </tr>
        <tr><td id='a'>a</td><td id='s'>s</td><td id='d'>d</td><td class="padding"></td><td id='f'>f</td></tr></table>`;
        this.container.appendChild(table);
        var controltds = gf.getDomElements('.controls_container td');
        for(let i = 0 ; i < controltds.length;i++){
            controltds[i].addEventListener('click',event => {
                this.eventManager.fireEvent({ 
                    name    : 'control',
                    event   : {key:controltds[i].id}
                });
            });
            controltds[i].addEventListener('touchstart',event => {
                this.eventManager.fireEvent({ 
                    name    : 'controlts',
                    event   : {key:controltds[i].id}
                });
            });
            controltds[i].addEventListener('touchend',event => {
                this.eventManager.fireEvent({ 
                    name    : 'controlte',
                    event   : {key:controltds[i].id}
                });
            });
        }
    }
}