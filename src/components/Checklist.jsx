import {React, useState} from 'react'

export const Checklist = () => {
  // Set const
  const [checked, setChecked] = useState([]);
  // Items in CheckList
  const checkList = ["Car", "Car2", "Car3", "Car4"];

  // Handle checking
  const handleCheck = (e) => {
    var updatedList = [...checked];

    // Checked
    if (e.target.checked) {
      updatedList = [...checked, e.target.value];
    } else {
      // Unchecked
      updatedList.splice(checked.indexOf(e.target.value), 1);
    }
    setChecked(updatedList);
  };

  return (
    <div>
      <p className='float-text'>Additional options:</p>
      <ul className='checkbox-group'>
        {/* Array of all items defined above */}
        {checkList.map((item, index) => (
          <li key={index}>
            <label className="checkbox-label" htmlFor={item}>{item}</label>
            <input value={item} className="checkbox-input" type="checkbox" onChange={handleCheck} />
          </li>
        ))}
      </ul>
    </div>

  )
}
