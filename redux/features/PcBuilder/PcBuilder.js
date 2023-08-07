const { createSlice } = require("@reduxjs/toolkit")

const iniitalComponents = [
  {
    name: 'Processor',
    id: null,
    productName: null,
  },
  {
    name: 'Motherboard',
    id: null,
    productName: null,
  },
  {
    name: 'RAM',
    id: null,
    productName: null,
  },
  {
    name: 'Monitor',
    id: null,
    productName: null,
  },
  {
    name: 'GPU',
    id: null,
    productName: null,
  },
  {
    name: 'Mouse',
    id: null,
    productName: null,
  },
  {
    name: 'Others',
    id: null,
    productName: null,
  },
];

const initialState = {
  components: iniitalComponents,
  totalPrice: 0,
  error: null,
  errorMessage: '',
};

const pcBuilderSlice = createSlice( {
  name: 'pc-builder',
  initialState,
  reducers:{
    addComponent : (state, action) => {
      const payload = action.payload;
      const componentIndex = state.components.findIndex(
        (component) => component.name === payload.name
      )
      const updatedComponents =state.components.map(component=>{
        if(component.name === payload.name){
          component.id = payload.id
          component.productName = payload.productName
        }
        return component
      })
      
      state.components = [...updatedComponents];
    }
  }
})


export default pcBuilderSlice;
export const { addComponent } = pcBuilderSlice.actions;