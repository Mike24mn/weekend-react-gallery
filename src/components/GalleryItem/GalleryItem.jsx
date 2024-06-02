import React from "react";
import GalleryList from "../GalleryList/GalleryList";

function GalleryItem({ item, changeLike, showGal, toggleDescription}) {

    return (

      <tr key={item.id} data-testid="galleryItem">
        
        <td>{item.title}</td>
        <td>
        {showGal[item.id] ? item.description : <img src={item.url} />}
        </td>
        
        
          <td>
            {item.likes}
          </td> 

          
        

        <td>
          <button 
            data-testid="like"
            onClick={(event) => changeLike(item)}>
            Like
          </button>
          <button data-testid="toggle" onClick={() => toggleDescription(item.id)}>  
                    {showGal[item.id] ? "Image" : "Description"}
          </button>

        </td>
      </tr>

    );
  
  }

export default GalleryItem;