import initAuthentication from "../../firebase/firebase.init";
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut, FacebookAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";


initAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const auth = getAuth();

    const loginWithGoogle = () => {
        setLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                console.log(result.user);
                console.log(user);
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
                console.log(result.user);
                result.user.emailVerified = true;
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setLoading(false))
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
            }
            else {
                setUser({});
            }
            setLoading(false);
        })
    }, []);

    return { loginWithGoogle, loginWithFacebook, logOut, setUser, setError, setLoading,  user, error, loading };
}
export default useFirebase;