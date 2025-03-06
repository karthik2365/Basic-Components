"use client"
import Link from "next/link"

function RouteButton() {
  return (
    <Link href='/components/useStateHook'>
      <button className="text-white hover:bg-green-600">
        Click 
      </button>
    </Link>
  )
}

export default RouteButton;