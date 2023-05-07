// APOLLO STUFF
import { cache } from "../../graphql";
// API
import api from "../handlers"

export async function signup(endpoint: string, body: any) {
  const response = await api.POST(endpoint, body);
  if (response) return response
}

export async function login(endpoint: string, body: any) {
  const response = await api.POST(endpoint, body);
  if (response) return response
}

export async function logout(endpoint: string) {
  const response = await api.POST(endpoint);
  if (response) {
    // THIS TO CLER CACHED DATA FOR LOGGED IN USER
    cache.evict({ fieldName: 'currentUser' });
    return response
  };
}