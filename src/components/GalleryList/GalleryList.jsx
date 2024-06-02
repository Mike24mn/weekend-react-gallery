import GalleryItem from "../GalleryItem/GalleryItem.jsx";
import App from "../App/App.jsx";


function GalleryList({ galleryList, changeLike }) {

    return (
     <>
      <section>
        <h2>Gallery Contents</h2>
        <table>
          <thead>
            <tr>
              <th>Gallery Item</th>
              <th>Description</th>
              <th>Likes</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {galleryList.map((item) => (
              <GalleryItem
                key={item.id}
                item={item}
                changeLike={changeLike}
              />
            ))}
          </tbody>
        </table>
      </section>
    </>
    );
    
}

export default GalleryList;