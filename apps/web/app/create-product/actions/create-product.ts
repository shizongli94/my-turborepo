"use server"

import { revalidateTag } from "next/cache"
import { API_URL } from "../../../consts"

export default async function createProduct(formData: FormData) {

  console.log(`this is dummy: ${process.env.DUMMY}`)

  await fetch(`${API_URL}/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(Object.fromEntries(formData))
  }) 

  revalidateTag('products', 'max')
}