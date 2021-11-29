import React, {useState,useReducer} from 'react';
import Alert from '@mui/material/Alert';

function formReducer(state, event) {
    return {
      ...state,
      [event.name]: event.value,
    };
  }

export default function SendData() {
    const [formData, setFormData] = useReducer(formReducer, {X:0,Y:0,Z:0});
    const [seeSent, setSeeSent] = useState(false);
    const [error, setError] = useState('');

    async function send_data(){
        return fetch(`http://mprojectsdb.gq/ProyectoRT/sendposition.php?X=${formData.X}&Y=${formData.Y}&Z=${formData.Z}&T=${Math.round(Date.now() / 1000)}`);
    }
    async function getLastTime(){
        return fetch('http://mprojectsdb.gq/ProyectoRT/getLastTime.php').then((res) => res.json());
    }
    async function handleSubmit(event){
        event.preventDefault();
        try {
            const lastTime = Number(await getLastTime());
            if(Math.round(Date.now() / 1000) - lastTime < 6){
                throw new Error('Wait some seconds between requests');
            }
            const res = await send_data();
            if (!res.ok) throw new Error();
            setSeeSent(true);
            setTimeout(()=>setSeeSent(false), 3000);
          } catch (err) {
              setSeeSent(false);
              if(err.message == 'Wait some seconds between requests'){
                  setError(err.message)
              }else{
                  setError("Couldn't send position");
              }
              setTimeout(()=>setError(''), 3000);
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
        {seeSent && <Alert severity="success">Position sent successfully!</Alert>}
        {error && <Alert severity="error">{error}</Alert>}
      </form>
    </div>
  );
}