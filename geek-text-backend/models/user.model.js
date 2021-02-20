import { Schema, model} from 'mongoose'

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  // TODO: Password must meet our current security standards
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique : true //wac
  },
  homeAddress : {  //wac
    type : String,
    default:"",
    trim: true,
  },
  nickname : {    //wac
    type : String,
    required : true,
    trim: true,
    unique : true,
  },
  shippingAddress :{  //wac
    type : String,
    default:"",
    trim: true,
  },
  creditCards:{
    type:Array,
    default:[]
  },
  cart:{
    type:Array,
    default:[]
  },
  wishlist:{
    type:Array,
    default:[]
  }
});

export const user = model('User',userSchema);
