import { redirect } from "next/navigation"
import clientPromise from "../../../lib/mongodb"
import { notFound } from "next/navigation"


export default async function Page({ params }) {
    const { shorturl } = await params

    const client = await clientPromise
    const db = client.db("bitlinks")
    const collection = db.collection("url")

    const doc = await collection.findOne({shorturl: shorturl})
    if(doc){
        redirect(doc.url)
    } else {
        redirect(notFound())
    }
}