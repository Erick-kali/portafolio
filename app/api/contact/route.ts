import { NextResponse } from "next/server"

export async function POST() {
  return NextResponse.json({
    success: false,
    message: "Esta funcionalidad ha sido deshabilitada. Usa el botón 'Abrir Email' en su lugar.",
  })
}
