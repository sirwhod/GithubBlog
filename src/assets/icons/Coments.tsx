interface ComentsProps {
  color?: string
  size: number
}

export function Coments({ color = '#AFC2D4', size }: ComentsProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.015 1.688C4.346 1.688.563 4.76.563 8.555c0 1.639.705 3.136 1.881 4.315-.412 1.664-1.792 3.146-1.808 3.162a.256.256 0 00-.05.289.254.254 0 00.24.158c2.188 0 3.8-1.048 4.643-1.697 1.076.406 2.278.64 3.546.64 4.668 0 8.422-3.074 8.422-6.867s-3.754-6.867-8.422-6.867z"
        fill={color}
      />
    </svg>
  )
}
