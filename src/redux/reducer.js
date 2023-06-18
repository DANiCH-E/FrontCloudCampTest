import {createSlice} from '@reduxjs/toolkit'

const Slice = createSlice({
    name: 'user',
    initialState:{
        itemsUsers: {
            nickname: '',
            name: 'Даниил',
            sername:'Ефременко',
            sex: 'Man',
            adv: '',
            advantages: '',
            about: '',
            phone: '9999999999',
            email: '',
            checkbox: 0,
            radio: 0
        },
        
        itemsAdv: []
        
    },
    reducers: {
        SetRadio: (state, action) => {
            state.itemsUsers.radio = action.payload
        },
        SetCheckbox: (state, action) => {
            state.itemsUsers.checkbox = action.payload
        },
        Setnickname: (state, action) => {
            state.itemsUsers.nickname = action.payload
        },
        Setname: (state, action) => {
            state.itemsUsers.name = action.payload
        },
        Setsername: (state, action) => {
            state.itemsUsers.sername = action.payload
        },
        Setsex: (state, action) => {
            state.itemsUsers.sex = action.payload
        },
        Setabout: (state, action) => {
            state.itemsUsers.about = action.payload
        },
        Setphone: (state, action) => {
            state.itemsUsers.phone = action.payload
        },
        Setemail: (state, action) => {
            state.itemsUsers.email = action.payload
        },
        SetItemInAdv: (state, action) => {
            state.itemsAdv.push(action.payload)
        },
        SetAdv: (state, action) => {
            state.itemsUsers.adv = action.payload
        },
        
    }
})

export const {SetRadio, SetCheckbox, SetAdv, SetItemInAdv, Setemail, Setphone, Setname, Setnickname, Setsername, Setsex, incAdv, Setabout}= Slice.actions;
export default Slice.reducer;