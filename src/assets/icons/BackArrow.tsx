interface BackArrowProps {
  color?: string
  size: number
}

export function BackArrow({ color = '#AFC2D4', size }: BackArrowProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1813_15)">
        <path
          d="M8.25 12.125a.8.8 0 01-.568-.235L2.86 7.068a.803.803 0 010-1.136L7.682 1.11a.803.803 0 111.136 1.137L4.565 6.5l4.254 4.254a.803.803 0 01-.57 1.371z"
          fill={color}
        />
      </g>
    </svg>
  )
}
