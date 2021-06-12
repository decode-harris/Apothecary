/*
    Application JS 

    An interactive apothecary that features inspiration
    from the world of warcraft professions herbalism & alchemy

        1. Display empty potion element [ default state ]
        2. Display herbalism ingredients list [ default state ]
        3. Create herbalism plant properties objects [ herbalism object array ]


        x. Add ingredient properties together [ alchemy function ]


*/

// define left & right workbench elements
const herb_left = document.querySelector('#left');
const herb_right = document.querySelector('#right');

// define left & right image elements
const img_left = document.querySelector('#img-left');
const img_right = document.querySelector('#img-right');


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
    img.id = 'beaker';
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


// function [ resetState ] : resets image view inside workbench
function resetState() {

    // remove workbench images from view
    // img_left.remove();
    // img_right.remove();

    // img_left.src = '';
    // img_right.src = '';

    // test
    console.log('STATE : reset');

    let beaker = document.querySelector('#beaker');

    // init function [ reset vial ]
    resetVial();
    
        
}

const resetBtn = document.querySelector('#resetBtn');
resetBtn.addEventListener('click', ()=> {

    // init function [ reset state ] : resets workbench images
    resetState();

});

// function [ resetVial ] : returns vial back to default view
function resetVial() {

    // reset beaker back to default
    let beaker = document.querySelector('#beaker');
    beaker.setAttribute('src', 'beaker/beaker-default.png');

    if (beaker.src != 'beaker/beaker-default.png') {
        beaker.src = 'beaker/beaker-default.png';

        // test
        console.log('reset vial color');
    }


}

/*
    herbs objects array*/
let herbs = [

    /*  
        herb objects entries
        contains : 
            herb official name
            herb img for alchemy ingredient selection
            herb color for base transformation
            herb size for applying height & width values
    */
    liferoot = {
        name: "liferoot",
        id: "liferoot",
        image: "herbs/Plant_1.png",
        color: "red",
        size: 100,
    },
    wildvine = {
        name: "wildvine",
        id: "herb_wildvine",
        image: "herbs/Plant_2.png",
        color: "blue",
        size: 100,
    },
    sungrass = {
        name: "sungrass",
        id: "herb_sungrass",
        image: "herbs/Plant_3.png",
        color: "orange",
        size: 100,
    },
    swampweed = {
        name: "swampweed",
        id: "herb_",
        image: "herbs/Plant_4.png",
        color: "green",
        size: 100,
    },
    poisonivy = {
        name: "poisonivy",
        id: "herb_",
        image: "herbs/Plant_5.png",
        color: "purple",
        size: 100,
        
    },
];

// set herbs as undefined || no value
let herb1 = '';
let herb2;

/*
    herbalism function

    validates a position for herbs on the workbench
    reactively assign an image of the selected herb
    creates a unique ID for each element
*/
// function herbalism() {

//     // define & select the herbs for workbench validation
//     let herb_liferoot = document.querySelector('#liferoot');
//     let herb_wildvine = document.querySelector('#wildvine');
//     let herb_sungrass = document.querySelector('#sungrass');
//     let herb_swampweed = document.querySelector('#swampweed');
//     let herb_poisonivy = document.querySelector('#poisonivy');

//     let left = document.querySelector('#left');
//     let right = document.querySelector('#right');

//     let items = document.querySelectorAll('.items');

//     items.forEach(element => {
//         element.addEventListener('click', ()=> {

//             herb1 = element.id;

//             console.log('herb 1 : ' + herb1);

            
//         });
//     });

    

//     // validate herb [ liferoot ] image position
//     herb_liferoot.addEventListener('click', ()=> {

//         // console.log();
        
//         console.log('herb 1 : ' + herb1);
        
//         if (herb1 === '') {
//             herb1 = liferoot.id;
//             left.src = liferoot.image;
//         }
//         else if (herb1 != '' || herb1 === liferoot.id) {
//             alert('please use a different herb to complete the potion');
//             return
            
//         }
//         else {
//             herb2 = liferoot.id;
//             right.src = liferoot.image;

//             console.log('herb1 not is liferoot');
//         }

//         console.log(herb1 + ' finalised function');
    
//     });

//     // validate herb [ wildvine ] image position
//     herb_wildvine.addEventListener('click', ()=> {

//         console.log('herb 1 : ' + herb1);
        
