<template>
    <div class="footer poppins-thin">
        <div class="footer-inside">
            <div class="div1">
                <p class="head">About Us</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis recusandae vel
                </p>
                <div class="logo-name">
                    <!-- <img src="../assets/logo.png" alt=""> -->
                    <p class="poppins-thick khelboo">Khelbo.com</p>
                </div>
            </div>
            <div class="div2">
                <p class="head">Resources</p>
                <p>Services</p>
                <p>Pricing</p>
                <p>Testimonials</p>
                <p>Blog</p>
            </div>
            <div class="div3">
                <p class="head">Important links</p>
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p>Cookie Policy</p>
                <p>Contact us</p>
            </div>
            <div class="div4">
                <p class="head">Our Social Links</p>
                <p>Sign up and receive the latest news via email</p>
            </div>
        </div><br>
         <div class="line">
            <hr>
            <div class="copyright">
                <p>Copyright 2024 Khelboo.com All Rights Reserved</p>
            </div>
        </div>
        
    </div>  
</template>
<script>

</script>
<style scoped>

.copyright{
    text-align: center;
}
.footer-inside{
    display: flex;
    /* flex-direction: column; */
    width: 100%;

}
.logo-name{
    display: flex;
    align-items: center;
}
img{
    width: 4vw;
    height: 4vw;
    border-radius: 1vw;
    margin-right: 5px;
}
    .footer{
        height: fit-content;
        background-color: rgb(35, 35, 35);
        padding: 10vw 10vw 1vw 10vw;
        color: rgb(157, 157, 157);
        font-size: 1rem;
    }
    .footer-inside > div{ 
        width: 18vw;
        margin: 2vw;
        /* min-width: 85px; */
     }
    .footer .div1{ 
        width: 22vw;
        margin: 2vw;
     }
     .footer .div4{ 
        width: 22vw;
        margin: 2vw;
     }
     .head{
        font-size: 1rem;
        font-weight: 700;
        color: white;
     }
    .khelboo{
        font-size: 1.9vw;
        color: white;
        font-style: italic;
     }

    @media screen and (max-width: 450px) {
        .footer{
            
            padding: 10vw 1vw 1vw 1vw;
            color: rgb(157, 157, 157);
            font-size: 0.7rem;
        }
        .footer-inside{
            /* display: flex; */
            flex-direction: column;
            /* width: 100%; */

}
    } 
</style>