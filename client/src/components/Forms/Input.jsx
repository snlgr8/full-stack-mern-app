import React from 'react'

export const Input = ({...props}) => {
    return (
        <div className='form-group'>
        <label htmlFor='name'>Brand:</label>
        <input
          type='text'
          required
          name='brand'
          placeholder='Brand'
          onChange={handleChange}
          value={brand}
          tabIndex={1}
        />
      </div>
    )
}
