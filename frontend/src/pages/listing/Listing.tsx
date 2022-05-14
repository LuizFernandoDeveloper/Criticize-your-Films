

import axios from "axios";
import MovieCards from "components/MovieCards";
import Pagination from "components/pagination/";

function Listing() {

    //FORMA ERRADA PARA TESTE
    axios.get('http://localhost:8080/movies/2')
    .then( response => {

        console.log(response.data);
    });

    return (
        <>
            <Pagination />
            <div className="container" >
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCards />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCards />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCards />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCards />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCards />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCards />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCards />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCards />
                    </div>
       
            
                </div>
            </div>


        </>


    );
}

export default Listing;