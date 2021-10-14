import initAuthentication from "../../firebase/firebase.init";
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut, FacebookAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";

initAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const auth = getAuth();

    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                setLoading(false);
                console.log(result.user);
                console.log(user);
            })
            .catch(error => {
                setError(error.message);
        })

    }

    const loginWithFacebook = () => {
        const facebookProvider = new FacebookAuthProvider();

        signInWithPopup(auth, facebookProvider)
            .then(result => {
                setLoading(true);
                console.log(result.user);
                result.user.emailVerified = true;
                setUser(result.user);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
        })
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch(error => {
            setError(error.message);
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
                setLoading(false);
            }
            else {
                
            }
        })
    }, []);

    return { loginWithGoogle, loginWithFacebook, logOut, setUser, setError, setLoading, user, error, loading};
}
export default useFirebase;