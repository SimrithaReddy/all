import { useNavigate } from "react-router-dom"
import Header from "./header";
import "./upload.css";

const PostUpload = () => {

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    let data = e.target
    let formData = new FormData(data)
    await fetch('https://hola-bz1b.onrender.com/uploads',
      {
        method: 'POST',
        body: formData
      })
      .then(res => res.json()).then((d) => {
        alert("post successful")
      }).catch((e) => { console.log(e.message) })
      .finally(() => {
        navigate("/InstaClone")
      })
  }

  return (
    <>
    <Header></Header>
    <hr></hr>
      <div className="upload-container">
        <form onSubmit={(e)=>handleSubmit(e)}>
          <section>
            <input type="file" required  placeholder="file" id="post" name="PostImage"></input>
          </section>

          <section>
            <input type="text" required placeholder="Author" name="name"></input>
          </section>

          <section>
            <input type="text" required placeholder="Location" name="location"></input>
          </section>

          <section>
            <input type="text" required placeholder="Description" name="description"></input>
          </section>
          <button type="submit">Post</button>
        </form>
      </div>
    </>
  );
}
export default PostUpload;