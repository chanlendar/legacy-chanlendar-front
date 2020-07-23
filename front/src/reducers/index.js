const initialState = {
    User: {
        nickname: 'Ainte',
    },
    Topics: [
        {
            id: 1,
            title: 'chanlendar',
        },
        {
            id: 2,
            title: 'godot community',
        },
        {
            id: 3,
            title: 'devcord',
        },
        {
            id: 4,
            title: 'Reactiflux',
        },
        {
            id: 5,
            title: 'Axcent',
        },
    ]
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default rootReducer;
