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
        <img src={item.url}/>
        </td>
        <td>
          <button 
            onClick={() => changeLike(item)}>
            Like
          </button>
          <button 
            onClick={() => toggleDescription(description.id)}>
            Description
          </button>
        </td>
      </tr>
    );
  
  }

export default GalleryItem;