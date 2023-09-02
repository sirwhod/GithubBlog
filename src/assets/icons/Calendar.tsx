interface CalendarProps {
  color?: string
  size: number
}

export function Calendar({ color = '#AFC2D4', size }: CalendarProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.96 1.617v1.055h4.22V1.617a1.054 1.054 0 112.11 0v1.055h1.581c.873 0 1.582.708 1.582 1.582v1.582H1.688V4.254c0-.874.708-1.582 1.582-1.582h1.582V1.617a1.054 1.054 0 112.109 0zM1.689 6.891h14.765v8.964c0 .874-.708 1.582-1.582 1.582H3.27a1.582 1.582 0 01-1.583-1.582V6.891zM4.324 9a.528.528 0 00-.527.527v3.164c0 .29.236.528.527.528h3.164c.29 0 .528-.238.528-.528V9.527A.529.529 0 007.488 9H4.324z"
        fill={color}
      />
    </svg>
  )
}
