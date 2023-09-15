'use client'
import React, { useContext, useState, useEffect } from "react";
import { auth } from "../services/firebase";
export const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			if (user) {
                setCurrentUser(user);
            }
            else{
                setCurrentUser(null);
            }
		});
		return unsubscribe;
	}, []);

	const value = {
		currentUser,
	};
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
