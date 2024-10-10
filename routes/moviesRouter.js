//setup
import {request, response, Router} from "express";
import Movie from "../models/moviesModel.js";
const router = Router(); //initializing the new router - need this

//add new movie to the movieDB
router.post("/movies", async(req, res) => {
    try {
        const movie = new Movie(req.body); //if movie matches the body set a new movie
        const newMovie = await movie.save(); //new movie
        res.send({ //let's user know new movie was added
            response: "Move was successfully added", //me sending the response! 
            newMovie
        });

    } catch(error) {
        console.log(console.log(console.error.message));
    }
});

//read all movies
router.get("/movies", async (req, res) => {
    try {
        const allMovies = await Movie.find();
        console.log((allMovies))
        res.send({
            response: "Success",
            allMovies
        })
    } catch(error) {
        console.log(error.message);
        res.status(400).json({
            response: "Error",
            error: error.message
        })
    }

});



//read one movie
router.get("/movies/:title", async(req, res) => {
    try {
        const movie = await Movie.findOne({title: req.params.title});
        res.send({
            response: "Success",
            allMovies
        })
    } catch(error) {
        console.log(error.message);
        res.status(400).json({
            response: "Error",
            error: error.message
        })
    }
});

//update one movie - could use post, but can use put, one movie, so need the unique variable - see moviesModel for unique
router.put("/movies/:title", async(req, res) => {
    try {
        const movie = await Movie.findOneAndUpdate({title: req.params.title}, req.body, { new : true});
        res.send({
            response: "Success",
            movie
        })
    } catch(error) {
        console.log(error.message);
        res.status(400).json({
            response: "Error",
            error: error.message
        })
    }
});


//delete a movie
router.put("/movies/:title", async(req, res) => {
    try {
        const movie = await Movie.findOneAndDelete({title: req.params.title} );
        res.send({
            response: "Success",
            movie
        })
    } catch(error) {
        console.log(error.message);
        res.status(400).json({
            response: "Error",
            error: error.message
        })
    }
});


export default router; 