

const { Schema, model } = require("mongoose");

const usercartSchema = new Schema(
  {
    code: [{ type:mongoose.Schema.Types.ObjectId, ref:"itemaster", required: true }],
    qty:{type:Number, require:true}
    
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

userSchema.methods.addToCart = function (product) {
    const cartProductIndex = this.cart.items.findIndex(cp => {
      return cp.orderId.toString() === product._id.toString();
    });
    let newQuantity = 1;
   
  
    const updatedCartItems = [...this.cart.items];
  
    if (cartProductIndex >= 0) {
      newQuantity = this.cart.items[cartProductIndex].qty + 1;
      updatedCartItems[cartProductIndex].qty = newQty;
  
      newTotalQty = this.cart.totalQty * unitPrice;
      updatedTotalQty = newTotalQty;
  
    } else {
      updatedCartItems.push({
        orderId: product._id,
        qty: newQty
      });
    }
  
    const updatedCart = {
      items: updatedCartItems,
      totalQty: updatedTotalQty
  
    };
    this.cart = updatedCart;
    return this.save();
  };
  
  userSchema.methods.removeFromCart = function (orderId) {
    const updatedCartItems = this.cart.items.filter(item => {
      return item.productId.toString() !== productId.toString();
    });
    this.cart.items = updatedCartItems;
    return this.save();
  };
  
  userSchema.methods.clearCart = function () {
    this.cart = { items: [] };
    return this.save();
  };



module.exports = model("usercart", usercartSchema);
