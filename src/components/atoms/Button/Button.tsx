import React from 'react'

interface Props {
  /**
   * プライマリーかどうか
   */
  primary?: boolean
  /**
   * ボタンの背景色
   */
  backgroundColor?: string
  /**
   * ボタンのサイズの種類
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * ボタンに入るラベル
   */
  label: string
  /**
   * ボタンのクリックハンドル
   */
  onClick?: () => void
}

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: Props) => {
  const sizeMode =
    size === 'small'
      ? 'py-1.5 px-4 text-xs'
      : size === 'medium'
      ? 'py-2 px-5 text-sm'
      : size === 'large'
      ? 'py-3 px-6 text-base'
      : ''
  return primary ? (
    <button
      type="button"
      className={`text-white bg-blue-500 rounded-full font-bold ${sizeMode}`}
      {...props}
    >
      {label}
    </button>
  ) : (
    <button
      type="button"
      className={`text-gray-600 bg-transparent shadow-inner rounded-full font-bold ${sizeMode}`}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  )
}
