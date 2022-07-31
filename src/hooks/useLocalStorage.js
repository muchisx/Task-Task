import React from 'react';

const useLocalStorage = (itemKey, itemInitialValue) => {

    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(itemInitialValue);
    const [itemSyncState, setItemSyncState] = React.useState(true);
     
    React.useEffect(() => {
        
        setTimeout(() => {
        
            try {

                const localStorageItem = localStorage.getItem(itemKey);
                let parsedItem;
            
                if (!localStorageItem) {
                localStorage.setItem(itemKey, JSON.stringify(itemInitialValue));
                parsedItem = itemInitialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                }

                setItem(parsedItem);
                setItemSyncState(true);
            } 
            catch(error) {
            
                setError(error);
            } 
            finally {

                setLoading(false);
            }
        }, 2000);
    }, [itemSyncState]);


    const saveItem = (newItem) => {
        try {

            const stringifiedItem = JSON.stringify(newItem);
            localStorage.setItem(itemKey, stringifiedItem)

            setItem(newItem)
        } 
        catch(error) {

            setError(error);
        }
    }

    const syncronizeItem = () => {

        setLoading(true);
        setItemSyncState(false);
    }

    return {
        item,
        saveItem,
        loading,
        error,
        syncronizeItem,
    }
}

export default useLocalStorage;
