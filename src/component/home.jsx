import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getQuestionList } from '../action/index';
import Results from './results';


export default function Home() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuestionList())
  }, []);


  const allQuestions = useSelector((state) => state.questionList)
  const questions = allQuestions.map(q => q.textEn)

  const navigate = useNavigate();

  const [questionIndex, setQuestionIndex] = useState(0); // recorre el array de obj
  const [segundos, setSegundos] = useState(35); // maneja el reloj 
  const [activo, setActivo] = useState(true); // maneja el reloj 
  const [checked, setChecked] = useState(false) // marca opción x defecto
  const [results, setResults] = useState([]) // concateno los 77 resultados
  let arrResults = results
  console.log(results)

  // MANEJA EL TIMER
  useEffect(() => {

    let intervalo = 35

    if (activo) {
      intervalo = setInterval(() => {
        setSegundos(segundos => segundos - 1);
      }, 1000);
    }

    if (segundos === 1) {
      let score = '0';
      setChecked(true)
    }

    if (segundos === 0) {
      handleClickCambio();
    }
    return () => clearInterval(intervalo);

  }, [activo, segundos, results, checked]);


  function reset() {
    setSegundos(35);
    setActivo(true);
    setChecked(false)
  }

  const handleClickCambio = (e) => {
    /* if (questionIndex + 1 < allQuestions.length) { */
    if (questionIndex + 1 < questions.length) {
      /*  if (questionIndex + 1 < 77) { */
      setQuestionIndex(questionIndex + 1);

      if (segundos === 0) { // para el caso en q no tengo evento => e.target.value
        const memory = {
          id: questions[questionIndex],
          score: '0',
          time: 35 - segundos
        }
        setResults((prevResults) => prevResults.concat(memory))
      } else {
        const memory = {
          id: questions[questionIndex],
          score: e.target.value,
          time: 35 - segundos
        };
        setResults((prevResults) => prevResults.concat(memory))
      }
      reset();
    } else { // si no tengo más preguntas
      navigate("/results");
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Trivia Completada Exitosamente!')
    navigate("/results");
  }

  return (

    <div className="container text-center m-5">

      <h1>Question List</h1>

      <form onSubmit={e => handleSubmit(e)} >

        <div className="card m-5" style={{ width: "18rem;" }} >
          <div className="card-body m-3">

            {/* <h3 class="card-title">{allQuestions[questionIndex].textEn}</h3> */}
            <h3 class="card-title">{questions[questionIndex]}</h3>
            <br />

            <div className="time">
              <span>Time : </span>{segundos}s <br /> <br />
            </div>

            <h6 className="card-subtitle mb-2 text-muted">Question: {questionIndex + 1}/77</h6> <br />

            <div className="card-text">

              <div className="form-check form-check-inline form-check-reverse">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id='6' value='6' aria-label="option6"
                  onClick={e => handleClickCambio(e)} />
                <label className="form-check-label" for='6'>I Agree</label>
              </div>
              <div className="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id='5' value='5' aria-label="option5"
                  onClick={e => handleClickCambio(e)} />
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id='4' value='4' aria-label="option4"
                  onClick={e => handleClickCambio(e)} />
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id='0' value='0' aria-label="option0"
                  onClick={e => handleClickCambio(e)}
                  checked={checked} />
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id='3' value='3' aria-label="option3"
                  onClick={e => handleClickCambio(e)} />
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id='2' value='2' aria-label="option2"
                  onClick={e => handleClickCambio(e)} />
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id='1' value='1' aria-label="option1"
                  onClick={e => handleClickCambio(e)} />
                <label className="form-check-label" for='1'>I don't Agree</label>
              </div>


            </div>
          </div>
        </div>

      </form>
      {
          <Results
            results={arrResults}
          />
        }
    </div>
  )

}

