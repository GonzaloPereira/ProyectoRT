import React, {useState,useReducer} from 'react';
import RecommendIcon from '@mui/icons-material/Recommend';

function formReducer(state, event) {
    return {
      ...state,
      [event.name]: event.value,
    };
  }

export default function SendData() {
    const [formData, setFormData] = useReducer(formReducer, {X:0,Y:0,Z:0});
    const [seeGood, setSeeGood] = useState(false);
    async function send_data(){
        return fetch(`http://mprojectsdb.gq/ProyectoRT/sendposition.php?X=${formData.X}&Y=${formData.Y}&Z=${formData.Z}`);
    }
    async function handleSubmit(event){
        event.preventDefault();
        console.log(JSON.stringify(formData));
        setSeeGood(true);
        setTimeout(()=>setSeeGood(false), 1000);
        try {
            const res = await send_data();
            console.log(res);
            if (!res.ok) throw new Error();
          } catch (err) {
              console.log(err);
          }
    }
    function handleChange(event) {
        setFormData({
          name: event.target.name,
          value: event.target.value,
        });
      }
  return (
    <div className="form">
      <h2>Send position</h2>
      <p>Write position with the three cordinates axis</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="x-coordinate">
          <p>X-Coordinate</p>
          <input type="number" id="x-coordinate" name='X' value={formData.X} onChange={handleChange}/>
        </label>
        <label htmlFor="y-coordinate">
          <p>Y-Coordinate</p>
          <input type="number" id="y-coordinate" name='Y' value={formData.Y} onChange={handleChange}/>
        </label>
        <label htmlFor="z-coordinate">
          <p>Z-Coordinate</p>
          <input type="number" id="z-coordinate" name='Z' value={formData.Z} onChange={handleChange}/>
        </label>
        <button className="blue-submit-button" type="submit">
          Send
        </button>
        {seeGood && <div className='extra-link' style={{justifyContent:'center'}}><p>Sent!!</p><RecommendIcon/></div>}
      </form>
    </div>
  );
}