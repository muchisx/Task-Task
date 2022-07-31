import React from 'react';

const useStorageListener = (syncronizeTodos) => {

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

        syncronizeTodos();
        setSynchronizedState(true);
    }

    return {
        synchronizedState,
        toggleSyncState,
    }
    
}


export default useStorageListener;
