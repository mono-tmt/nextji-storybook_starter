import React from 'react'
import Button from '../../atoms/Button'
import InfoIcon from '../../atoms/Icon'
import ListItem from '../../atoms/ListItem'

export const List = () => {
  return (
    <div className="flex flex-col p-8 bg-white shadow-md hover:shodow-lg rounded-2xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <InfoIcon />
          <ListItem
            title="Please Input, title of List"
            text="Please Input, excerpt of article"
          />
        </div>
        <Button primary={true} label="Button" />
      </div>
    </div>
  )
}
