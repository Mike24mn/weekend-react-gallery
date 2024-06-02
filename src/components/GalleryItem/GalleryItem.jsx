function GalleryItem({ item, changeLike }) {

    return (
      <tr key={item.id}>
        
        <td>{item.title}</td>
        <td>{item.description}</td>
        {
          <td>
            {item.likes}
          </td> 
        }
  
        <td>
          <button 
            onClick={() => changeLike(item)}>
            Like
          </button>
        </td>
      </tr>
    );
  
  }

export default GalleryItem;