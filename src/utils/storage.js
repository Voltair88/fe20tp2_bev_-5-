

export const setTols = (key,value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
    //Update the firebase db Theme when change the Theme
    /* props.firebase.user(props.user.uid).update({
        theme: value
    }); */
}

export const getFromLS = key => {
    const value = window.localStorage.getItem(key);

    if (value) {
        return JSON.parse(value);
    }
}

