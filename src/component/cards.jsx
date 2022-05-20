import React from 'react';
//import MyTimer from './timer.jsx';


export default function Cards({ question }) {

    let opciones = [6, 5, 4, 0, 3, 2, 1];

    /* const time = new Date();
    time.setSeconds(time.getSeconds() + 35);  */


    return (

        <div class="container">


            {
                question.map((q) => {
                    return (


                        <div class="card m-3" style={{ width: "18rem;" }}>
                            <div class="card-body mt-2">
                                <h5 class="card-title">{q.textEn}</h5>

                                <h6 class="card-subtitle mb-2 text-muted">{q.id}/77</h6> <br />
                                
                                <div class="card-text">

                                    <div class="form-check form-check-inline form-check-reverse">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio6" value="option6" aria-label="option6" />
                                        <label class="form-check-label" for="inlineRadio6">Estoy de Acuerdo</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="" aria-label="option5" />
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="" aria-label="option4" />
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio0" value="" aria-label="option0" />
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="" aria-label="option3" />
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="" aria-label="option2" />
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" aria-label="option1" />
                                        <label class="form-check-label" for="inlineRadio1">No estoy de Acuerdo</label>
                                    </div>


                                </div>
                            </div>
                        </div>

                    )
                })
            }
        </div>

    )
}




// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

/* export default function Cards({ question }) {

    let opciones = [6, 5, 4, 0, 3, 2, 1];

    const time = new Date();
    time.setSeconds(time.getSeconds() + 35); 


    return (

        <div class="container">


            {
                question.map((q, index) => {
                    return (


                        <div class="card m-3" style={{ width: "18rem;" }}>
                            <div class="card-body mt-2">
                                <h5 class="card-title">{q}</h5>
                                <div>
                                    <MyTimer expiryTimestamp={time} />
                                </div>
                                <h6 class="card-subtitle mb-2 text-muted">{index + 1}/77</h6> <br />
                                <h6 class="card-subtitle mb-2 text-muted">Select an option</h6>
                                <div class="card-text">

                                    {
                                        opciones.map(op => {
                                            return (
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name={op} id={op} value={op} />
                                                    <label class="form-check-label" for={op}>{op}</label>
                                                </div>
                                            )

                                        })
                                    }


                                </div>
                            </div>
                        </div>

                    )
                })
            }
        </div>

    )
}

 */