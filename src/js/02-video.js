import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

const onPlay = function ({ seconds }) {
    console.log("start", seconds);
    localStorage.setItem('videoplayer-current-time', seconds);    
};

const newTime = localStorage.getItem("videoplayer-current-time");

// console.log('log', newTime);

player.setCurrentTime(JSON.parse(newTime || 0));

player.on('timeupdate', throttle(onPlay, 1000));

