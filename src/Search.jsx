
export default function Search(props) {

  return (
    <div>
        <input type='text' placeholder="search..."
        onInput={(e)=>{props.hanleSearch(e.target.value)}}/>
    </div>
  )
}
