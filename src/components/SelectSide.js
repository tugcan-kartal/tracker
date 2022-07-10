import React, { useState } from 'react';
import './SelectSide.css';
import {TbCircleDashed} from 'react-icons/tb';
import {GiPig} from 'react-icons/gi';

function SelectSide() {

    const [mapStyle,setmapStyle]=useState(true);

  return (

    <div>
        <div className='partofselectlist'>

            <div className='allbuttonpart'>
                <button className='firstbutton'> <TbCircleDashed /> Containment Zones</button>
                <button className='secondbutton' onClick={()=>{setmapStyle(false)}}> <GiPig /> Hog Count</button>
            </div>
            
            <select className='onlyselectpart'>

                <option>Region/s</option>

                <optgroup label="Luzon">
                    <option >NCR</option>
                    <option >Region I</option>
                    <option >Region II</option>
                    <option >Region III</option>
                    <option >Region IV-A</option>
                    <option >Region IV-B</option>
                    <option >Region V</option>
                    <option >Car</option>
                </optgroup>

                <optgroup label="Visayas">
                    <option value="parrot">Region VI</option>
                    <option value="macaw">Region VII</option>
                    <option value="albatross">Region VIII</option>
                </optgroup>

                <optgroup label="Mindanao">
                    <option value="parrot">Region IX</option>
                    <option value="macaw">Region X</option>
                    <option value="albatross">Region XI</option>
                    <option value="parrot">Region XII</option>
                    <option value="macaw">Region XIII</option>
                    <option value="albatross">ARMM</option>
                </optgroup>

            </select>

            <button className='visualize'>VISUALIZE</button>
        </div>
    </div>

  )
}

export default SelectSide