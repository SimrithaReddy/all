import "./upload.css";
import Header from './header';

const PostUpload = () => {
  const handleSubmit = async (e) => {
    e.preventDefault()
    let data = e.target
    let formData = new FormData(data)
    await fetch('https://backend-gallery.onrender.com/uploads',
      {
        method: 'POST',
        body: formData
      })
      .then(res => res.json()).then((d) => {
        alert("image added successful")
        console.log(d)
      }).catch((e) => { console.log(e.message) })
  }

  return (
    <>
    <Header/>
      <div className="upload-container">
        <form onSubmit={(e)=>handleSubmit(e)}>
          <section>
            <input type="file" required  id="post" name="PostImage"></input>
          </section>

          <section>
            <input type="text" required placeholder="title" name="title"></input>
          </section>
          <button type="submit"><b>Add Image</b></button>
        </form>
      </div>
    </>
  );
}
export default PostUpload;