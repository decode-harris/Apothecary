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


// function [ resetState ] : resets image view inside workbench
function resetState() {

    // remove workbench images from view
    img_left.remove();
    img_right.remove();

    // test
    console.log('STATE : reset');
        
}

const resetBtn = document.querySelector('#resetBtn');
resetBtn.addEventListener('click', ()=> {

    // init function [ reset state ] : resets workbench images
    resetState();

});

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
    herbalism function

    validates a position for herbs on the workbench
    reactively assign an image of the selected herb
    creates a unique ID for each element
*/
function herbalism() {

    // define & select the herbs for workbench validation
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
            img_right.id = 'herb_liferoot';
            herb_right.appendChild(img_right);

            // test
            console.log('herb : LIFEROOT applied to right side ' + img_right.id);
        }
        else {

            // revent image id's back to default
            // img_left.id = '';
            // img_right.id = '';

            // alert the user
            alert('workbech area is full!');
         
            // test
            console.log('workbech area is full');
        }
    
    });

    // validate herb [ wildvine ] image position
    herb_wildvine.addEventListener('click', ()=> {
        
        if (herb_left.firstElementChild === null) {
            
            // create an image element for the herb : wildvine
            img_left.src = wildvine.image;
            img_left.id = 'herb_wildvine';
            herb_left.appendChild(img_left);

            // test
            console.log('herb : WILDVINE applied to left side');
        }
        else if (herb_right.firstElementChild === null) {

            // create an image element for the herb : wildvine
            img_right.src = wildvine.image;
            img_right.id = 'herb_wildvine';
            herb_right.appendChild(img_right);

            // test
            console.log('herb : WILDVINE applied to right side');
        }
        else {

            // revent image id's back to default
            // img_left.id = '';
            // img_right.id = '';

            // alert the user
            alert('workbech area is full!');
         
            // test
            console.log('workbech area is full');
            
        }
    
    });

    // validate herb [ sungrass ] image position
    herb_sungrass.addEventListener('click', ()=> {
        
        // validate herb placement
        if (herb_left.firstElementChild === null) {
            
            // create an image element for the herb : sungrass
            img_left.src = sungrass.image;
            img_left.id = 'herb_sungrass';
            herb_left.appendChild(img_left);

            // test
            console.log('herb : sungrass applied to left side');
        }
        else if (herb_right.firstElementChild === null) {

            // create an image element for the herb : sungrass
            img_right.src = sungrass.image;
            img_right.id = 'herb_sungrass';
            herb_right.appendChild(img_right);

            // test
            console.log('herb : sungrass applied to right side');
            
        }
        else {

            // revent image id's back to default
            // img_left.id = '';
            // img_right.id = '';

            // alert the user
            alert('workbech area is full!');
         
            // test
            console.log('workbech area is full');
        }
    
    });

}

// init herbalism function
herbalism();

const alchemyBtn = document.querySelector('#alchemy');

alchemyBtn.addEventListener('click', ()=> {

    if (img_left.id != null && img_right.id != null) {
        console.log('LEFT : ' + img_left.id + ' + ' +  ' RIGHT : ' + img_right.id + ' = Major Healing Potion');
    }

    
    
})

function alchemy() {

    let potion_purple = 'beaker/beaker-purple.png';




    // let experiment1 = type1 + type2;
    // let experiment2 = type1 + type3;
    // let experiment3 = type2 + type3;


}