//         if (herb1 === '') {
//             herb1 = wildvine.id;
//             left.src = wildvine.image;
//         }
//         else if (herb1 != '' || herb1 === wildvine.id) {
//             alert('please use a different herb to complete the potion');
//             return
            
//         }
//         else {

//             right.src = wildvine.image;

//             console.log('herb1 not is liferoot');
//         }

//         console.log(herb1 + ' finalised function');

//         // if (left.src === wildvine.image) {
            
//         //     alert('please you a differnt herb to complete the potion!');
//         // }
//         // if (left.src != null && right.src === '') {
//         //     right.src = wildvine.image;
//         //     // test
//         //     console.log('img left : ' + left.src);
//         // }
//         // else {
//         //     left.src = wildvine.image
//         // }
        
//         // if (herb_left.firstElementChild === null) {
            
//         //     // create an image element for the herb : wildvine
//         //     img_left.src = wildvine.image;
//         //     img_left.id = 'herb_wildvine';
//         //     herb_left.appendChild(img_left);

//         //     // test
//         //     console.log('herb : WILDVINE applied to left side');
//         // }
//         // else if (herb_right.firstElementChild === null) {

//         //     // create an image element for the herb : wildvine
//         //     img_right.src = wildvine.image;
//         //     img_right.id = 'herb_wildvine';
//         //     herb_right.appendChild(img_right);

//         //     // test
//         //     console.log('herb : WILDVINE applied to right side');
//         // }
//         // else {

//         //     // revent image id's back to default
//         //     // img_left.id = '';
//         //     // img_right.id = '';

//         //     // alert the user
//         //     alert('workbech area is full!');
         
//         //     // test
//         //     console.log('workbech area is full');
            
//         // }
    
//     });



//     // // validate herb [ sungrass ] image position
//     // herb_sungrass.addEventListener('click', ()=> {
        
//     //     // validate herb placement
//     //     if (left.src) {
            
//     //         // create an image element for the herb : sungrass
//     //         img_left.src = sungrass.image;
//     //         img_left.id = 'herb_sungrass';
//     //         herb_left.appendChild(img_left);

//     //         // test
//     //         console.log('herb : sungrass applied to left side');
//     //     }
//     //     else if (herb_right.firstElementChild === null) {

//     //         // create an image element for the herb : sungrass
//     //         img_right.src = sungrass.image;
//     //         img_right.id = 'herb_sungrass';
//     //         herb_right.appendChild(img_right);

//     //         // test
//     //         console.log('herb : sungrass applied to right side');
            
//     //     }
//     //     else {

//     //         // revent image id's back to default
//     //         // img_left.id = '';
//     //         // img_right.id = '';

//     //         // alert the user
//     //         alert('workbech area is full!');
         
//     //         // test
//     //         console.log('workbech area is full');
//     //     }
    
//     // });




// }

// // init herbalism function
// herbalism();

const alchemyBtn = document.querySelector('#alchemy');

alchemyBtn.addEventListener('click', ()=> {

    // condense validation of ID's & potion selection
    if (img_left.id != null && img_right.id != null) {
        console.log('LEFT : ' + img_left.id + ' + ' +  ' RIGHT : ' + img_right.id + ' = Major Healing Potion');
    }

    // validate liferoot id
    if (img_left.id === liferoot.id) {

        // test
        console.log('INGREDIENT 1 : liferoot');
    }
    if(img_right.id === liferoot.id) {

        // test
        console.log('INGREDIENT 2 : liferoot');
    }
    // validate wildvine id
    if(img_left.id === wildvine.id) {
        
        // test
        console.log('INGREDIENT 1 : wildvine');
    }
    if(img_right.id === wildvine.id) {

        // test
        console.log('INGREDIENT 2 : wildvine');
    }
    // validate sungrass id
    if(img_left.id === sungrass.id) {
        
        // test
        console.log('INGREDIENT 1 : sungrass');
    }
    if(img_right.id === sungrass.id) {

        // test
        console.log('INGREDIENT 2 : sungrass');
    }


    // init function [ alchemy ]
    alchemy();
    
    
})

function alchemy() {

    // potion.firstElementChild.remove();

    let beaker = document.querySelector('#beaker');
    let potion_purple = 'beaker/beaker-purple.png';

    beaker.setAttribute('src', potion_purple);
    
    // let img = document.createElement('img');
    
    
    
    
    console.log('POTION COLOR : ' + potion_purple);
    

    

    // init function [ resetState ]
    // resetState();
}

