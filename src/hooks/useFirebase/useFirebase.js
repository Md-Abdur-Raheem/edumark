import initAuthentication from "../../firebase/firebase.init";
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut, FacebookAuthProvider, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";


initAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [admin, setAdmin] = useState(false);


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
                checkAdmin(user.email);
            }
            else {
                setUser({});
            }
            setLoading(false);
        })
    }, [auth]);

    const saveUser = (name, email, method) => {
        const newUser = { name, email };
        fetch('http://localhost:5000/users', {
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

    const checkAdmin = email => {
        fetch(`http://localhost:5000/users/admin/${email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.isAdmin))
    }


    return { registerUser, loginWithGoogle, loginWithFacebook, logOut, setUser, setError, setLoading, login,  user, error, loading, admin };
}
export default useFirebase;