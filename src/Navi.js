const resume = require ("./assets/Molly_Blancaflor_Resume.pdf")
console.log (resume)

function Navi (){
    return ( 
        <div className= "max-w-7xl h-16 bg-emerald-600 m-auto justify-around flex flex-row">
           <button className="text-white border border-solid border-white rounded-md h-fit p-2 my-auto bg-emerald-800">
               <a href={resume} download="Molly Blancaflor Resume.pdf">Resume</a>
            </button>
           <button className="text-white border border-solid border-white rounded-md h-fit p-2 my-auto bg-emerald-800">
               Contact Me 
             </button>
           <p className="text-3xl text-white text-center items-center my-auto" >Molly Blancaflor</p>
           <button className="text-white border border-solid border-white rounded-md h-fit p-2 my-auto bg-emerald-800">
               Bio
           </button>
           <button className="text-white border border-solid border-white rounded-md h-fit p-2 my-auto bg-emerald-800">
               Portfolio
           </button>
        </div> 
    )
    
}
export default Navi 