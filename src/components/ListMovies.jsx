import React, {useState} from 'react'
// import { FirebaseApp } from 'firebase/app'

//import React, { Components }  from 'react';
import {collection, getDocs} from 'firebase/firestore'
import db from '../lib/init-firebase'
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

    // useEffect(() => {
    //     console.log(movies)
    // },[movies])

    async function getmovies() {
        const moviecollectionRef = collection(db,'movies')
        const movieSnapshot = await getDocs(moviecollectionRef);
        const movies = movieSnapshot.docs.map(doc => doc.data());
        setMovies(movies)
    }
    return (
        <div>
            <h4>ListMovies</h4>
            <button onClick={() => getmovies()}>Resfresh movies</button>
            <ul>
                {movies.map(movie => (
                    <li key={movie.name}>{movie.name}</li>
                ))}

            </ul>
        </div>
    )
}