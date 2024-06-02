import GalleryItem from "../GalleryItem/GalleryItem.jsx";
import App from "../App/App.jsx";
import { useState } from "react";


function GalleryList({ galleryList, changeLike }) {

    const [showGal, setGal] = useState({})

    const resetGal = () => {
        setGal({})
    }

// Note to self, setting [id]: true allows toggling one direction only
// using !prevState[id] allows you to flip from image to description depending on boolean evaluation

    const toggleDescription = (id) => {
        setGal(prevState => ({
            ...prevState,
            [id]: !prevState[id],
        }))
    }

    return (
     <div data-testid="galleryList">
      <section>
        <h2>Gallery Contents</h2>
        <table>
          <thead>
            <tr>
              <th>Gallery Item</th>
              <th>Description</th>
              <th>Likes</th>

            </tr>
          </thead>
          <tbody>
            {galleryList.map((item) => (
              <GalleryItem 
                key={item.id}
                item={item}
                changeLike={changeLike}
                toggleDescription={toggleDescription}
                showGal={showGal}
              />
              
            ))}
          </tbody>
          <h3>
            { galleryList.map((list)=>(
                <li key={list.id}> Picture Title: {list.title}
                <h1>
                <button data-testid="toggle" onClick={() => toggleDescription(list.id)}>  
                    {showGal[list.id] ? "Image" : "Description"}
                </button>
                </h1>
                <td>
                    {showGal[list.id] ? list.description : <img src={list.url} />}
                </td>
                </li>
            ))}
          </h3>
        </table>
      </section>
    </div>
    );
    
}

export default GalleryList;