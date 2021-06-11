// const potion = document.querySelector('#potion');

/*

    display empty potion element [ default state ]
    display herbalism ingredients list [ default state ]

    create herbalism plant properties objects [ herbalism object array ]
    
    
    add ingredient properties together [ experiment ]


*/

// define left & right workbench elements
const herb_left = document.querySelector('#left');
const herb_right = document.querySelector('#right');

// define left & right image elements
const img_left = document.createElement('img');
const img_right = document.createElement('img');

// define & create a button to attach the alchemy function
const btn = document.querySelector('#btn');
let createBtn = document.createElement('button');
createBtn.setAttribute('class', 'button');
createBtn.setAttribute('id', 'createBtn');

// create empty state [ empty workbench & default potion ]
function defaultState() {

    // select potion elementt
    let potion = document.querySelector('#potion');

    // empty potion image properties
    let img = document.createElement('img');
    img.style.height = '200px';
    img.style.width = '200px';
    img.src = 'beaker/beaker-default.png';
    // img.src = 'beaker-default-white.png';
    
    // append potion image to potion HTML element
    potion.appendChild(img);

    // apply max height & widths on selected herb images   
    herb_right.style.maxWidth = '200px';
    herb_left.style.maxWidth = '200px';
    herb_left.style.maxHeight = '100px';
    herb_right.style.maxHeight = '100px';
}
// init function [ defaultState ] : create onload listener on production build
defaultState();

/*
    herbalism objects array

    contains : 
        herb name
        herb img
        herb color

*/
let herbalism = [
    liferoot = {
        name: "liferoot",
        image: "herbs/Plant_1.png",
        color: "red",
        size: 100,
    },
    wildvine = {
        name: "wildvine",
        image: "herbs/Plant_2.png",
        color: "blue",
        size: 100,
    },
    sungrass = {
        name: "sungrass",
        image: "herbs/Plant_3.png",
        color: "orange",
        size: 100,
    },
    swampweed = {
        name: "swampweed",
        image: "herbs/Plant_4.png",
        color: "green",
        size: 100,
    },
    poisonivy = {
        name: "poisonivy",
        image: "herbs/Plant_5.png",
        color: "purple",
        size: 100,
        
    },
];


/*
    alchemy function

    validates a position for herbs on the workbench
    reactively assign an image of the selected herb
    creates a unique ID for each element
*/
function alchemy() {

    let herb_liferoot = document.querySelector('#liferoot');
    let herb_wildvine = document.querySelector('#wildvine');
    let herb_sungrass = document.querySelector('#sungrass');
    let herb_swampweed = document.querySelector('#swampweed');
    let herb_poisonivy = document.querySelector('#poisonivy');

    // validate herb [ liferoot ] image position
    herb_liferoot.addEventListener('click', ()=> {
        
        if (herb_left.firstElementChild === null) {
            
            // create an image element for the herb : liferoot
            img_left.src = liferoot.image;
            img_left.id = 'herb_liferoot';
            herb_left.appendChild(img_left);

            // test
            console.log('herb : LIFEROOT applied to left side');
        }
        else if (herb_right.firstElementChild === null) {

            // create an image element for the herb : liferoot
            img_right.src = liferoot.image;
            img_left.id = 'herb_liferoot';
            herb_right.appendChild(img_right);

            // test
            console.log('herb : LIFEROOT applied to right side');
        }
        else {

            img_left.id = '';
            img_right.id = '';
            // test
            console.log('workbech area is full');
            
            
        }
    
    });

    // validate herb [ wildvine ] image position
    herb_wildvine.addEventListener('click', ()=> {

        
        if (herb_left.firstChild === null) {
            
            // create an image element for the herb : wildvine
            img_left.src = wildvine.image;
            img_left.id = 'herb_wildvine';
            herb_left.appendChild(img_left);

            // test
            console.log('herb : WILDVINE applied to left side');

            // test
            console.log(herb_left.firstChild);

            
        }
        else if (herb_left.firstChild != null && herb_left.firstChild.id != 'herb_wildvine') {

            // create an image for the herb : wildvine
            img_right.src = wildvine.image;
            img_left.id = 'herb_wildvine';
            herb_right.appendChild(img_right);

            // test
            console.log('herb : WILDVINE applied to right side');
        }
        else {

            // create default conditions
            
        }
    
    });
    
    // validate herb [ sungrass ] image position
    herb_sungrass.addEventListener('click', ()=> {

        
        if (herb_left.firstChild === null) {
            
            // create an image element for the herb : sungrass
            img_left.src = sungrass.image;
            img_left.id = 'herb_sungrass';
            herb_left.appendChild(img_left);

            // test
            console.log('herb : SUNGRASS applied to left side');

            // test
            console.log(herb_left.firstChild);

            
        }
        else if (herb_left.firstChild != null && herb_left.firstChild.id != 'herb_sungrass') {

            // create an image for the herb : sungrass
            img_right.src = sungrass.image;
            img_left.id = 'herb_sungrass';
            herb_right.appendChild(img_right);

            // test
            console.log('herb : SUNGRASS applied to right side');
        }
        else {

            // create default conditions
            
        }
    
    });

    // // validate herb [ swampweed ] image position
    // herb_swampweed.addEventListener('click', ()=> {

        
    //     if (herb_left.firstChild === null) {
            
    //         // create an image element for the herb : swampweed
    //         img_left.src = swampweed.image;
    //         img_left.id = 'herb_swampweed';
    //         herb_left.appendChild(img_left);

    //         // test
    //         console.log('herb : SWAMPWEED applied to left side');

    //         // test
    //         console.log(herb_left.firstChild);

            
    //     }
    //     else if (herb_left.firstChild != null && herb_left.firstChild.id != 'herb_swampweed') {

    //         // create an image for the herb : swampweed
    //         img_right.src = swampweed.image;
    //         img_left.id = 'herb_swampweed';
    //         herb_right.appendChild(img_right);

    //         // test
    //         console.log('herb : SWAMPWEED applied to right side');
    //     }
    //     else {

    //         // create default conditions
            
    //     }
    
    // });

    // // validate herb [ poisonivy ] image position
    // herb_poisonivy.addEventListener('click', ()=> {

        
    //     if (herb_left.firstChild === null) {
            
    //         // create an image element for the herb : poisonivy
    //         img_left.src = poisonivy.image;
    //         img_left.id = 'herb_poisonivy';
    //         herb_left.appendChild(img_left);

    //         // test
    //         console.log('herb : poisonivy applied to left side');

    //         // test
    //         console.log(herb_left.firstChild);

            
    //     }
    //     else if (herb_left.firstChild != null && herb_left.firstChild.id != 'herb_poisonivy') {

    //         // create an image for the herb : poisonivy
    //         img_right.src = poisonivy.image;
    //         img_left.id = 'herb_poisonivy';
    //         herb_right.appendChild(img_right);

    //         // test
    //         console.log('herb : poisonivy applied to right side');
    //     }
    //     else {

    //         // create default conditions
            
    //     }
    
    // });

}

// init alchemy function
alchemy();

function alchemyExperiement() {

    let experiment1 = type1 + type2;
    let experiment2 = type1 + type3;
    let experiment3 = type2 + type3;


}

function resetState() {
    if (herb_left.firstChild == img) {
        herb_left.removeChild(img);
    }
        
}