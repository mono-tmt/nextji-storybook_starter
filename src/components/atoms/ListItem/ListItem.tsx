import React from 'react'

interface Props {
  /*
   * リストアイテムに入るタイトル
   */
  title: string

  /*
   * リストアイテムに入るテキスト
   */
  text: string
}

export const ListItem = ({
  title = 'Title of ListItem',
  text = 'some texts of ListItem',
}: Props) => {
  return (
    <div className="flex flex-col ml-3">
      <div className="font-medium leading-none mt-2">{title}</div>
      <p className="mt-2 text-sm leading-none text-gray-600">{text}</p>
    </div>
  )
}
