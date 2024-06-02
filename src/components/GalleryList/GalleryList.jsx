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
              <th>Description/Image</th>
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

        </table>
      </section>
    </div>
    );
    
}

export default GalleryList;