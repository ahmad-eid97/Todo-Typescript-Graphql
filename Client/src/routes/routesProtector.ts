import client from "../graphql";
import { redirect } from "react-router-dom";
import { GET_CURRENT_USER } from "../graphql/queries";

export async function authenticated() {
  try {
    const res = await client.query({ query: GET_CURRENT_USER });
    if (!res.data.currentUser) return redirect('/login');
    // console.log(res)
    return res.data.currentUser;
  } catch (e: any) {
    return redirect('/login')
  }
}

export async function notAuthenticated() {
  try {
    const res = await client.query({ query: GET_CURRENT_USER });
    if (res.data.currentUser) return redirect('/');
    return null
  } catch (e: any) {
    return null
  }
}