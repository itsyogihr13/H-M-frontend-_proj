function checkout(){
    return ` 

    <div class="coupan-main">
         <div>   <span>Add a discount code</span></div>

            <div class="coupan" style="display:flex ; flex-direction:row; justify-content:space-around ">

             <div class="coupan-input">
                <input id="coupanInput" style="color: #00B3A9; width:200px; height:50px" placeholder=" Coupon Discount" >
             </div>
                <div class="coupan-btn"  style="color: #00B3A9; width:200px; height:50px">
                  
                    <button id="btn-ides" style="color: #00B3A9; width:100px; height:50px" type="submit"> Add</button>
             
                </div>
            </div>
        </div>

        <div class="member-div" style="display:flex ; flex-direction:row; justify-content:space-around ">
            <span>Log in to use your personal offers</span>

            
                <div class="coupan-log">
                    <button id="btn2" style="color: #00B3A9; width:100px; height:50px"> Log in</button>
              
                </div>
            </div>
        
            <div id="price" >

                <div class="order-div" style="display:flex ; flex-direction:row; justify-content:space-around " >
                    <div class="order" ><p>Orde valuer</p></div>
                  <div class="order-price" style="display:flex"> <p>Rs.<span id="rs">0.00</span></p></div>
                </div>

                
                <div class="order-div" style="display:flex ; flex-direction:row; justify-content:space-around ">
                  <div class="delavry">delivery</div>
                <div class="delavry-price"> <p>Rs.<span id="drs">0.00</span></p></div>
              </div>

      <div class="total-div" style="margin-top: 15px;display:flex ; flex-direction:row; justify-content:space-around "">
        <div class="delavry"><p>Total</p></div>
        <div class="delavry-price"> <p>Rs.<span id="tors">0.00</span></p>
        </div>
      </div>
     

    
     
    
`
}

export default checkout