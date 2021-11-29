import React, {useReducer} from 'react';

function formReducer(state, event) {
    return {
      ...state,
      [event.name]: event.value,
    };
  }

export default function SendData() {
    const [formData, setFormData] = useReducer(formReducer, {X:0,Y:0,Z:0});

    async function send_data(){
        return fetch('http://mprojectsdb.gq/abet/sendposition.php', {
            method: 'POST',
            headers:{
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Request-Methods':'POST'
            },
            mode:'cors',
            body: JSON.stringify(formData),
          });
    }
    async function handleSubmit(event){
        event.preventDefault();
        console.log(formData);
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
      </form>
    </div>
  );
}