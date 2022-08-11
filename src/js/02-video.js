import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

const onPlay = function ({ seconds }) {    
    localStorage.setItem(STORAGE_KEY, seconds);    
};

const newTime = localStorage.getItem(STORAGE_KEY);

player.setCurrentTime(JSON.parse(newTime || 0));

player.on('timeupdate', throttle(onPlay, 1000));

