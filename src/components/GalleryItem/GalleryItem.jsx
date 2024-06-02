import React from "react";

function GalleryItem({ item, changeLike, }) {

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

        </td>
      </tr>
    </div>
    );
  
  }

export default GalleryItem;