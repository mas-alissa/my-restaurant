import { LocalConvenienceStoreOutlined } from '@mui/icons-material';
import { FormControl, FormControlLabel, Grid, Paper, Radio, RadioGroup, Stack, TextField, Tooltip } from '@mui/material'
import React, { useEffect, useState } from 'react'
import NewFooter from '../NewFooter';
import Footer from './Footer';
import Product from './Product'

export default function Menu({products, onAddToCart, totalItems,open,handleClose,price}) {
    const [food,setFood] = useState([]);


    const [check,setCheck] = useState("");

    const [checkRadiobtn,setCheckRadiobtn] = useState("")
  
    const [toolTipTitle,setToolTipTitle] = useState("You must choose one of two options - يجب عليك اختيار واحد من الاختياررين للبحث")
   
    const [disabledStatus,setDisabledStatus] = useState(true)


    const [textfield,setTextField] = useState(null)

    const [error,setError] = useState("")


    const testFunction = (e) => {
        setTextField(e.target.value.length)
    }




    const setCheckRadiobtnOut = (e) => {
        setCheckRadiobtn(e.target.value)
        setDisabledStatus(false)
        
        setToolTipTitle("Search field - حقل البحث ")
    }


    // search
   console.log(textfield)
    const filter = (e) =>{
        testFunction(e)
        let val = e.target.value.toUpperCase();
      if(checkRadiobtn === "Search by Name"){
        
        if(val !== "" && e.target.value.match(/\d/g) === null){
            setError("")
            const newFood = products.filter(item => item.name.toUpperCase().startsWith(val))
            setFood(newFood)
           
        } else {
            console.log(e.target.value.match(/\d/g))
            setError("This value must be not incluid number !")
            setFood(products)
        }
    
      } else if (checkRadiobtn === "Search by Price"){
          setError("")
          if(val !== "" && Number(val)){
              const newFood = products.filter(item => item.price.raw >= val)
              setFood(newFood)
            } else {
                setError("This value must be Number !")
                setFood(products)
            }
      }
      console.log(products)
    }
    useEffect(() =>{
        setFood(products)
    },[])
    return (
        <div> 
   
       <div className="textBox-section">
       
       <Tooltip title={toolTipTitle}>
        <TextField fullWidth disabled={disabledStatus}   id="outlined-basic" onChange={filter} placeholder={check} color="warning" label="Search" variant="outlined" />
        </Tooltip>

        <Tooltip title="يوجد خطاً في القيمه المدخله">
        <p className="errorText">{textfield == 0 ? "" : error}</p>
        </Tooltip>

        <FormControl>
        <RadioGroup>
        <Tooltip title="البحث عن طريق الاسم">
        <FormControlLabel onClick={setCheckRadiobtnOut}  value="Search by Name" control={<Radio color="warning"/>} label="Search by Name" />
        </Tooltip>
        <Tooltip title="البحث عن طريق السعر (أبتداءاً من)">
        <FormControlLabel onClick={setCheckRadiobtnOut}   value="Search by Price" control={<Radio color="warning"/>} label="Search by Price (start from)" />

</Tooltip>     
  </RadioGroup> 
        </FormControl>
        
        </div>
        
        <Grid container spacing={3}>
 
       
           {food.map(item =>(
   
                   <Grid key={item.id} item xs={12} sm={12} md={6} lg={4} xl={3}>
                   <Paper>
                   <Product product={item} onAddToCart={onAddToCart} totalItems={totalItems} open={open} handleClose={handleClose} price={price} />
                   </Paper>
                   </Grid>
                
           ))}
        </Grid>
            <div className="mt-3"></div>
            {food.length > 0 ? <Footer /> : <NewFooter />}
        </div>
    )
}
