const validate = values =>{
    let errors = {};
    const {title} = values;
    if (!title){
        errors.title ='vui lòng nhập tiêu đề !'
    } else if (title.trim() && title.length <5){
        errors.title = 'Tiêu đề phải lớn hơn 5 kí tự !'
    }
    if (!values.fromtime) {
        errors.fromtime = 'Vui lòng chon mốc  thời gian'
      } 
    if (!values.totime) {
        errors.totime = 'Vui lòng chon mốc  thời gian'
    } 
    if (!values.fromdate) {
        errors.fromdate = 'Vui lòng chon mốc  thời gian'
    } 
    if (!values.todate) {
        errors.todate = 'Vui lòng chon mốc  thời gian'
    } 
    //Validation of user anh password
    if (!values.name) {
        errors.name = 'Vui lòng nhập name'
      } else if (values.name.length  < 5) {
        errors.name = 'Tên phải lớn hơn 5 kí tự !'
      }
    if (!values.email) {
        errors.email = 'Vui lòng nhập Email'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Đây không phải Email !'
      }
      if (!values.operator) {
        errors.operator = 'Vui lòng nhập operator'
      } else if (values.operator.length  > 5 ) {
        errors.operator = 'Đây không phải operator !'
      }
    if (!values.password){
        errors.password="Vui lòng nhập mật khẩu";
    }else if ((values.password.match(/[a-z]/g) && values.password.match( 
        /[A-Z]/g)  && values.password.match( 
            /[0-9]/g) && values.password.length > 5)) {
            errors.password="";
    }else{
        errors.password="Vui lòng kiểm tra lại mật khẩu";
    }
    if (!values.cPassword){
        errors.cPassword="Vui lòng nhập mật khẩu";
    }else if (values.cPassword.match(/[a-z]/g) && values.cPassword.match( 
        /[A-Z]/g) && values.cPassword.match( 
        /[0-9]/g) &&  values.cPassword.length >5 ){
            errors.cPassword="";
    }else{
        errors.cPassword="Vui lòng kiểm tra lại mật khẩu";
    }
    if(values.cPassword !==values.password){
        errors.cPassword="Mật khẩu không khớp !";
    }
    return errors;
}

export default validate;