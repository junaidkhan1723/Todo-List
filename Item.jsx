import React, { useState, memo } from 'react';

function Item({ update, index, val, del }) {
  const [isEditing, setEditing] = useState(false);
  const [newItem, setNewItem] = useState("");

  return (
    <div className="item">
      { !isEditing ? (
        <>
         <span className="box"><li >{val}</li></span> 
          <div>
            <button style={{marginRight:10}} 
            onClick={() => { 
              setEditing(true); 
              setNewItem(val); 
            }}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"    fill="currentColor">
<path d="M4 3h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM6 5v12h10V5H6z" />
  <path d="M19.71 6.29l-1.42-1.42a1 1 0 0 0-1.42 0l-7.79 7.79L8 16l3.34-.92 7.79-7.79a1 1 0 0 0 0-1.42zM9.75 14.38L9 13.62l6.88-6.88 0.75 0.75-6.88 6.88zM8.5 15.5L7 16l0.5-1.5 1-1 0.75 0.75-1 1z" />
</svg> </button>

  <button  onClick={()=>{del(index)}}>
  <svg xmlns="http://www.w3.org/2000/svg"
  width="24" height="24" viewBox="0 0 24 24"
   fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round">
  <path d="M3 6h18"></path>
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
  <path d="M10 11v6"></path>
  <path d="M14 11v6"></path>
  <path d="M5 6l1 14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-14"></path>
</svg>

</button>
          </div>          
        </>
      ) : (
        <div>
          <input style={{width: 280, height: 25,borderRadius: 5,fontSize: 15,fontWeight: 700,border: "none"}} 
            type="text" 
            value={newItem} 
            onChange={(e) => setNewItem(e.target.value)} 
          />
          <button style={{marginLeft:10}}
           onClick={() => { 
            update(newItem, index);
            setEditing(false);
          }}>
            Update
          </button>
          <button style={{marginLeft:10, padding:5, backgroundColor:"black"}} onClick={() => setEditing(false)}>X</button>
        </div>        
      )}
    </div>
  );
}

export default memo(Item);
