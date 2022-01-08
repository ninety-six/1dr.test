"use strict";

// Course Card Progress
const progressPath = document.querySelector('#icon--progress #progress-bar');

let pathLength = progressPath.getTotalLength();
let percent = document.querySelector('.course-card__progress').dataset.percentage;

if(progressPath){
    window.onload = () => {
        progressPath.animate([
            // keyframes
            {
                strokeDasharray: pathLength + ' ' + pathLength,
                strokeDashoffset: pathLength
            },
            { strokeDashoffset: pathLength * ((100 - percent) / 100) }
        ], {
            // timing options
            duration: 1000,
            easing: 'ease-in-out',
            iterations: 1,
            direction: 'alternate',
            fill: 'forwards'
        });
    };
}