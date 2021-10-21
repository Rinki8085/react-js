import React from 'react';
import './Search.css';

const Search = () => {
    return(
        <div class="container-fluid maincontainer"> 
            <button onclick="changeMode()">DarkMode</button>        
            <div class="clearfix">  
                <div class="p-3 float-right">
                <button type="button" class="btn btn-outline-light text-light;">Log In</button>
                <button type="button" class="btn btn-outline-light text-light;">Create an account</button>
                </div>
            </div>

            <div class="p-1 d-flex justify-content-center">
                <span class="mb-3 d-flex justify-content-center logo">e!</span>
            </div>

            <div class="container d-flex justify-content-center heading">
                Find The Best Restaurent, Cafes and Bars
            </div>

            <div class="container d-flex justify-content-center">
                
                <form>
                    <select style={{width:'40%'}} name="Location" id="city" class="custom-select" onchange="recommend()">
                    <option selected> Select Location </option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Pune">Pune</option>
                    <option value="Amrsteden">Amrsteden</option>
                    <option value="Kolkata">Kolkata</option>
                    </select>

                    <select style={{width:'58%'}} name="Restaurent_Places" class="custom-select">
                    <option selected> Select Restaurent</option>
                    <option value="Wow Momos">Wow Momos</option>
                    <option value="Pizza Hut">Pizza Hut</option>
                    <option value="Mehman">Mehman</option>
                    <option value="Awantika">Awantika</option>
                    </select>
                </form>

            </div>

        </div>
    )
}

export default Search;