export default function validation(values){
    const errors={}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;

    if(values.name==="") {
        errors.name="Name is required!";
    }
    if(values.email===""){
        errors.email="Email is required";
    }
    else if (!email_pattern.test(values.email)) {
        errors.email="Email is not correct!";
    } 
    if(values.numberofemployees<=0 || values.numberofemployees>=100)  {
        errors.numberofemployees="Wrong amount of employees!";
    }
    if(values.age<18) {
        errors.age="Wrong age!";
    }
    return errors;

}