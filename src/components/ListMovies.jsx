import React, {useState} from 'react'
import { FirebaseApp } from 'firebase/app'

//import React, { Components }  from 'react';
import {collection, getDocs} from 'firebase/firestore'
import { db } from ' ../lib/init-firebase'
import { useEffect } from 'react'

// import firebase from "firebase/compat/app"
// import "firebase/compat/auth"
// import "firebase/compat/firestore"
// other services is needed

export default function ListMovies(){        
    const  [movies,setMovies] = useState([])

    useEffect(() => {
        getmovies()
    },[])

    useEffect(() => {
        console.log(movies)
    },[movies])

    function getmovies() {
        const moviecollectionRef = collection(db,'movies')
        getDocs(moviecollectionRef)
        .then(response=>{
            console.log(response)
            const movs = response.docs.map(doc =>({
                data:doc.data(),
                id:doc.id,
            }))
            setMovies(movs)

        })
        .catch(error=>console.log(error.message))
    }
    return (
        <div>
            <h4>ListMovies</h4>
            <button onClick={() => getmovies()}>Resfresh movies</button>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>{movie.data.name}</li>
                ))}

            </ul>
        </div>
    )
}