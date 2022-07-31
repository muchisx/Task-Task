





// This file has been deprecated in favor of the custom hook useStorageListener instead.
// Keeping it here for education.





import React from 'react';

const withStorageListener = (WrappedComponent) => {

    return function WrappedComponentWithStorageListener(props) {

        const [synchronizedState, setSynchronizedState] = React.useState(true);

        React.useEffect(() => {

            const onChange = (change) => {
                if (change.key === 'TODOS_V1') {
                    console.log('Changes were made in TODOS_V1');
                    setSynchronizedState(false)
                }
            }

            window.addEventListener('storage', onChange);

            return () => window.removeEventListener('storage', onChange)

        }, [])

        const toggleSyncState = () => {

            props.syncronizeTodos();
            setSynchronizedState(true);
        }

        return (
            <WrappedComponent 
                synchronizedState={synchronizedState}
                setSynchronizedState={toggleSyncState}
            />)
    }

}


export default withStorageListener;
