import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestionList } from '../action/index';
import Cards from '../component/cards';


export default function Home() {

  const dispatch = useDispatch();

  const objQuestions = useSelector((state) => state.questionList)
  // [  {id: 19, textEn: "I experience...", textEs: null, textJp: null}   {} {} {} ...  ]
  // arreglo del objeto entero

  // ordeno el array x id
  let questionSort = objQuestions.sort( function (a, b){
    if (a.id < b.id) {return -1;}
    if (a.id > b.id) {return 1;}
    return 0;
  })
  
 
  //console.log(questionSort)

  useEffect(() => {
    dispatch(getQuestionList())
  }, []);



  return (

    <div className="container">
        <h1>Estamos en Home, mostramos tooodo el formulario</h1>

      {
        questionSort &&
        <Cards
          question={questionSort} />
      }

    </div>


  );
}

