import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getQuestionList } from '../action/index';


export default function Home() {

  const dispatch = useDispatch();
  const history = useHistory()

  const objQuestions = useSelector((state) => state.questionList)
  const arrQuestions = objQuestions.map(q => q.textEn)

  const [questionIndex, setQuestionIndex] = useState(0);
  const [segundos, setSegundos] = useState(35);
  const [activo, setActivo] = useState(true);
  const [checked, setChecked] = useState(false)
  const [results, setResults] = useState({
    
    score: '',
    time: 0
  })

  //console.log(results)

  // TRAE TODA LA LISTA (una sola vez, sin dependencias)
  useEffect(() => {
    dispatch(getQuestionList())
  }, [])


  // MANEJA EL TIMER
  useEffect(() => {

    let intervalo = 35

    if (activo) {
      intervalo = setInterval(() => {
        setSegundos(segundos => segundos - 1);
      }, 1000);
    }

    if (segundos === 0) {
      setChecked(true)
      handleClickCambio();
    }

    return () => clearInterval(intervalo);
  }, [activo, segundos, questionIndex, checked]);


  function reset() {
    setSegundos(35);
    setActivo(true);
    setChecked(false)
  }


  // MANEJA LAS PREGUNTAS 
  /* useEffect(() => {
    if (arrQuestions) {
      let question = arrQuestions[questionIndex];
    }
  }, [questionIndex]) */

  const handleClickCambio = (e) => {
    e.preventDefault();
    if (questionIndex + 1 < arrQuestions.length) {
      setQuestionIndex(questionIndex + 1);
      reset()
      setResults({
        ...results,
        score: e.target.value,
        time: 3
      })
    } 

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Trivia Completada Exitosamente!')
    setResults({
      ...results,
      score: e.target.value,
      time: 3
    })
    history.push('/') // useHistory -> me redirecciona al inicio
  }



  return (

    <div className="container text-center m-5">

      <form  onSubmit={e => handleSubmit(e)} >

        <div className="card m-3" style={{ width: "18rem;" }} >
          <div className="card-body mt-2">

            <h5 class="card-title">{arrQuestions[questionIndex]}</h5>

            <div className="time">
              <span>Tiempo : </span>{segundos}s <br /> <br />
            </div>

            <h6 className="card-subtitle mb-2 text-muted">Pregunta: {questionIndex + 1}/77</h6> <br />

            <div className="card-text">

              <div className="form-check form-check-inline form-check-reverse">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id='6' value='6' aria-label="option6"
                  onClick={e=>handleClickCambio(e)} />
                <label className="form-check-label" for='6'>Estoy de Acuerdo</label>
              </div>
              <div className="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id='5' value='5' aria-label="option5"
                  onClick={e=>handleClickCambio(e)} />
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id='4' value='4' aria-label="option4"
                  onClick={e=>handleClickCambio(e)} />
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id='0' value='0' aria-label="option0"
                  onClick={e=>handleClickCambio(e)}
                  checked={checked} />
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id='3' value='3' aria-label="option3"
                  onClick={e=>handleClickCambio(e)} />
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id='2' value='2' aria-label="option2"
                  onClick={e=>handleClickCambio(e)} />
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id='1' value='1' aria-label="option1"
                  onClick={e=>handleClickCambio(e)} />
                <label className="form-check-label" for='1'>No estoy de Acuerdo</label>
              </div>


            </div>
          </div>
        </div>
        <br /> <br />
              {/* <p>Resultados parciales: {results}</p>  */}
      </form>

    </div>

  )

}

