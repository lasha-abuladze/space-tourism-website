`use strict`



const explorBtnDiv = document.querySelector(`.explor-button--div`);
const explorBtn = document.querySelector(`.explor-btn`);

const openMenuBtn = document.querySelector(`.btn-openMenu`);
const closeMenuBtn = document.querySelector(`.close-btn`);
const mainNavigation = document.querySelector(`.main-navigation`);



explorBtn.addEventListener(`mouseenter`, () => {
    explorBtnDiv.classList.add(`explor-button--div-hover`);
} )

explorBtn.addEventListener(`mouseout`, () => {
    explorBtnDiv.classList.remove(`explor-button--div-hover`);
})

openMenuBtn.addEventListener(`click`, () => {
    mainNavigation?.classList.remove(`main-navigation--hidden`)
})

closeMenuBtn.addEventListener(`click`, () => {
    mainNavigation?.classList.add(`main-navigation--hidden`)
})

