/*  
    herb objects entries
    contains : 
        herb official name
        herb img for alchemy ingredient selection
        herb color for base transformation
            
*/
let herbs = [

    liferoot = {
        name: "liferoot",
        id: "liferoot",
        src: "herbs/Plant_1.png",
        color: "red",
    },
    wildvine = {
        name: "wildvine",
        id: "wildvine",
        src: "herbs/Plant_2.png",
        color: "blue",
    },
    sungrass = {
        name: "sungrass",
        id: "sungrass",
        src: "herbs/Plant_3.png",
        color: "orange",
    },
    swampweed = {
        name: "swampweed",
        id: "herb_",
        src: "herbs/Plant_4.png",
        color: "green",
    },
    poisonivy = {
        name: "poisonivy",
        id: "herb_",
        src: "herbs/Plant_5.png",
        color: "purple",
    },
];
/*
    potion object entries
    contains :
        potion full name
        potion identification number
        potion image source
        potion herb formula
*/
let potions = [
    majorhealth = {
        name: "Major Health Potion",
        id: 1,
        src: "beaker/beaker-red.png",
        formula: liferoot + wildvine,
    },
    majormana = {
        name: "Major Mana Potion",
        id: 2,
        src: "beaker/beaker-blue.png",
        formula: liferoot + sungrass,
    },
    invisible = {
        name: "Elixir of Invisibility",
        id: 3,
        src: "beaker/beaker-orange.png",
        formula: wildvine + sungrass,
    },

];

let herb1 = '';
let herb2 = '';

let left = document.querySelector('#left');
let right = document.querySelector('#right');

function herbalism() {

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

    // un ordered list items
    let items = document.querySelectorAll('.items');

    // for each [ items ]
    items.forEach(element => {

        // element [ items ] click event
        element.addEventListener('click', ()=> {

            // validate herb1 value
            if (herb1 === '') {

                // assign element id to herb 1
                herb1 = element.id;
                
                if (element.id === liferoot.id) {

                    // assign left image source to liferoot source
                    left.src = liferoot.src;

                    // test
                    console.log('herb left : liferoot');
                }
                if (element.id === wildvine.id) {
                    
                    // assign left image source to wildvine source
                    left.src = wildvine.src;

                    // test
                    console.log('herb left : wildvine');
                }
                if (element.id === sungrass.id) {
                    
                    // assign left image source to sungrass source
                    left.src = sungrass.src;

                    // test
                    console.log('herb left : sungrass');
                }

                // test
                console.log('herb 1 : ' + herb1);
            }
            // validate herb1 is not empty & is not already the sane id
            if (herb1 != '' && herb1 != element.id) {
                // assign element id to herb 2
                herb2 = element.id;

                if (herb2 === liferoot.id) {

                    // assign right image source to liferoot source
                    right.src = liferoot.src;

                    // test
                    console.log('herb right : liferoot');
                }
                if (herb2 === wildvine.id) {

                    // assign right image source to wildvine source
                    right.src = wildvine.src;

                    // test
                    console.log('herb right : wildvine');
                }
                if (herb2 === sungrass.id) {
                    // assign right image source to sungrass source
                    right.src = sungrass.src;

                    // test
                    console.log('herb right : sungrass');
                }

                // test
                console.log('herb 2 : ' + herb2);

                // test mix path
                console.log('mix : ' + herb1 + ' + ' + herb2); 

                // init function [ alchemy ]
                alchemy();        
                   
            }
        
        });

        
    });
}

herbalism();

function alchemy() {

    // alchemy potion image selector
    let beaker = document.querySelector('#beaker');

    // alchemy mix button selector
    let mix = document.querySelector('#mix');
    
    // mix button click event
    mix.addEventListener('click', ()=> {

        // test herb values
        console.log('mix H1 : ' + herb1);
        console.log('mix H2 : ' + herb2);

        // validate specific alchemy recipes
        if (herb1 === liferoot.id && herb2 === wildvine.id || herb1 === wildvine.id && herb2 === liferoot.id) {
            // apply major health potion image to vial
            beaker.src = majorhealth.src;

            // test
            console.log('POTION : health potion');

            // init function [ resetPanels ]
            resetPanels();
        }
        if (herb1 === liferoot.id && herb2 === sungrass.id) {
            // apply major mana potion image to vial
            beaker.src = majormana.src;

            // test
            console.log('POTION : mana potion');
        }
        if (herb1 === wildvine.id && herb2 === sungrass.id) {
            // apply invisible potion image to vial
            beaker.src = invisible.src;

            // test
            console.log('POTION : invisibility elixir');
        }

    });
    
    // test
    console.log('alchemy operation started');
}


