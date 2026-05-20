/**
 * Abstraction: Not real implementation but a shape or structure where it is hidden and can be use for further modification. Mean I have idea of the structure but not real implementation is clear.



 */


// two ways of doing abstraction
// 1. interface
// 2. abstract class

// idea of these function but what they do we don't know.
interface MediaPlayer {
    play(): void;
    pause(): void;
    stop(): void;
}

// inmplementaion

class MusicPlayer implements MediaPlayer{
    play(){
        console.log(`Playing music...`);
    }

    pause(){
        console.log(`Music paused...`);
    }

    stop(){
        console.log(`Music stopped`);
    }

}


const myPlayer = new MusicPlayer(); // creating instance
myPlayer.play();

//leader class-> other class will follow it's implementation.



abstract class MediaPlayerAbstract {
    abstract play(): void;
    abstract pause(): void;
    abstract stop(): void;

}

// create some child as we can not create instance of the abstract class. But we can follow it by creating child class.

class AbstractMediaPalyerChild extends MediaPlayerAbstract {
    play(){
        console.log(`Playing music...`);
    }

    pause(){
        console.log(`Music paused...`);
    }

    stop(){
        console.log(`Music stopped`);
    }
   
}

//now create instance

const myAbstracMediaPlayer = new AbstractMediaPalyerChild();

myAbstracMediaPlayer.play();

 