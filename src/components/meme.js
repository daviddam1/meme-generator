import React from "react";

export default function Meme(){

const [formData,setFormData]=React.useState({
    topText:"",
    bottomText:"",
})

//useEffect with API

React.useEffect(() => {
    async function getMemes(){
        const res = await fetch("https://api.imgflip.com/get_memes")
        const data = await res.json()
        setAllMemes(data.data.memes)
    }
    getMemes()
},[])

//  const [memeImage,setMemeImage]=React.useState("http://i.imgflip.com/1bij.jpg")
    const[meme,setMeme]=React.useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })

    const [AllMemes,setAllMemes]=React.useState([])
    console.log(AllMemes)

    function getMemeImage(){
        const randomNumber=Math.floor(Math.random()*AllMemes.length)
        const url=AllMemes[randomNumber].url
        setMeme(prevMeme =>({
            ...prevMeme,
            randomImage:url,})
            
        )
    }

    function handleChange(event){
        const{name,value}=event.target
        setMeme(prevMeme =>({
            ...prevMeme,
            [name]:value
        }))
    }
    return(
        <main>
            <div className="form">
                <input 
                    type ="text"
                    className="form--input"
                    placeholder="Top text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                    >
                </input>
                <input 
                    type ="text"
                    className="form--input"
                    placeholder="Bottom text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                    >
                </input>
                <button
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image
                 </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>        
        </main>
    )
}