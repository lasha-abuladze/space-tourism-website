`use strict`





const explorBtnDiv = document.querySelector(`.explor-button--div`);
const explorBtn = document.querySelector(`.explor-btn`);

const openMenuBtn = document.querySelector(`.btn-openMenu`);
const closeMenuBtn = document.querySelector(`.close-btn`);
const mainNavigation = document.querySelector(`.main-navigation`);



const planetsArr = document.querySelectorAll(`.planet-name--li`);
const planetsInf = document.querySelector(`.planets-hgroup`);


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




document.addEventListener(`click`, (e) => {

    let planetName = ``;

    if(e.target.classList.contains(`planet-inp--label`)) {

        planetName = e.target.textContent;

        fetch(`./planets.json`).then(res => res.json()).then(data => {

            const arr = Array.from(data.planetsArr)

            arr.forEach(el => {
                if(el.planetName === `${planetName}`) {
                    planetsInf.textContent = ``;

                    const html = `
                                    <h2>${el.planetName}</h2>

                                    <p>
                                        ${el.about}
                                    </p>

                                    <div class="distance-time">

                                        <div class="distance">
                                            <span>AVG. DISTANCE</span>
                                            <span>${el.distance}</span>
                                        </div>

                                        <div class="travel-time">
                                            <span>Est. travel time</span>
                                            <span>${el.travelTime}</span>
                                        </div>

                                    </div>
                                `
                    planetsInf.insertAdjacentHTML( `afterbegin`, html);
                    
                }
            })


            // const html = `
                
            //     <h2>moon</h2>

            //     <p>
            //         See our planet as you’ve never seen it before. 
            //         A perfect relaxing trip away to help regain 
            //         perspective and come back refreshed. While 
            //         you’re there, take in some history by visiting 
            //         the Luna 2 and Apollo 11 landing sites.
            //     </p>

            //     <div class="distance-time">

            //         <div class="distance">
            //             <span>AVG. DISTANCE</span>
            //             <span>384,400 km</span>
            //         </div>

            //         <div class="travel-time">
            //             <span>Est. travel time</span>
            //             <span>3 days</span>
            //         </div>

            //     </div>
            // `
        })

    }

    

    // console.log(planetName)
})



// fetch(`./planets.json`).then(res => res.json()).then(data => {
//     console.log(data)
// })