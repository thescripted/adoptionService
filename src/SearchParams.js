import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";


const SearchParams = () => {
    const [location, updateLocation] = useState("Seattle, WA");
    const [breeds, updateBreeds] = useState([]);
    const [animal, AnimalDropdown] = useDropdown("Animal", "Dog", ANIMALS)
    const [breed, BreedDropdown] = useDropdown("Breed", "", breeds)
    return(
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input 
                      id="location" 
                      value={location} 
                      placeholder="Location"
                      onChange={e => updateLocation(e.target.value)} 
                    />
                </label>
                <AnimalDropdown />
                <BreedDropdown />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default SearchParams;