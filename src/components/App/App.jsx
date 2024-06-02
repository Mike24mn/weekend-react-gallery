import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";

import GalleryItem from "../GalleryItem/GalleryItem.jsx";
import GalleryList from "../GalleryList/GalleryList.jsx";





function App() {

  let [galleryList, setGalleryList] = useState([]);


  // Runs when the component is first put on the DOM
  useEffect( () => {
    fetchList();
  }, [])

  const fetchList = () => {
    axios({
      method: "GET",
      url: "/api/gallery",
    })
      .then((response) => {
        console.log("response.data is:", response.data);

        setGalleryList(response.data);
      })
      .catch((error) => {
        console.log("Error on get:", error);
      });
  };

    // Change quantity likes
    function changeLike(item) {
    
      axios
        .put(`/api/gallery/${item.id}`, { likes: item.likes + 1 })
        .then((response) => {
          fetchList();
        })
        .catch((error) => {
          alert(`Couldn't update like count. Try again later`);
          console.log('Error updating like count', error);
        });
    };

  return (
    <div data-testid="app">
      <header>
        <h1>React Gallery</h1>
      </header>
      <main>
        <GalleryList galleryList={galleryList} fetchList={fetchList} changeLike={changeLike} />
      </main>

      <p>The gallery goes here!</p>
      <img src="images/goat_small.jpg" />
      <img src="images/goat_stache.png" />
    </div>
  );
}

export default App;
