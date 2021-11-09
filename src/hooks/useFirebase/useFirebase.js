import initAuthentication from "../../firebase/firebase.init";
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut, FacebookAuthProvider, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, getIdToken } from "firebase/auth";
import { useEffect, useState } from "react";


initAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');


    const auth = getAuth();

    const registerUser = (email, password, name) => {
        setError('');
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then((result) => {
                        setUser(result?.user);
                    })
                    .catch((error) => {
                        setError(error.message);
                    });
                setUser(result.user);
                saveUser(name, email, 'POST');
                setLoading(false);
        })
        .catch((error) => {
            setError(error.message)
        });
    }

    const loginWithGoogle = () => {
        setLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                saveUser(result.user.displayName, result.user.email, 'PUT');
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }

    const loginWithFacebook = () => {
        setLoading(true);
        const facebookProvider = new FacebookAuthProvider();

        signInWithPopup(auth, facebookProvider)
            .then(result => {
                result.user.emailVerified = true;
                setUser(result.user);
                saveUser(result.user.displayName, result.user.email, 'PUT')
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setLoading(false))
    }

    const login = (email, password, location, history) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const destination = location.state?.from || '/';
                history.replace(destination);
                const user = result.user;
                setUser(user)
                setError('');
            })
            .catch(error => {
            setError(error.message);
        })
    }

    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
                // checkAdmin(user.email);
                getIdToken(user)
                    .then(idToken => setToken(idToken));
            }
            else {
                setUser({});
            }
            setLoading(false);
        })
    }, [auth]);

    useEffect(() => {
        fetch(`https://floating-ridge-99224.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.isAdmin)
            })
    },[user.email])
   

    const saveUser = (name, email, method) => {
        const newUser = { name, email };
        fetch('https://floating-ridge-99224.herokuapp.com/users', {
            method: method,
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.upsertedId || data.insertedId) {
                    alert('Registered successfully')
                }
            })
    }



    return { registerUser, loginWithGoogle, loginWithFacebook, logOut, setUser, setError, setLoading, login,  user, error, loading, admin, token };
}
export default useFirebase;