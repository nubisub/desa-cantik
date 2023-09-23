import { NextResponse } from "next/server";
import { database } from "@/app/services/firebase";
import { collection, getDocs } from "firebase/firestore";

export async function GET(request) {
  const rolesCol = collection(database, "roles");
  const usersSnapshot = await getDocs(rolesCol);
  const roles = usersSnapshot.docs.map((doc) => doc.data());

  return NextResponse.json({
    roles,
  });
}
