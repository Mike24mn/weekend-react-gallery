import React from "react";
import GalleryList from "../GalleryList/GalleryList";

function GalleryItem({ item, changeLike, showGal, toggleDescription}) {

    return (
    <div data-testid="galleryItem">
      <tr key={item.id}>
        
        <td>{item.title}</td>
        <td>{item.description}</td>

        
        
          <td>
            {item.likes}
          </td> 

          
        
        <td>
        <img src={item.url}/>
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
    </div>
    );
  
  }

export default GalleryItem;