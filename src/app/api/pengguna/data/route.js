import { NextResponse } from "next/server";
import { database } from "@/app/services/firebase";
import { collection, getDocs } from "firebase/firestore";

export const revalidate = 1;

export async function GET(request) {
  const usersCol = collection(database, "users");
  const usersSnapshot = await getDocs(usersCol);
  const users = usersSnapshot.docs.map((doc) => doc.data());
  // if users role is empty, then set it to "Guest"
  users.forEach((user) => {
    if (!user.role) {
      user.role = "Guest";
    }
  });

  return NextResponse.json({
    users: users,
  });
}
