import { NextResponse } from "next/server";
import { database } from "@/app/services/firebase";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";

export const dynamic = "force-dynamic";

export async function GET(request) {
  const rolesCol = collection(database, "roles");
  const usersSnapshot = await getDocs(rolesCol);
  const roles = usersSnapshot.docs.map((doc) => doc.data());

  return NextResponse.json({
    roles,
  });
}

// edit role
export async function PUT(request) {
  // change role in users collection by email
  const { email, role } = await request.json();
  // update role in users collection by email
  try {
    // find document id in users collection by email address
    const usersCol = collection(database, "users");
    const usersSnapshot = await getDocs(usersCol);
    const docId = usersSnapshot.docs.find((doc) => doc.data().email === email);
    await updateDoc(doc(database, "users", docId.id), {
      role: role === "Admin" ? "Admin" : role,
    });
  } catch (error) {
    return NextResponse.json({
      status: "error",
      message: "Role gagal diubah",
    });
  }

  return NextResponse.json({
    status: "success",
    message: "Role berhasil diubah",
  });
}
