import { NextResponse } from "next/server";

let tarefas = ['Comprar coca cola', 'pagar contas']

export async function GET(request: Request){
    return NextResponse.json(tarefas)
}