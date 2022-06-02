import React from 'react';


export default function Results({ results }) {
    console.log(results)
    return (

        <div className="container text-center">

            <h1 className='m-5 pt-5'><u>Final Results</u></h1>
            <ul><h4><strong>Id: </strong></h4>
                {
                    results?.map(r => {
                        return <li>{r.id}</li>
                    })
                }
            </ul>

            <ul><h4><strong>Score: </strong></h4>
                {
                    results?.map(r => {
                        return <li>{r.score}</li>
                    })
                }
            </ul>

            <ul><h4><strong>Time: </strong></h4>
                {
                    results?.map(r => {
                        return <li>{r.time}</li>
                    })
                }
            </ul>





        </div>
    )
}